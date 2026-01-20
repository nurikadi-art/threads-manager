/**
 * Generate Slide 18 (Inbox Triage) Image
 * Using Gemini 3 Pro Image model
 *
 * Run with: node scripts/generateSlide18.js
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

const slide18Prompt = `A sophisticated executive professional sitting at a luxurious modern desk in a high-end office environment, calmly reviewing emails on an elegant ultrawide curved monitor. The scene conveys peace and control - the person appears relaxed and in command of their inbox. The monitor displays a clean, organized email interface with color-coded categories (green for approved, gold for priority, blue for scheduled). Soft ambient lighting with warm golden tones illuminates the scene. The desk features premium materials - dark wood, brass accents, and a leather chair. A steaming cup of coffee sits nearby. The overall mood is serene productivity - this person has mastered their inbox through AI automation. Photorealistic, cinematic lighting, shallow depth of field, luxury corporate aesthetic, dark navy and gold color palette, 4K quality, professional photography style`;

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
  console.log('Getting access token...');
  const accessToken = await getAccessToken();
  console.log('Access token obtained successfully');

  // Try Vertex AI endpoint first
  const vertexEndpoint = `https://us-central1-aiplatform.googleapis.com/v1/projects/${serviceAccount.project_id}/locations/us-central1/publishers/google/models/gemini-3-pro-image-preview:generateContent`;

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

  console.log('Calling Gemini 3 Pro Image API via Vertex AI...');

  try {
    let response = await fetch(vertexEndpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    // If Vertex AI fails, try Generative Language API
    if (!response.ok) {
      console.log('Vertex AI endpoint not available, trying Generative Language API...');
      const genAIEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent`;

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
      console.error(`API Error: ${response.status}`);
      console.error(errorText);
      return false;
    }

    const data = await response.json();
    console.log('Response received');

    // Extract image from Gemini response
    const candidates = data.candidates;
    if (candidates && candidates[0]?.content?.parts) {
      for (const part of candidates[0].content.parts) {
        if (part.inlineData) {
          const imageBuffer = Buffer.from(part.inlineData.data, 'base64');
          fs.writeFileSync(outputPath, imageBuffer);
          console.log(`\nImage saved to: ${outputPath}`);
          return true;
        }
      }
    }

    console.log('No image in response');
    console.log(JSON.stringify(data, null, 2));
    return false;

  } catch (error) {
    console.error('Error:', error.message);
    return false;
  }
}

async function main() {
  const outputDir = path.resolve(__dirname, '../public/images/generated');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = path.join(outputDir, 'inbox-triage.png');

  console.log('='.repeat(60));
  console.log('Generating Slide 18: Inbox Triage Image');
  console.log('Model: Gemini 3 Pro Image');
  console.log('='.repeat(60));
  console.log('\nPrompt:', slide18Prompt.substring(0, 200) + '...\n');

  const success = await generateImage(slide18Prompt, outputPath);

  if (success) {
    console.log('\n✅ Image generation complete!');
    console.log(`View at: file://${outputPath}`);
  } else {
    console.log('\n❌ Image generation failed');
  }
}

main().catch(console.error);
