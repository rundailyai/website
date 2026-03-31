import { readFile, writeFile, readdir } from 'fs/promises';
import { join } from 'path';

const INPUT_DIR = './public/images/products';
const OUTPUT_DIR = './public/images/products';

async function convertSVGtoPNG() {
  try {
    // Try to import sharp
    let sharp;
    try {
      sharp = (await import('sharp')).default;
    } catch (error) {
      console.log('⚠️  Sharp not available. SVG files created but PNG conversion skipped.');
      console.log('   SVG files can be used directly or converted manually.');
      return;
    }

    const files = await readdir(INPUT_DIR);
    const svgFiles = files.filter(file => file.endsWith('.svg'));

    console.log(`Converting ${svgFiles.length} SVG files to PNG...`);

    for (const svgFile of svgFiles) {
      const inputPath = join(INPUT_DIR, svgFile);
      const outputPath = join(OUTPUT_DIR, svgFile.replace('.svg', '.png'));

      const svgBuffer = await readFile(inputPath);

      await sharp(svgBuffer)
        .png()
        .toFile(outputPath);

      console.log(`✓ Converted: ${svgFile} → ${svgFile.replace('.svg', '.png')}`);
    }

    console.log('\n✅ All SVG files converted to PNG successfully!');

  } catch (error) {
    console.error('Error converting SVGs:', error);
    throw error;
  }
}

convertSVGtoPNG().catch(console.error);
