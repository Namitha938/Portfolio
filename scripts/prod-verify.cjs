const fs = require('fs');
const path = require('path');

console.log('====================================================');
console.log('       PRODUCTION VERIFICATION AUDIT SUITE         ');
console.log('====================================================');

const distDir = path.join(process.cwd(), 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');
const resumePdfPath = path.join(distDir, 'Namitha_Singu_Resume.pdf');

// 1. Verify build files exist
if (!fs.existsSync(distDir) || !fs.existsSync(indexHtmlPath)) {
  console.error('FAIL: dist/ or dist/index.html is missing!');
  process.exit(1);
}
console.log('PASS: dist/ and dist/index.html verified.');

// 2. Verify Resume PDF binary integrity
if (!fs.existsSync(resumePdfPath)) {
  console.error('FAIL: dist/Namitha_Singu_Resume.pdf missing!');
} else {
  const resumeBuffer = fs.readFileSync(resumePdfPath);
  const header = resumeBuffer.slice(0, 5).toString('ascii');
  const size = resumeBuffer.length;
  if (header.startsWith('%PDF-') && size > 1000) {
    console.log(`PASS: Resume PDF verified. Header: ${header}, Size: ${size} bytes`);
  } else {
    console.error(`FAIL: Resume PDF is corrupted or invalid. Header: ${header}`);
  }
}

// 3. Inspect dist/index.html for SEO, Schema, and Metadata
const html = fs.readFileSync(indexHtmlPath, 'utf8');

const titleMatch = html.match(/<title>(.*?)<\/title>/);
console.log('Page Title:', titleMatch ? titleMatch[1] : 'FAIL: No Title');

const metaDescMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
console.log('Meta Description:', metaDescMatch ? metaDescMatch[1] : 'FAIL: No Meta Description');

const hasJsonLd = html.includes('application/ld+json');
console.log('JSON-LD Schema present:', hasJsonLd ? 'PASS' : 'FAIL');

const hasViewport = html.includes('name="viewport"');
console.log('Viewport Meta present:', hasViewport ? 'PASS' : 'FAIL');

// 4. Check Navigation and Section IDs
const portfolioTs = fs.readFileSync(path.join(process.cwd(), 'src', 'data', 'portfolio.ts'), 'utf8');
const navItemsMatch = portfolioTs.match(/navItems\s*=\s*\[([\s\S]*?)\];/);
const navIds = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'certifications', 'achievements', 'contact'];

console.log('\n--- Section IDs Verification ---');
navIds.forEach(id => {
  // Check in component files
  let found = false;
  const compsDir = path.join(process.cwd(), 'src', 'components');
  fs.readdirSync(compsDir).forEach(file => {
    if (file.endsWith('.tsx')) {
      const src = fs.readFileSync(path.join(compsDir, file), 'utf8');
      if (src.includes(`id="${id}"`)) {
        found = true;
      }
    }
  });
  console.log(`Section #${id} mounted:`, found ? 'PASS' : 'FAIL');
});

// 5. Test Assets and Images in dist/assets
console.log('\n--- Asset Bundle Verification ---');
const assetsDir = path.join(distDir, 'assets');
const assetFiles = fs.readdirSync(assetsDir);
let totalAssetSize = 0;
assetFiles.forEach(file => {
  const filePath = path.join(assetsDir, file);
  const stat = fs.statSync(filePath);
  totalAssetSize += stat.size;
  console.log(` - ${file}: ${(stat.size / 1024).toFixed(2)} KB`);
});
console.log(`Total Bundled Asset Payload: ${(totalAssetSize / 1024).toFixed(2)} KB`);

// 6. External Link Validation
console.log('\n--- External Links Verification ---');
const externalUrls = [
  'https://github.com/Namitha938',
  'https://linkedin.com/in/namitha-singu-3b0515291',
  'https://calendly.com/namithasingu',
  'https://huggingface.co/spaces',
  'https://www.theforage.com/'
];

externalUrls.forEach(url => {
  try {
    const parsed = new URL(url);
    console.log(`URL syntax verified: ${url} (Protocol: ${parsed.protocol})`);
  } catch (e) {
    console.error(`FAIL: Invalid URL syntax for ${url}`);
  }
});
