/**
 * Gemini 3 Pro Image Generation Script
 *
 * This script uses Google's Gemini 3 Pro Image model with a service account
 * to generate images for the presentation slides. Run with: node scripts/generateImages.js
 *
 * Requires: npm install google-auth-library
 */

import { GoogleAuth } from 'google-auth-library';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load service account
const serviceAccountPath = path.resolve(__dirname, '../../service-account.json');
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));

// Image prompts for different slides based on PDF content
const imagePrompts = [
  {
    slideId: 2,
    filename: 'gift-box.png',
    prompt: 'A beautiful 3D blue gift box with a red satin ribbon and bow on top, floating in space with a soft glow, photorealistic, high quality, professional product photography style, dark background with subtle golden sparkles',
  },
  {
    slideId: 3,
    filename: 'brain-overwhelmed.png',
    prompt: 'A glowing digital brain connected to circuit patterns with a stressed person holding their head surrounded by floating paper documents, cyberpunk style, blue and gold color scheme, dark background',
  },
  {
    slideId: 6,
    filename: 'cockpit-sunset.png',
    prompt: 'Airplane cockpit view from pilot perspective at sunset, looking through the windshield at a beautiful orange and purple sunset with clouds, instrument panel visible, photorealistic, cinematic lighting',
  },
  {
    slideId: 8,
    filename: 'calculator-words.png',
    prompt: 'A vintage calculator with letters and words floating out of its display instead of numbers, symbolizing AI as a word calculator, artistic illustration, dark background with golden accents',
  },
  {
    slideId: 18,
    filename: 'inbox-triage.png',
    prompt: `A sophisticated executive professional sitting at a luxurious modern desk in a high-end office environment, calmly reviewing emails on an elegant ultrawide curved monitor. The scene conveys peace and control - the person appears relaxed and in command of their inbox. The monitor displays a clean, organized email interface with color-coded categories (green for approved, gold for priority, blue for scheduled). Soft ambient lighting with warm golden tones illuminates the scene. The desk features premium materials - dark wood, brass accents, and a leather chair. A steaming cup of coffee sits nearby. The overall mood is serene productivity - this person has mastered their inbox through AI automation. Photorealistic, cinematic lighting, shallow depth of field, luxury corporate aesthetic, dark navy and gold color palette, 4K quality, professional photography style`,
  },
  {
    slideId: 19,
    filename: 'gmail-inbox.png',
    prompt: 'A Gmail inbox interface showing an urgent email with red notification, subject line "URGENT: VERY UNHAPPY WITH SERVICE!", professional UI mockup style, realistic email client interface',
  },
];

async function getAccessToken() {
  const auth = new GoogleAuth({
    credentials: serviceAccount,
    scopes: [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/generative-language'
    ],
  });
  const client = await auth.getClient();
  const tokenResponse = await client.getAccessToken();
  return tokenResponse.token;
}

async function generateImage(prompt, outputPath) {
  const accessToken = await getAccessToken();

  // Try Vertex AI endpoint first, fallback to Generative Language API
  const vertexEndpoint = `https://us-central1-aiplatform.googleapis.com/v1/projects/${serviceAccount.project_id}/locations/us-central1/publishers/google/models/gemini-3-pro-image-preview:generateContent`;
  const genAIEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent`;

  const requestBody = {
    contents: [{
      role: "user",
      parts: [{
        text: `Generate a high-quality photorealistic image: ${prompt}`
      }]
    }],
    generationConfig: {
      responseModalities: ["image", "text"],
      temperature: 1.0
    }
  };

  try {
    console.log('Calling Gemini 3 Pro Image API...');

    let response = await fetch(vertexEndpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    // Fallback to Generative Language API
    if (!response.ok) {
      response = await fetch(genAIEndpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
    }

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API request failed: ${response.status} - ${errorText}`);
    }

    const data = await response.json();

    // Extract image from Gemini response
    const candidates = data.candidates;
    if (candidates && candidates[0]?.content?.parts) {
      for (const part of candidates[0].content.parts) {
        if (part.inlineData) {
          const imageBuffer = Buffer.from(part.inlineData.data, 'base64');
          fs.writeFileSync(outputPath, imageBuffer);
          console.log(`✅ Generated: ${outputPath}`);
          return true;
        }
      }
    }

    console.log(`No image generated for prompt. Response:`, JSON.stringify(data, null, 2).substring(0, 500));
    return false;
  } catch (error) {
    console.error(`Error generating image:`, error.message);
    return false;
  }
}

async function main() {
  const outputDir = path.resolve(__dirname, '../public/images/generated');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('🎨 Starting image generation with Gemini 3 Pro Image...\n');

  for (const imageConfig of imagePrompts) {
    const outputPath = path.join(outputDir, imageConfig.filename);
    console.log(`\nGenerating image for Slide ${imageConfig.slideId}: ${imageConfig.filename}`);
    console.log(`Prompt: ${imageConfig.prompt.substring(0, 100)}...`);

    await generateImage(imageConfig.prompt, outputPath);

    // Add delay between requests to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 5000));
  }

  console.log('\nImage generation complete!');
}

main().catch(console.error);
