#!/usr/bin/env node
/**
 * Simple test script for Vertex AI Imagen 3
 * Run: node scripts/test-vertex-ai.cjs
 */
const https = require('https');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// Load service account credentials
const serviceAccountPath = path.join(__dirname, '..', 'service-account.json');
console.log('Loading service account from:', serviceAccountPath);

if (!fs.existsSync(serviceAccountPath)) {
  console.error('ERROR: service-account.json not found!');
  console.error('Please ensure service-account.json is in the project root.');
  process.exit(1);
}

const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));
console.log('Project ID:', serviceAccount.project_id);
console.log('Client Email:', serviceAccount.client_email);

const PROJECT_ID = serviceAccount.project_id;
const REGION = 'us-central1';

// Create JWT for authentication
function createJWT() {
  const now = Math.floor(Date.now() / 1000);
  const header = {
    alg: 'RS256',
    typ: 'JWT',
    kid: serviceAccount.private_key_id
  };

  const payload = {
    iss: serviceAccount.client_email,
    sub: serviceAccount.client_email,
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
    scope: 'https://www.googleapis.com/auth/cloud-platform'
  };

  const base64Header = Buffer.from(JSON.stringify(header)).toString('base64url');
  const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signatureInput = `${base64Header}.${base64Payload}`;

  const sign = crypto.createSign('RSA-SHA256');
  sign.update(signatureInput);
  const signature = sign.sign(serviceAccount.private_key, 'base64url');

  return `${signatureInput}.${signature}`;
}

// Get access token from Google
function getAccessToken() {
  return new Promise((resolve, reject) => {
    const jwt = createJWT();
    const postData = `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`;

    const options = {
      hostname: 'oauth2.googleapis.com',
      port: 443,
      path: '/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    console.log('\nRequesting access token from Google OAuth...');

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.access_token) {
            console.log('✓ Access token obtained successfully!');
            resolve(response.access_token);
          } else {
            console.error('Token response:', data);
            reject(new Error(`Failed to get token: ${response.error_description || response.error || 'Unknown error'}`));
          }
        } catch (e) {
          reject(new Error(`Failed to parse token response: ${data}`));
        }
      });
    });

    req.on('error', (e) => {
      reject(new Error(`Network error: ${e.message}`));
    });

    req.write(postData);
    req.end();
  });
}

// Generate a test image
function generateTestImage(accessToken) {
  return new Promise((resolve, reject) => {
    const prompt = 'A luxurious golden gift box with elegant red ribbon, floating in space with subtle golden sparkles. Dark dramatic background. High quality 3D render.';

    const requestBody = JSON.stringify({
      instances: [{ prompt }],
      parameters: {
        sampleCount: 1,
        aspectRatio: '16:9',
        safetyFilterLevel: 'block_few'
      }
    });

    const options = {
      hostname: `${REGION}-aiplatform.googleapis.com`,
      port: 443,
      path: `/v1/projects/${PROJECT_ID}/locations/${REGION}/publishers/google/models/imagen-3.0-generate-001:predict`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(requestBody)
      }
    };

    console.log('\nGenerating test image with Imagen 3...');
    console.log('Endpoint:', `https://${options.hostname}${options.path}`);
    console.log('Prompt:', prompt.substring(0, 50) + '...');

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        console.log('\nResponse status:', res.statusCode);

        try {
          const response = JSON.parse(data);

          if (response.error) {
            console.error('API Error:', JSON.stringify(response.error, null, 2));
            reject(new Error(response.error.message || 'API Error'));
            return;
          }

          if (response.predictions && response.predictions[0]) {
            const imageData = response.predictions[0].bytesBase64Encoded;
            if (imageData) {
              // Save the image
              const outputDir = path.join(__dirname, '..', 'public', 'images', 'generated');
              if (!fs.existsSync(outputDir)) {
                fs.mkdirSync(outputDir, { recursive: true });
              }
              const outputPath = path.join(outputDir, 'test-gift-box.png');
              fs.writeFileSync(outputPath, Buffer.from(imageData, 'base64'));
              console.log('\n✓ SUCCESS! Image saved to:', outputPath);
              resolve(outputPath);
            } else {
              reject(new Error('No image data in response'));
            }
          } else {
            console.log('Full response:', data.substring(0, 500));
            reject(new Error('Unexpected response format'));
          }
        } catch (e) {
          console.error('Parse error. Raw response:', data.substring(0, 500));
          reject(new Error(`Failed to parse response: ${e.message}`));
        }
      });
    });

    req.on('error', (e) => {
      reject(new Error(`Network error: ${e.message}`));
    });

    req.write(requestBody);
    req.end();
  });
}

async function main() {
  console.log('='.repeat(50));
  console.log('Vertex AI Imagen 3 Test');
  console.log('='.repeat(50));

  try {
    const accessToken = await getAccessToken();
    await generateTestImage(accessToken);
    console.log('\n✓ Test completed successfully!');
  } catch (error) {
    console.error('\n✗ Error:', error.message);
    console.log('\nTroubleshooting tips:');
    console.log('1. Ensure Vertex AI API is enabled in Google Cloud Console');
    console.log('2. Ensure the service account has "Vertex AI User" role');
    console.log('3. Check if your project has billing enabled');
    process.exit(1);
  }
}

main();
