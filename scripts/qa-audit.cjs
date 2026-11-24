const fs = require('fs');
const path = require('path');

console.log('--- QA AUDIT CHECK 1: RESUME PDF ---');
const resumePath = path.join(process.cwd(), 'public', 'Namitha_Singu_Resume.pdf');
const distResumePath = path.join(process.cwd(), 'dist', 'Namitha_Singu_Resume.pdf');
console.log('Public resume exists:', fs.existsSync(resumePath), 'Size:', fs.existsSync(resumePath) ? fs.statSync(resumePath).size : 'N/A');
console.log('Dist resume exists:', fs.existsSync(distResumePath), 'Size:', fs.existsSync(distResumePath) ? fs.statSync(distResumePath).size : 'N/A');

console.log('\n--- QA AUDIT CHECK 2: EXTERNAL LINKS ---');
const portfolioTs = fs.readFileSync(path.join(process.cwd(), 'src', 'data', 'portfolio.ts'), 'utf8');
const urls = Array.from(new Set(portfolioTs.match(/https?:\/\/[^\s"',]+/g) || []));
console.log('Discovered URLs in portfolio.ts:');
urls.forEach(u => console.log(' - ' + u));

console.log('\n--- QA AUDIT CHECK 3: COMPONENT INTEGRITY ---');
const components = [
  'Hero.tsx', 'About.tsx', 'Skills.tsx', 'Experience.tsx',
  'Projects.tsx', 'ProjectCard.tsx', 'ProjectDetailModal.tsx',
  'Education.tsx', 'Certifications.tsx', 'Achievements.tsx',
  'Contact.tsx', 'Navbar.tsx', 'Footer.tsx'
];

components.forEach(comp => {
  const compPath = path.join(process.cwd(), 'src', 'components', comp);
  if (!fs.existsSync(compPath)) {
    console.error('MISSING COMPONENT:', comp);
  } else {
    const content = fs.readFileSync(compPath, 'utf8');
    // Check for broken hrefs like href="#" without target or empty href
    const emptyHrefs = content.match(/href=["'](#|)["']/g);
    if (emptyHrefs) {
      console.warn(`Warning in ${comp}: Found empty or lone # hrefs:`, emptyHrefs);
    }
  }
});

console.log('\n--- QA AUDIT CHECK 4: CSS & RESPONSIVENESS CHECK ---');
// Check Tailwind configuration & index.html meta viewport
const indexHtml = fs.readFileSync(path.join(process.cwd(), 'index.html'), 'utf8');
const hasViewport = indexHtml.includes('name="viewport" content="width=device-width, initial-scale=1.0"');
console.log('Meta viewport properly set:', hasViewport);

console.log('\n--- QA AUDIT CHECK 5: ALL SECTION IDS FOR NAVBAR ---');
const navIds = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'certifications', 'achievements', 'contact'];
navIds.forEach(id => {
  let found = false;
  components.forEach(comp => {
    const compPath = path.join(process.cwd(), 'src', 'components', comp);
    if (fs.existsSync(compPath)) {
      const content = fs.readFileSync(compPath, 'utf8');
      if (content.includes(`id="${id}"`)) {
        found = true;
      }
    }
  });
  console.log(`Section #${id} exists in DOM:`, found);
});
