#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const baseDir = __dirname;

// Read combined markdown
const markdown = fs.readFileSync(path.join(baseDir, 'COMPLETE-LIBRARY.md'), 'utf-8');

// Read CSS
const css = fs.readFileSync(path.join(baseDir, 'pdf-styles.css'), 'utf-8');

// Enhanced CSS for web viewing and print
const enhancedCSS = css + `

/* Additional web-specific styles */
.container {
  max-width: 8.5in;
  margin: 0 auto;
  padding: 20px;
  background: white;
}

@media screen {
  body {
    background: #f1f5f9;
    padding: 20px 0;
  }

  .container {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
}

/* Print styles */
@media print {
  body {
    background: white;
  }

  .container {
    max-width: 100%;
    padding: 0;
    box-shadow: none;
  }

  /* Page breaks */
  h1, h2 {
    page-break-after: avoid;
  }

  .email-template, blockquote, pre {
    page-break-inside: avoid;
  }
}
`;

console.log('📝 Converting markdown to HTML...');

// Configure marked
marked.setOptions({
  headerIds: true,
  mangle: false,
  breaks: false,
  gfm: true
});

// Convert markdown to HTML
const htmlContent = marked(markdown);

// Create complete HTML document
const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cold Email Template Library - 55+ Proven Templates</title>
    <style>
${enhancedCSS}
    </style>
</head>
<body>
    <div class="container">
${htmlContent}
    </div>

    <script>
    // Add print instructions
    if (window.location.search.includes('print-ready')) {
        window.onload = function() {
            setTimeout(function() {
                window.print();
            }, 1000);
        };
    }
    </script>
</body>
</html>
`;

const outputPath = path.join(baseDir, 'COLD-EMAIL-TEMPLATE-LIBRARY.html');
fs.writeFileSync(outputPath, html);

const stats = fs.statSync(outputPath);
const fileSizeKB = (stats.size / 1024).toFixed(2);

console.log('✅ HTML generated successfully!');
console.log(`📄 Output: ${outputPath}`);
console.log(`📊 File size: ${fileSizeKB} KB`);
console.log('\n📖 To create PDF:');
console.log('   1. Open the HTML file in Chrome/Edge/Firefox');
console.log('   2. Press Ctrl+P (Cmd+P on Mac)');
console.log('   3. Select "Save as PDF"');
console.log('   4. Click "Save"');
console.log('\n   Or use this command if wkhtmltopdf is available:');
console.log(`   wkhtmltopdf "${outputPath}" COLD-EMAIL-TEMPLATE-LIBRARY.pdf`);

console.log('\n✨ HTML generation complete!');
