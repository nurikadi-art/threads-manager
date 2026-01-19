#!/bin/bash
# Quick Imagen 3 Test Script
# Run: bash test-imagen.sh

API_KEY="AIzaSyDMXKrzN8BHlUiZBZnCx_-CJJMJN4vx3Y0"

echo "Testing Imagen 3 API..."

response=$(curl -sS -X POST \
  "https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-002:predict" \
  -H "x-goog-api-key: ${API_KEY}" \
  -H "Content-Type: application/json" \
  -d '{
    "instances": [{"prompt": "A luxurious golden gift box with red ribbon, dark background, 3D render"}],
    "parameters": {"sampleCount": 1}
  }')

echo "Response:"
echo "$response" | head -100

# Check if we got image data
if echo "$response" | grep -q "bytesBase64Encoded"; then
  echo ""
  echo "SUCCESS! Image data received."
  echo "Saving to test-image.png..."
  echo "$response" | python3 -c "
import sys, json, base64
data = json.load(sys.stdin)
img = data['predictions'][0]['bytesBase64Encoded']
with open('test-image.png', 'wb') as f:
    f.write(base64.b64decode(img))
print('Saved: test-image.png')
"
else
  echo ""
  echo "API returned an error or no image data."
fi
