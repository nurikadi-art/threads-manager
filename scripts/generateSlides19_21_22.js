/**
 * Generate Slides 19, 21, 22 Images
 * Premium brand designer quality - photorealistic, editorial style
 * Using Gemini 3 Pro Image model
 *
 * Run with: node scripts/generateSlides19_21_22.js
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

// Premium brand designer prompts - photorealistic editorial style
const slidePrompts = [
  {
    slideId: 19,
    filename: 'monday-panic.png',
    prompt: `EDITORIAL PHOTOGRAPHY, VOGUE BUSINESS STYLE:

A dramatic cinematic portrait of a stressed executive in their early 40s, captured in a moment of genuine anxiety. They're sitting at a sleek glass desk in a dimly lit corner office at dawn - the blue hour light filtering through floor-to-ceiling windows reveals a city skyline below.

THE SCENE: Their MacBook Pro screen illuminates their face with harsh blue light, casting dramatic shadows. One hand grips their forehead, fingers pressed into temples. A cold cup of artisanal coffee sits forgotten beside them, steam long gone. Their Hermès tie is loosened, top button undone - the visual language of composure crumbling.

THE DETAILS THAT SELL IT: A smartphone face-down on the desk (they can't bear to look at more notifications). Scattered papers suggesting chaos. The reflection of an unread email notification glowing in their designer glasses. A family photo in a silver frame faces the camera - a reminder of what stress costs.

LIGHTING: Moody chiaroscuro with the cold blue of the screen contrasting against warm amber desk lamp. Shallow depth of field, focus razor-sharp on the pained expression. Shot on Hasselblad medium format, 85mm f/1.4.

MOOD: The weight of corporate responsibility. The loneliness of leadership. That sinking feeling when you see "URGENT" in all caps.

COLOR PALETTE: Deep navy shadows, cool steel blues, warm skin tones, hints of gold from ambient lighting. Magazine editorial quality, could be a Bloomberg Businessweek cover story about executive burnout.`,
  },
  {
    slideId: 21,
    filename: 'choose-your-path.png',
    prompt: `EDITORIAL PHOTOGRAPHY, APPLE KEYNOTE QUALITY:

A powerful transformation moment captured in stunning detail. The same executive from before, but now radiating calm confidence. They're leaning back in their Herman Miller Aeron chair, one hand casually holding a tablet displaying three beautifully formatted email draft options - each labeled with subtle colored indicators (green checkmark, gold star, blue arrow).

THE SCENE: Morning golden hour now floods the same corner office. The harsh blue screen glow is replaced by warm, optimistic sunlight streaming through sheer curtains. Their posture tells the whole story - shoulders relaxed, slight knowing smile, the body language of someone who just found the cheat code.

THE DETAILS THAT SELL IT: Fresh steaming coffee in a premium ceramic mug (life has resumed). AirPods Pro on the desk suggesting they just finished a voice-to-AI session. The tablet screen shows three professional email response options with AI-suggested tone indicators. A subtle green notification badge suggests "Ready to Send." Their designer watch catches the light - they have time now.

LIGHTING: Warm cinematic golden hour, Rembrandt lighting on the face. Lens flare subtly kissing the corner of the frame. Shot with anamorphic characteristics, slight oval bokeh in the background suggesting premium cinema cameras.

MOOD: The exhale. Control regained. The satisfaction of having options instead of reactions. This is what having an AI co-pilot feels like.

COLOR PALETTE: Warm honey gold, soft cream whites, navy accents, champagne highlights. The visual language of premium technology advertising - think Apple, Porsche, or luxury watch campaigns.`,
  },
  {
    slideId: 22,
    filename: 'commute-cure.png',
    prompt: `EDITORIAL PHOTOGRAPHY, TESLA CAMPAIGN QUALITY:

An evocative portrait of creative inspiration captured in motion. A successful entrepreneur in their late 30s sits in the driver's seat of a premium vehicle (think Porsche Taycan or Mercedes EQS interior), stuck in beautiful golden hour traffic on a scenic freeway. But instead of frustration, their face shows the spark of revelation.

THE SCENE: The car's interior is bathed in warm sunset light filtering through a slightly tinted windshield. Through the window, we see the artistic blur of brake lights stretching into the distance like red ribbons - traffic transformed into abstract art. The city skyline glows amber and pink on the horizon.

THE DETAILS THAT SELL IT: Their hand hovers near a glowing voice assistant button on the premium leather steering wheel. A subtle green waveform on the car's center display suggests active voice recording - capturing the idea in real-time. Their eyes have that distant, inspired look of someone whose mind is somewhere brilliant. Minimalist interior, clean German engineering aesthetic.

THE CREATIVE TENSION: Ideas literally visualized as subtle, ethereal light trails or soft bokeh orbs floating in the air around their head - representing thoughts being captured before they escape. Not heavy-handed special effects, but almost imperceptible magical realism.

LIGHTING: Golden hour magic, sun low on the horizon creating rim light on their profile. The dashboard provides subtle blue accent lighting. Volumetric light with visible dust motes creating atmosphere.

MOOD: The alchemy of turning dead time into productivity. The relief of never losing a brilliant idea again. Movement and stillness coexisting. The modern executive who has optimized even their commute.

COLOR PALETTE: Sunset oranges and magentas, deep automotive blacks, chrome accents catching light, cool blue tech highlights. The aspirational lifestyle of premium automotive advertising meets Silicon Valley innovation culture.`,
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

async function generateImage(prompt, outputPath, slideId) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Generating Slide ${slideId}...`);
  console.log(`${'='.repeat(60)}`);

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
      console.log('Using Generative Language API...');
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
      console.error(errorText.substring(0, 500));
      return false;
    }

    const data = await response.json();

    // Extract image from Gemini response
    const candidates = data.candidates;
    if (candidates && candidates[0]?.content?.parts) {
      for (const part of candidates[0].content.parts) {
        if (part.inlineData) {
          const imageBuffer = Buffer.from(part.inlineData.data, 'base64');
          fs.writeFileSync(outputPath, imageBuffer);
          console.log(`\n✅ Image saved: ${outputPath}`);
          return true;
        }
      }
    }

    console.log('No image in response');
    console.log(JSON.stringify(data, null, 2).substring(0, 1000));
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

  console.log('\n🎨 PREMIUM BRAND DESIGNER IMAGE GENERATION');
  console.log('━'.repeat(60));
  console.log('Style: Editorial Photography, Photorealistic, Magazine Quality');
  console.log('Model: Gemini 3 Pro Image (latest image generation)');
  console.log('━'.repeat(60));

  for (const config of slidePrompts) {
    const outputPath = path.join(outputDir, config.filename);

    console.log(`\n📸 Slide ${config.slideId}: ${config.filename}`);
    console.log(`Concept: ${config.prompt.split('\n')[0]}`);

    const success = await generateImage(config.prompt, outputPath, config.slideId);

    if (success) {
      console.log(`   View: file://${outputPath}`);
    }

    // Delay between requests to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 5000));
  }

  console.log('\n' + '━'.repeat(60));
  console.log('🎬 Generation Complete!');
  console.log('━'.repeat(60));
}

main().catch(console.error);
