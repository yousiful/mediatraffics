export interface ImageSEOMetadata {
  filename: string;
  alt: string;
  title: string;
  caption?: string;
  description?: string;
  width?: number;
  height?: number;
  format: string;
}

export const imageNamingRules = {
  dos: [
    'Use descriptive, keyword-rich names',
    'Separate words with hyphens',
    'Use lowercase letters only',
    'Include location/brand when relevant',
    'Keep filenames under 100 characters',
    'Be specific and descriptive'
  ],
  donts: [
    'Avoid generic names (image1.jpg, photo.png)',
    'No underscores or spaces',
    'No special characters or accents',
    'No uppercase letters',
    'Avoid extremely long filenames',
    'Don\'t use dates in filenames'
  ],
  examples: {
    good: [
      'media-traffics-logo-transparent.png',
      'paid-advertising-dashboard-screenshot.jpg',
      'facebook-ads-campaign-results.webp',
      'insurance-marketing-infographic.png',
      'kenji-ai-platform-interface.jpg'
    ],
    bad: [
      'IMG_1234.jpg',
      'photo.png',
      'image (1).jpg',
      'Screenshot_2024.png',
      'tmp75mtgp0b.webp'
    ]
  }
};

export function generateOptimizedFilename(description: string, format: string = 'webp'): string {
  return description
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
    + `.${format}`;
}

export function generateImageMetadata(
  filename: string,
  context: {
    subject: string;
    location?: string;
    action?: string;
    brand?: string;
  }
): ImageSEOMetadata {
  const { subject, location, action, brand = 'Media Traffics' } = context;

  let alt = subject;
  if (action) alt = `${action} ${alt}`;
  if (location) alt = `${alt} in ${location}`;

  const title = `${brand} - ${alt}`;
  const description = `High-quality image showing ${alt.toLowerCase()}`;

  return {
    filename: generateOptimizedFilename(alt),
    alt,
    title,
    description,
    format: 'webp'
  };
}

export const imageFormats = {
  webp: {
    use: 'Modern format with best compression',
    support: '95%+ browsers',
    quality: 75,
    pros: ['Best compression', 'Good quality', 'Transparency support'],
    cons: ['Not universal (yet)']
  },
  jpg: {
    use: 'Photos and complex images',
    support: 'Universal',
    quality: 80,
    pros: ['Universal support', 'Good for photos'],
    cons: ['No transparency', 'Lossy compression']
  },
  png: {
    use: 'Logos, icons, transparency needed',
    support: 'Universal',
    quality: 100,
    pros: ['Lossless', 'Transparency', 'Sharp edges'],
    cons: ['Larger file size']
  },
  svg: {
    use: 'Logos, icons, simple graphics',
    support: 'Universal',
    quality: 100,
    pros: ['Infinite scaling', 'Tiny file size', 'Editable'],
    cons: ['Not for photos', 'Can be complex']
  },
  avif: {
    use: 'Next-gen format (future)',
    support: '70%+ browsers',
    quality: 65,
    pros: ['Best compression', 'Excellent quality'],
    cons: ['Limited support', 'Slow encoding']
  }
};

export function generateSrcSet(
  basePath: string,
  filename: string,
  widths: number[] = [320, 640, 768, 1024, 1280, 1536, 1920]
): string {
  const ext = filename.split('.').pop();
  const name = filename.replace(`.${ext}`, '');

  return widths
    .map(width => `${basePath}/${name}-${width}w.${ext} ${width}w`)
    .join(', ');
}

export function generateSizesAttribute(
  breakpoints: Array<{ maxWidth: number; imageWidth: string }>
): string {
  return breakpoints
    .map(bp => `(max-width: ${bp.maxWidth}px) ${bp.imageWidth}`)
    .join(', ') + ', 100vw';
}

export function generatePictureElement(
  images: {
    webp?: string;
    jpg?: string;
    png?: string;
  },
  alt: string,
  width?: number,
  height?: number
): string {
  return `<picture>
  ${images.webp ? `<source type="image/webp" srcset="${images.webp}">` : ''}
  ${images.jpg ? `<source type="image/jpeg" srcset="${images.jpg}">` : ''}
  <img
    src="${images.jpg || images.png || images.webp}"
    alt="${alt}"
    ${width ? `width="${width}"` : ''}
    ${height ? `height="${height}"` : ''}
    loading="lazy"
    decoding="async"
  >
</picture>`;
}

