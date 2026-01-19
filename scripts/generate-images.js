#!/usr/bin/env node
/**
 * Imagen 3 Image Generator for Presentation Slides
 * Supports both API Key and Service Account authentication
 *
 * Usage with API Key:
 *   export GEMINI_API_KEY="your-key-here"
 *   node scripts/generate-images.js
 *
 * Usage with Service Account:
 *   export GOOGLE_APPLICATION_CREDENTIALS="path/to/service-account.json"
 *   node scripts/generate-images.js
 *
 * Images will be saved to public/images/generated/
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

// Image prompts for each slide that needs an illustration
const imagePrompts = [
  {
    id: 'gift-box',
    prompt: 'A luxurious golden gift box with elegant red satin ribbon, dark moody background, premium 3D render, gold metallic accents, cinematic lighting, high detail',
    filename: 'gift-box.png'
  },
  {
    id: 'cockpit',
    prompt: 'Airplane cockpit view from pilot seat, modern commercial aircraft, sunrise through windshield, gold and amber lighting, cinematic, ultra realistic',
    filename: 'cockpit.png'
  },
  {
    id: 'calculator',
    prompt: 'Vintage calculator with gold accents on dark surface, dramatic lighting, premium product photography, luxury aesthetic',
    filename: 'calculator.png'
  },
  {
    id: 'robot-assistant',
    prompt: 'Friendly humanoid robot assistant with gold accents, dark background, soft glowing eyes, premium 3D render, helpful pose',
    filename: 'robot-assistant.png'
  },
  {
    id: 'ai-brain',
    prompt: 'Abstract golden neural network brain visualization, dark background, glowing gold connections, luxury tech aesthetic, 3D render',
    filename: 'ai-brain.png'
  },
  {
    id: 'spreadsheet-chaos',
    prompt: 'Chaotic spreadsheet papers flying through air, stressed businessman silhouette, dark moody office, golden desk lamp, cinematic',
    filename: 'spreadsheet-chaos.png'
  },
  {
    id: 'transformation',
    prompt: 'Before and after transformation concept, chaos to order, dark to golden light transition, abstract business concept, premium render',
    filename: 'transformation.png'
  },
  {
    id: 'leverage',
    prompt: 'Golden lever mechanism lifting heavy weight effortlessly, dark background, physics concept visualization, luxury metallic finish',
    filename: 'leverage.png'
  },
  {
    id: 'pilot-executive',
    prompt: 'Split image of stressed pilot vs relaxed executive in suit, dark luxury aesthetic, golden accents, conceptual business illustration',
    filename: 'pilot-executive.png'
  },
  {
    id: 'chatgpt-logo',
    prompt: 'Abstract green glowing orb representing AI assistant, dark background, ethereal glow, premium tech aesthetic',
    filename: 'chatgpt-concept.png'
  },
  {
    id: 'claude-logo',
    prompt: 'Abstract warm orange-brown glowing orb representing analytical AI, dark background, sophisticated glow, premium tech aesthetic',
    filename: 'claude-concept.png'
  },
  {
    id: 'perplexity-logo',
    prompt: 'Abstract cyan blue glowing orb with search/magnifying glass motif, dark background, knowledge concept, premium tech aesthetic',
    filename: 'perplexity-concept.png'
  },
  {
    id: 'warning-shield',
    prompt: 'Golden warning shield with alert symbol, dark dramatic background, glowing edges, security concept, premium 3D render',
    filename: 'warning-shield.png'
  },
  {
    id: 'human-loop',
    prompt: 'Human hand and robotic hand working together, golden light between them, dark background, collaboration concept, cinematic',
    filename: 'human-loop.png'
  },
  {
    id: 'success-chart',
    prompt: 'Golden rising chart bars breaking through ceiling, dark background, success and growth concept, premium 3D visualization',
    filename: 'success-chart.png'
  }
];

const outputDir = path.join(__dirname, '..', 'public', 'images', 'generated');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`Created directory: ${outputDir}`);
}

// Base64URL encode
function base64urlEncode(str) {
  return Buffer.from(str)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

// Generate JWT for service account
function generateJWT(serviceAccount) {
  const now = Math.floor(Date.now() / 1000);
  const expiry = now + 3600; // 1 hour

  const header = {
    alg: 'RS256',
    typ: 'JWT'
  };

  const payload = {
    iss: serviceAccount.client_email,
    sub: serviceAccount.client_email,
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: expiry,
    scope: 'https://www.googleapis.com/auth/cloud-platform'
  };

  const headerB64 = base64urlEncode(JSON.stringify(header));
  const payloadB64 = base64urlEncode(JSON.stringify(payload));
  const signatureInput = `${headerB64}.${payloadB64}`;

  const sign = crypto.createSign('RSA-SHA256');
  sign.update(signatureInput);
  const signature = sign.sign(serviceAccount.private_key, 'base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');

  return `${signatureInput}.${signature}`;
}

// Exchange JWT for access token
async function getAccessToken(serviceAccount) {
  return new Promise((resolve, reject) => {
    const jwt = generateJWT(serviceAccount);

    const postData = new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    }).toString();

    const options = {
      hostname: 'oauth2.googleapis.com',
      path: '/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const response = JSON.parse(body);
          if (response.access_token) {
            resolve(response.access_token);
          } else {
            reject(new Error(response.error_description || 'Failed to get access token'));
          }
        } catch (e) {
          reject(new Error(`Failed to parse token response: ${e.message}`));
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

// Generate image using API key
async function generateImageWithApiKey(prompt, filename, apiKey) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      instances: [{ prompt }],
      parameters: {
        sampleCount: 1,
        aspectRatio: '16:9'
      }
    });

    const options = {
      hostname: 'generativelanguage.googleapis.com',
      path: '/v1beta/models/imagen-3.0-generate-002:predict',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
        'Content-Length': Buffer.byteLength(data)
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        handleImageResponse(body, filename, resolve, reject);
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

// Generate image using service account (Vertex AI)
async function generateImageWithServiceAccount(prompt, filename, accessToken, projectId) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      instances: [{ prompt }],
      parameters: {
        sampleCount: 1,
        aspectRatio: '16:9'
      }
    });

    const options = {
      hostname: 'us-central1-aiplatform.googleapis.com',
      path: `/v1/projects/${projectId}/locations/us-central1/publishers/google/models/imagen-3.0-generate-002:predict`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'Content-Length': Buffer.byteLength(data)
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        handleImageResponse(body, filename, resolve, reject);
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

function handleImageResponse(body, filename, resolve, reject) {
  try {
    const response = JSON.parse(body);

    if (response.error) {
      reject(new Error(response.error.message || JSON.stringify(response.error)));
      return;
    }

    const predictions = response.predictions || response.Predictions;
    if (predictions && predictions[0]) {
      const imageData = predictions[0].bytesBase64Encoded || predictions[0].image;
      if (imageData) {
        const imagePath = path.join(outputDir, filename);
        fs.writeFileSync(imagePath, Buffer.from(imageData, 'base64'));
        console.log(`✓ Saved: ${filename}`);
        resolve(imagePath);
      } else {
        reject(new Error('No image data in prediction'));
      }
    } else {
      reject(new Error(`No predictions in response: ${body.substring(0, 500)}`));
    }
  } catch (e) {
    reject(new Error(`Failed to parse response: ${e.message}\nBody: ${body.substring(0, 500)}`));
  }
}

async function main() {
  console.log('🎨 Imagen 3 Image Generator');
  console.log('===========================\n');

  const apiKey = process.env.GEMINI_API_KEY;
  const serviceAccountPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;

  let useServiceAccount = false;
  let accessToken = null;
  let projectId = null;
  let serviceAccount = null;

  if (serviceAccountPath && fs.existsSync(serviceAccountPath)) {
    console.log('Using Service Account authentication...');
    serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));
    projectId = serviceAccount.project_id;

    console.log(`Project: ${projectId}`);
    console.log('Getting access token...\n');

    try {
      accessToken = await getAccessToken(serviceAccount);
      useServiceAccount = true;
      console.log('✓ Access token obtained\n');
    } catch (error) {
      console.error(`Failed to get access token: ${error.message}`);
      process.exit(1);
    }
  } else if (apiKey) {
    console.log('Using API Key authentication...\n');
  } else {
    console.error('Error: No authentication method found.');
    console.error('Set GEMINI_API_KEY or GOOGLE_APPLICATION_CREDENTIALS');
    process.exit(1);
  }

  console.log(`Generating ${imagePrompts.length} images...\n`);

  let success = 0;
  let failed = 0;

  for (const item of imagePrompts) {
    console.log(`Generating: ${item.id}...`);
    try {
      if (useServiceAccount) {
        await generateImageWithServiceAccount(item.prompt, item.filename, accessToken, projectId);
      } else {
        await generateImageWithApiKey(item.prompt, item.filename, apiKey);
      }
      success++;
      // Small delay between requests to avoid rate limiting
      await new Promise(r => setTimeout(r, 2000));
    } catch (error) {
      console.error(`✗ Failed: ${item.id} - ${error.message}`);
      failed++;
    }
  }

  console.log('\n===========================');
  console.log(`Done! Success: ${success}, Failed: ${failed}`);
  console.log(`Images saved to: ${outputDir}`);
}

main().catch(console.error);
