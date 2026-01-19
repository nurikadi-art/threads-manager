/**
 * Gemini 3 Pro Image Generation Script - New Slides Enhancement
 *
 * This script generates images for slides that need new visual assets:
 * - 4 abstract illustrations (slides 28, 31, 36, 37)
 * - 6 professional portraits (slides 43, 46, 47, 58, 59, 62)
 *
 * Run with: node scripts/generateNewImages.js
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

// Image prompts for the new slide enhancements
const imagePrompts = [
  // === ABSTRACT ILLUSTRATIONS ===
  {
    slideId: 28,
    filename: 'hidden-cost.png',
    prompt: `Abstract editorial illustration of a person silhouette lying in bed at night, looking at a glowing smartphone screen. Translucent hourglass and analog clock hover ethereally above them in golden ethereal light, symbolizing time being drained away. Dark moody bedroom environment with deep shadows. Luxury editorial magazine style illustration. Color palette: gold, warm amber, and deep navy blue. Subtle texture and grain. Artistic, not photorealistic. Premium quality editorial illustration.`,
  },
  {
    slideId: 31,
    filename: 'glitchy-robot.png',
    prompt: `Sleek futuristic humanoid robot head with visible digital glitch artifacts and VHS-style distortion effects. A speech bubble emerges showing "2+2=5" in glowing text, representing AI hallucination errors. Dark background with golden circuit board patterns and flowing data streams. Luxury tech aesthetic with premium materials. Editorial magazine quality illustration. Color palette: gold, bronze metallic, deep black. Cyberpunk meets luxury design. High contrast, dramatic lighting.`,
  },
  {
    slideId: 36,
    filename: 'prompt-injection-shield.png',
    prompt: `A golden ornate shield floating in dark space with streams of glowing code and data flowing around it. Sharp digital arrows attempting to pierce through an invisible barrier around the shield, representing prompt injection attacks. Cybersecurity visualization concept. Dramatic lighting with gold highlights against deep black background. Editorial illustration style. Premium luxury tech aesthetic. Color palette: rich gold, amber, deep black, subtle red accents on the arrows.`,
  },
  {
    slideId: 37,
    filename: 'dpd-robot-error.png',
    prompt: `Cute stylized delivery robot with a boxy body and expressive digital face showing confusion. The robot is dropping a cardboard package. A red error message popup floats above the robot reading "ERROR". The robot has a bewildered, apologetic expression. Dark background with gold accents and subtle humor. Premium 3D render style, not too cartoonish. Editorial illustration quality. Color palette: gold, bronze, warm amber, dark background with red error accent.`,
  },

  // === PROFESSIONAL PORTRAITS ===
  {
    slideId: 43,
    filename: 'ai-operator.png',
    prompt: `Professional portrait of a friendly virtual assistant or customer service operator at a modern executive desk. Multiple monitors visible but blurred in background showing charts and dashboards. Natural candid iPhone-style photography with warm ambient office lighting. Business casual attire. Approachable, confident expression with a slight smile. Clean, minimal background. Shallow depth of field. Modern corporate aesthetic. Diverse professional, any ethnicity. High quality portrait photography style.`,
  },
  {
    slideId: 46,
    filename: 'va-confident.png',
    prompt: `Confident professional person looking at a smartphone, natural iPhone-quality portrait photography. Soft window lighting creating a warm glow. Minimal modern background. Focused, determined expression while reading something important on the phone. Smart casual business attire. Clean aesthetic. Diverse professional, any ethnicity. Authentic candid moment captured. Premium portrait photography quality.`,
  },
  {
    slideId: 47,
    filename: 'va-thoughtful.png',
    prompt: `Thoughtful professional person writing or thinking at a modern desk with a laptop visible. Natural candid photography style like an iPhone photo. Contemplative expression, perhaps hand touching chin. Soft natural lighting from a window. Business casual attire in neutral colors. Minimal, clean background. Diverse professional, any ethnicity. Capturing a moment of creative thinking or problem solving. Premium portrait photography quality.`,
  },
  {
    slideId: 58,
    filename: 'assistant-friendly.png',
    prompt: `Friendly professional assistant sitting casually with a laptop, warm and approachable expression with a genuine smile. Natural iPhone photography style. Business casual attire in warm tones. Soft ambient lighting. The person appears relaxed yet professional, like someone you would trust to help with your business. Minimal background. Diverse professional, any ethnicity. Captures authenticity and warmth. Premium portrait photography quality.`,
  },
  {
    slideId: 59,
    filename: 'assistant-expert.png',
    prompt: `Confident professional expert holding a tablet or clipboard, success-oriented power pose. Natural lighting, approachable yet competent expression. The person looks like a trusted advisor or consultant. Smart professional attire. Minimal clean background. Diverse professional, any ethnicity. Conveys expertise and reliability. Natural iPhone-style candid photography. Premium portrait photography quality.`,
  },
  {
    slideId: 62,
    filename: 'va-international.png',
    prompt: `Professional remote worker with a headset on a video call, diverse international appearance suggesting global connectivity. Warm natural lighting in a modern home office setup with clean background. Friendly professional expression while engaged in a call. Business casual attire. The scene conveys quality, professionalism, and international capability. Natural iPhone-style photography. Premium portrait photography quality.`,
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
  const accessToken = await getAccessToken();

  // Try Vertex AI endpoint first, fallback to Generative Language API
  const vertexEndpoint = `https://us-central1-aiplatform.googleapis.com/v1/projects/${serviceAccount.project_id}/locations/us-central1/publishers/google/models/gemini-3-pro-image-preview:generateContent`;
  const genAIEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent`;

  const requestBody = {
    contents: [{
      role: "user",
      parts: [{
        text: `Generate a high-quality image: ${prompt}`
      }]
    }],
    generationConfig: {
      responseModalities: ["image", "text"],
      temperature: 1.0
    }
  };

  try {
    console.log(`\n🎨 Generating image for Slide ${slideId}...`);

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
      console.log('Falling back to Generative Language API...');
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

    console.log(`⚠️ No image generated for Slide ${slideId}. Response:`, JSON.stringify(data, null, 2).substring(0, 500));
    return false;
  } catch (error) {
    console.error(`❌ Error generating image for Slide ${slideId}:`, error.message);
    return false;
  }
}

async function main() {
  const outputDir = path.resolve(__dirname, '../public/images/generated');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('====================================================');
  console.log('🎨 Starting New Image Generation with Gemini 3 Pro');
  console.log('====================================================');
  console.log(`\nGenerating ${imagePrompts.length} images...`);
  console.log('- 4 Abstract Illustrations (Slides 28, 31, 36, 37)');
  console.log('- 6 Professional Portraits (Slides 43, 46, 47, 58, 59, 62)\n');

  let successCount = 0;
  let failCount = 0;

  for (const imageConfig of imagePrompts) {
    const outputPath = path.join(outputDir, imageConfig.filename);
    console.log(`\n📷 Slide ${imageConfig.slideId}: ${imageConfig.filename}`);
    console.log(`   Prompt: ${imageConfig.prompt.substring(0, 80)}...`);

    const success = await generateImage(imageConfig.prompt, outputPath, imageConfig.slideId);

    if (success) {
      successCount++;
    } else {
      failCount++;
    }

    // Add delay between requests to avoid rate limiting
    console.log('   Waiting 5 seconds before next request...');
    await new Promise(resolve => setTimeout(resolve, 5000));
  }

  console.log('\n====================================================');
  console.log('📊 Generation Summary');
  console.log('====================================================');
  console.log(`✅ Successfully generated: ${successCount} images`);
  console.log(`❌ Failed: ${failCount} images`);
  console.log(`\nImages saved to: ${outputDir}`);
}

main().catch(console.error);