export const imageSizeRecommendations = {
  logo: {
    desktop: { width: 200, height: 200 },
    mobile: { width: 100, height: 100 },
    format: 'png or svg',
    maxFileSize: '50KB'
  },
  hero: {
    desktop: { width: 1920, height: 1080 },
    tablet: { width: 1024, height: 576 },
    mobile: { width: 640, height: 360 },
    format: 'webp with jpg fallback',
    maxFileSize: '200KB'
  },
  thumbnail: {
    desktop: { width: 400, height: 300 },
    mobile: { width: 200, height: 150 },
    format: 'webp',
    maxFileSize: '50KB'
  },
  icon: {
    desktop: { width: 64, height: 64 },
    mobile: { width: 48, height: 48 },
    format: 'svg or png',
    maxFileSize: '10KB'
  },
  openGraph: {
    required: { width: 1200, height: 630 },
    format: 'jpg or png',
    maxFileSize: '300KB',
    note: 'Must be exactly 1200x630px for optimal display'
  },
  favicon: {
    sizes: [16, 32, 48, 64, 128, 256],
    format: 'ico or png',
    maxFileSize: '10KB'
  }
};

export function generateImageSitemap(
  images: Array<{
    loc: string;
    image: {
      loc: string;
      title?: string;
      caption?: string;
      geoLocation?: string;
      license?: string;
    }[];
  }>
): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${images.map(page => `  <url>
    <loc>${page.loc}</loc>
${page.image.map(img => `    <image:image>
      <image:loc>${img.loc}</image:loc>
${img.title ? `      <image:title>${img.title}</image:title>` : ''}
${img.caption ? `      <image:caption>${img.caption}</image:caption>` : ''}
${img.geoLocation ? `      <image:geo_location>${img.geoLocation}</image:geo_location>` : ''}
${img.license ? `      <image:license>${img.license}</image:license>` : ''}
    </image:image>`).join('\n')}
  </url>`).join('\n')}
</urlset>`;
}

export const compressionTools = {
  online: [
    {
      name: 'TinyPNG',
      url: 'https://tinypng.com',
      formats: ['PNG', 'JPEG', 'WebP'],
      features: ['Smart lossy compression', 'Batch processing', 'API available'],
      free: true
    },
    {
      name: 'Squoosh',
      url: 'https://squoosh.app',
      formats: ['All formats'],
      features: ['Compare before/after', 'Advanced options', 'No upload needed'],
      free: true
    },
    {
      name: 'ImageOptim',
      url: 'https://imageoptim.com',
      formats: ['PNG', 'JPEG', 'GIF'],
      features: ['Desktop app', 'Lossless optimization', 'Batch processing'],
      free: true
    },
    {
      name: 'Cloudinary',
      url: 'https://cloudinary.com',
      formats: ['All formats'],
      features: ['CDN', 'Automatic optimization', 'Transformations', 'AI features'],
      free: 'Limited free tier'
    }
  ],
  cli: [
    {
      name: 'sharp',
      install: 'npm install sharp',
      use: 'Node.js image processing',
      formats: ['All common formats']
    },
    {
      name: 'imagemagick',
      install: 'brew install imagemagick',
      use: 'CLI image manipulation',
      formats: ['200+ formats']
    },
    {
      name: 'cwebp',
      install: 'brew install webp',
      use: 'Convert to WebP',
      formats: ['WebP conversion']
    }
  ]
};

export function generateWebPConversionScript(): string {
  return `#!/bin/bash
# Convert all images to WebP format
# Usage: ./convert-to-webp.sh

for file in *.{jpg,jpeg,png}; do
  if [ -f "$file" ]; then
    filename="${file%.*}"
    cwebp -q 75 "$file" -o "$filename.webp"
    echo "Converted: $file -> $filename.webp"
  fi
done

echo "Conversion complete!"`;
}

export function generateImageOptimizationScript(): string {
  return `import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';

const sizes = [320, 640, 768, 1024, 1280, 1536, 1920];
const quality = 75;

async function optimizeImage(inputPath: string, outputDir: string) {
  const filename = path.basename(inputPath);
  const name = filename.replace(path.extname(filename), '');

  // Generate responsive sizes
  for (const size of sizes) {
    await sharp(inputPath)
      .resize(size, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality })
      .toFile(path.join(outputDir, \`\${name}-\${size}w.webp\`));

    console.log(\`Generated \${name}-\${size}w.webp\`);
  }

  // Generate original size WebP
  await sharp(inputPath)
    .webp({ quality })
    .toFile(path.join(outputDir, \`\${name}.webp\`));

  console.log(\`Optimized \${filename}\`);
}

async function processDirectory(inputDir: string, outputDir: string) {
  const files = await fs.readdir(inputDir);

  await fs.mkdir(outputDir, { recursive: true });

  for (const file of files) {
    if (/\\.(jpg|jpeg|png)$/i.test(file)) {
      await optimizeImage(
        path.join(inputDir, file),
        outputDir
      );
    }
  }
}

// Usage
processDirectory('./public/images', './public/images/optimized');`;
}
