#!/usr/bin/env node
const https = require('https');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// Load service account credentials
const serviceAccount = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'service-account.json'), 'utf8')
);

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
async function getAccessToken() {
  const jwt = createJWT();

  return new Promise((resolve, reject) => {
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

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.access_token) {
            resolve(response.access_token);
          } else {
            reject(new Error(`Failed to get token: ${data}`));
          }
        } catch (e) {
          reject(new Error(`Failed to parse token response: ${data}`));
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

// Generate image with Imagen 3
async function generateImage(accessToken, prompt, filename) {
  return new Promise((resolve, reject) => {
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

    console.log(`Generating: ${filename}...`);

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const response = JSON.parse(data);

          if (response.error) {
            reject(new Error(`API Error: ${JSON.stringify(response.error)}`));
            return;
          }

          if (response.predictions && response.predictions[0]) {
            const imageData = response.predictions[0].bytesBase64Encoded;
            if (imageData) {
              const outputDir = path.join(__dirname, '..', 'public', 'images', 'generated');
              if (!fs.existsSync(outputDir)) {
                fs.mkdirSync(outputDir, { recursive: true });
              }
              const outputPath = path.join(outputDir, filename);
              fs.writeFileSync(outputPath, Buffer.from(imageData, 'base64'));
              console.log(`✓ Saved: ${outputPath}`);
              resolve(outputPath);
            } else {
              reject(new Error('No image data in response'));
            }
          } else {
            reject(new Error(`Unexpected response: ${data}`));
          }
        } catch (e) {
          reject(new Error(`Failed to parse response: ${data}`));
        }
      });
    });

    req.on('error', reject);
    req.write(requestBody);
    req.end();
  });
}

// Image prompts for the presentation
const imagePrompts = [
  {
    id: 'gift-box',
    prompt: 'A luxurious golden gift box with elegant red ribbon, floating in space with subtle golden sparkles around it. Dark dramatic background with soft ambient lighting. Photorealistic 3D render, high quality.',
    filename: 'gift-box.png'
  },
  {
    id: 'ai-brain',
    prompt: 'A glowing golden neural network brain floating in dark space, with elegant gold and amber light connections. Futuristic luxury tech aesthetic. Clean minimalist background. High quality 3D render.',
    filename: 'ai-brain.png'
  },
  {
    id: 'robot-assistant',
    prompt: 'A sleek, friendly humanoid robot assistant in gold and black colors, professional business setting. Warm ambient lighting, luxury aesthetic. Photorealistic 3D render.',
    filename: 'robot-assistant.png'
  }
];

async function main() {
  try {
    console.log('Getting access token...');
    const accessToken = await getAccessToken();
    console.log('✓ Access token obtained\n');

    // Test with one image first
    const testPrompt = imagePrompts[0];
    await generateImage(accessToken, testPrompt.prompt, testPrompt.filename);

    console.log('\n✓ Test image generated successfully!');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
