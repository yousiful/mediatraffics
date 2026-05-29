/**
 * Image Optimization Script
 *
 * This script optimizes all images in the /public/images/original directory
 * and generates responsive sizes in WebP and fallback formats.
 *
 * Usage:
 *   npm install sharp
 *   ts-node scripts/optimize-images.ts
 */

import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

interface Config {
  inputDir: string;
  outputDir: string;
  sizes: number[];
  quality: {
    webp: number;
    jpg: number;
    png: number;
  };
  formats: string[];
}

const config: Config = {
  inputDir: './public/images/original',
  outputDir: './public/images/optimized',
  sizes: [320, 640, 768, 1024, 1280, 1536, 1920],
  quality: {
    webp: 75,
    jpg: 80,
    png: 80
  },
  formats: ['webp', 'jpg']
};

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

async function optimizeImage(inputPath: string): Promise<void> {
  const filename = path.basename(inputPath);
  const ext = path.extname(filename).toLowerCase();
  const name = filename.replace(ext, '');

  console.log(`\n📸 Processing: ${filename}`);

  try {
    const metadata = await sharp(inputPath).metadata();
    const originalSize = metadata.size || 0;

    console.log(`   Original: ${metadata.width}x${metadata.height} (${formatBytes(originalSize)})`);

    let totalSaved = 0;
    let filesCreated = 0;

    for (const size of config.sizes) {
      if (metadata.width && size > metadata.width) {
        continue;
      }

      for (const format of config.formats) {
        const outputFilename = `${name}-${size}w.${format}`;
        const outputPath = path.join(config.outputDir, outputFilename);

        const sharpInstance = sharp(inputPath)
          .resize(size, null, {
            fit: 'inside',
            withoutEnlargement: true
          });

        if (format === 'webp') {
          await sharpInstance
            .webp({ quality: config.quality.webp })
            .toFile(outputPath);
        } else if (format === 'jpg' || format === 'jpeg') {
          await sharpInstance
            .jpeg({ quality: config.quality.jpg })
            .toFile(outputPath);
        } else if (format === 'png') {
          await sharpInstance
            .png({ quality: config.quality.png })
            .toFile(outputPath);
        }

        const stats = await fs.stat(outputPath);
        const saved = originalSize - stats.size;

        console.log(`   ✓ ${outputFilename} (${formatBytes(stats.size)}) [saved ${formatBytes(saved)}]`);

        totalSaved += saved > 0 ? saved : 0;
        filesCreated++;
      }
    }

    for (const format of config.formats) {
      const outputFilename = `${name}.${format}`;
      const outputPath = path.join(config.outputDir, outputFilename);

      const sharpInstance = sharp(inputPath);

      if (format === 'webp') {
        await sharpInstance
          .webp({ quality: config.quality.webp })
          .toFile(outputPath);
      } else if (format === 'jpg' || format === 'jpeg') {
        await sharpInstance
          .jpeg({ quality: config.quality.jpg })
          .toFile(outputPath);
      }

      const stats = await fs.stat(outputPath);
      console.log(`   ✓ ${outputFilename} (${formatBytes(stats.size)})`);
      filesCreated++;
    }

    console.log(`   💾 Total saved: ${formatBytes(totalSaved)} | Files created: ${filesCreated}`);
  } catch (error) {
    console.error(`   ❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

async function processDirectory(): Promise<void> {
  console.log('🚀 Image Optimization Tool');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  try {
    await fs.mkdir(config.outputDir, { recursive: true });
    console.log(`✓ Output directory ready: ${config.outputDir}\n`);

    const files = await fs.readdir(config.inputDir);
    const imageFiles = files.filter(f => /\.(jpg|jpeg|png)$/i.test(f));

    if (imageFiles.length === 0) {
      console.log('⚠️  No images found in input directory');
      console.log(`   Expected location: ${config.inputDir}`);
      return;
    }

    console.log(`Found ${imageFiles.length} image(s) to process\n`);
    console.log(`Settings:`);
    console.log(`  • Sizes: ${config.sizes.join(', ')}w`);
    console.log(`  • Formats: ${config.formats.join(', ')}`);
    console.log(`  • Quality: WebP=${config.quality.webp}, JPEG=${config.quality.jpg}`);

    for (const file of imageFiles) {
      await optimizeImage(path.join(config.inputDir, file));
    }

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✅ Optimization complete!');
    console.log(`   Check output: ${config.outputDir}`);
  } catch (error) {
    console.error('\n❌ Fatal error:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  processDirectory().catch(console.error);
}

export { optimizeImage, processDirectory };
