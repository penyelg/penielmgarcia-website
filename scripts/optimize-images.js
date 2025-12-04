import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function optimizeImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .resize(800) // Resize to a max width of 800px, maintaining aspect ratio
      .jpeg({ 
        quality: 80,
        progressive: true,
        mozjpeg: true
      })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = originalSize - optimizedSize;
    
    console.log(`Optimized ${path.basename(inputPath)}:`);
    console.log(`  Original size: ${(originalSize / 1024).toFixed(2)} KB`);
    console.log(`  Optimized size: ${(optimizedSize / 1024).toFixed(2)} KB`);
    console.log(`  Savings: ${(savings / 1024).toFixed(2)} KB (${((savings / originalSize) * 100).toFixed(1)}% reduction)`);
    
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
}

// Create optimized directory if it doesn't exist
const outputDir = path.join(__dirname, '../public/optimized');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Optimize the image
const inputImage = path.join(__dirname, '../src/assets/nyel.jpg');
const outputImage = path.join(outputDir, 'nyel-optimized.jpg');

optimizeImage(inputImage, outputImage);
