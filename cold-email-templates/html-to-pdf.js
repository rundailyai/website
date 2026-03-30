#!/usr/bin/env node

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
  console.log('🚀 Starting PDF generation from HTML...');

  const htmlPath = path.join(__dirname, 'COLD-EMAIL-TEMPLATE-LIBRARY.html');
  const outputPath = path.join(__dirname, 'COLD-EMAIL-TEMPLATE-LIBRARY.pdf');

  if (!fs.existsSync(htmlPath)) {
    throw new Error(`HTML file not found: ${htmlPath}`);
  }

  console.log('📄 HTML file found');
  console.log('🌐 Launching browser...');

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--disable-gpu',
        '--single-process'
      ],
      executablePath: '/usr/bin/chromium-browser'
    });

    console.log('✅ Browser launched');
    console.log('📖 Loading HTML content...');

    const page = await browser.newPage();
    await page.goto(`file://${htmlPath}`, {
      waitUntil: 'networkidle0'
    });

    console.log('✅ HTML loaded');
    console.log('📄 Generating PDF...');

    await page.pdf({
      path: outputPath,
      format: 'Letter',
      margin: {
        top: '0.75in',
        right: '0.75in',
        bottom: '1in',
        left: '0.75in'
      },
      printBackground: true,
      preferCSSPageSize: false,
      displayHeaderFooter: true,
      headerTemplate: '<div></div>',
      footerTemplate: `
        <div style="font-size: 9px; color: #64748b; width: 100%; margin: 0 auto; padding: 0 0.75in; display: flex; justify-content: space-between;">
          <span>Cold Email Template Library</span>
          <span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span>
        </div>
      `
    });

    await browser.close();

    const stats = fs.statSync(outputPath);
    const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);

    console.log('✅ PDF generated successfully!');
    console.log(`📄 Output: ${outputPath}`);
    console.log(`📊 File size: ${fileSizeMB} MB`);

    return outputPath;

  } catch (error) {
    if (browser) {
      await browser.close();
    }
    throw error;
  }
}

generatePDF()
  .then((outputPath) => {
    console.log('\n✨ PDF generation complete!');
    console.log(`\nYou can find your PDF at:\n${outputPath}`);
  })
  .catch((error) => {
    console.error('\n❌ Failed to generate PDF:', error.message);
    console.error('\nTrying alternative method...');

    // Fallback: provide instructions
    console.log('\n📋 Manual PDF creation instructions:');
    console.log('1. Open COLD-EMAIL-TEMPLATE-LIBRARY.html in your browser');
    console.log('2. Press Ctrl+P (or Cmd+P on Mac)');
    console.log('3. Select "Save as PDF" as the destination');
    console.log('4. Adjust margins to 0.75 inches');
    console.log('5. Enable "Background graphics"');
    console.log('6. Click "Save"');

    process.exit(1);
  });
