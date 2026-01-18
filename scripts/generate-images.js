#!/usr/bin/env node
/**
 * Imagen 3 Image Generator for Presentation Slides
 *
 * Usage:
 *   1. Set your API key: export GEMINI_API_KEY="your-key-here"
 *   2. Run: node scripts/generate-images.js
 *
 * Images will be saved to public/images/
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error('Error: GEMINI_API_KEY environment variable not set');
  console.error('Run: export GEMINI_API_KEY="your-api-key"');
  process.exit(1);
}

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

async function generateImage(prompt, filename) {
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
        'x-goog-api-key': API_KEY,
        'Content-Length': Buffer.byteLength(data)
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const response = JSON.parse(body);

          if (response.error) {
            reject(new Error(response.error.message));
            return;
          }

          if (response.predictions && response.predictions[0]) {
            const imageData = response.predictions[0].bytesBase64Encoded;
            const imagePath = path.join(outputDir, filename);
            fs.writeFileSync(imagePath, Buffer.from(imageData, 'base64'));
            console.log(`✓ Saved: ${filename}`);
            resolve(imagePath);
          } else {
            reject(new Error('No image data in response'));
          }
        } catch (e) {
          reject(new Error(`Failed to parse response: ${e.message}\nBody: ${body.substring(0, 500)}`));
        }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function main() {
  console.log('🎨 Imagen 3 Image Generator');
  console.log('===========================\n');
  console.log(`Generating ${imagePrompts.length} images...\n`);

  let success = 0;
  let failed = 0;

  for (const item of imagePrompts) {
    console.log(`Generating: ${item.id}...`);
    try {
      await generateImage(item.prompt, item.filename);
      success++;
      // Small delay between requests to avoid rate limiting
      await new Promise(r => setTimeout(r, 1000));
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
