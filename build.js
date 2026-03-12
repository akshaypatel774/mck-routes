// build.js - simple template replacement script
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const env = process.env;
const templatePath = path.join(__dirname, 'index.template.html');
const outPath = path.join(__dirname, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('index.template.html not found.');
  process.exit(1);
}

let content = fs.readFileSync(templatePath, 'utf8');

const replacements = {
  '__SUPABASE_URL__': env.SUPABASE_URL || '',
  '__SUPABASE_ANON_KEY__': env.SUPABASE_ANON_KEY || ''
};

for (const [key, value] of Object.entries(replacements)) {
  content = content.split(key).join(value);
}

fs.writeFileSync(outPath, content);
console.log('Generated index.html');
