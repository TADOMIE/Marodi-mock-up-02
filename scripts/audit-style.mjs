import fs from 'node:fs';
import path from 'node:path';

const FORBIDDEN_PATTERNS = [
  { pattern: /rounded-full/g, name: 'rounded-full' },
  { pattern: /rounded-xl/g, name: 'rounded-xl' },
  { pattern: /rounded-2xl/g, name: 'rounded-2xl' },
  { pattern: /rounded-3xl/g, name: 'rounded-3xl' },
  { pattern: /shadow-/g, name: 'shadow-' },
  { pattern: /\bblur\b|backdrop-blur/g, name: 'blur' },
  { pattern: /backdrop-/g, name: 'backdrop-' },
  { pattern: /bg-gradient/g, name: 'bg-gradient' },
  { pattern: /(?:^|\s|["'])from-[a-z0-9]/g, name: 'from- (gradient)' },
  { pattern: /(?:^|\s|["'])via-[a-z0-9]/g, name: 'via- (gradient)' },
  { pattern: /(?:^|\s|["'])to-[a-z0-9]/g, name: 'to- (gradient)' },
  { pattern: /gradient\(/g, name: 'gradient(' },
  { pattern: /—/g, name: 'em dash (—)' },
  // Match emojis while permitting standard copyright (©) and registered trademark (®)
  { pattern: /(?![©®])\p{Extended_Pictographic}/u, name: 'emoji character' },
  { pattern: /\bInter\b/g, name: 'Inter' },
  { pattern: /\blucide\b/g, name: 'lucide' },
  { pattern: /\blorem\b/i, name: 'lorem' },
  { pattern: /\bTODO\b/g, name: 'TODO' },
];

function scanDirectory(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.git' && entry.name !== 'dist' && entry.name !== '.playwright-cli') {
        scanDirectory(fullPath, fileList);
      }
    } else if (/\.(tsx|ts|jsx|js|css|html|astro)$/.test(entry.name)) {
      if (entry.name !== 'audit-style.mjs') {
        fileList.push(fullPath);
      }
    }
  }
  return fileList;
}

const files = scanDirectory('./src');
let hasViolations = false;
const violations = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    for (const { pattern, name } of FORBIDDEN_PATTERNS) {
      if (pattern.test(line)) {
        hasViolations = true;
        violations.push({
          file,
          line: index + 1,
          rule: name,
          code: line.trim(),
        });
      }
    }
  });
}

if (hasViolations) {
  console.error('\n❌ AUDIT STYLE FAILED: Forbidden styling or template tokens detected:\n');
  violations.forEach((v) => {
    console.error(`  - ${v.file}:${v.line} -> Found [${v.rule}]: "${v.code}"`);
  });
  console.error(`\nTotal violations: ${violations.length}\n`);
  process.exit(1);
} else {
  console.log(`\n✅ AUDIT STYLE PASSED: All ${files.length} source files adhere strictly to sober design rules.\n`);
  process.exit(0);
}
