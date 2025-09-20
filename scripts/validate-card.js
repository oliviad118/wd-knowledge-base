#!/usr/bin/env node

/**
 * Card Validation Script for WDII Note Cards Project
 *
 * Validates markdown cards against project requirements:
 * - Frontmatter completeness and format
 * - Word count (75-250 words)
 * - Approved source validation
 * - File naming convention
 * - Code block requirements for CSS topics
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const chalk = require('chalk');
const glob = require('glob');

// Configuration
const CONFIG = {
  wordCount: {
    min: 75,
    max: 250
  },
  approvedSources: [
    // Essential sources - actively maintained, modern practices
    'developer.mozilla.org',  // MDN - Gold standard, always current
    'web.dev',               // Google's modern web practices
    'developer.chrome.com',   // Chrome team, cutting edge
    'webkit.org',            // Safari/WebKit updates
    'w3.org',                // Official W3C specifications
    'whatwg.org',            // WHATWG living standards
    'spec.whatwg.org',       // WHATWG specs subdomain
    // Important sources
    'a11yproject.com',       // Modern accessibility practices
    'webaim.org',           // Current accessibility resources
    'caniuse.com'           // Browser compatibility data
  ],
  difficulties: [
    'starter',
    'intermediate',
    'advanced'
  ]
};

// Validation results
let validationResults = {
  passed: 0,
  failed: 0,
  errors: [],
  warnings: []
};

/**
 * Display help information
 */
function showHelp() {
  console.log(chalk.blue.bold('\n🎯 Card Validation Script\n'));
  console.log('Usage:');
  console.log('  npm run validate <file>           # Validate single card');
  console.log('  npm run validate:all              # Validate all cards');
  console.log('  node scripts/validate-card.js cards/card-name.md\n');
  console.log('Examples:');
  console.log('  npm run validate cards/2025-01-15-css-box-model.md');
  console.log('  npm run validate:all\n');
}

/**
 * Validate file naming convention
 * Expected format: YYYY-MM-DD-descriptive-name.md
 */
function validateFileName(filePath) {
  const fileName = path.basename(filePath);
  const namePattern = /^\d{4}-\d{2}-\d{2}-.+\.md$/;

  if (!namePattern.test(fileName)) {
    return {
      valid: false,
      error: `File name "${fileName}" doesn't follow required format: YYYY-MM-DD-descriptive-name.md`
    };
  }

  return { valid: true };
}

/**
 * Validate frontmatter fields
 */
function validateFrontmatter(data) {
  const errors = [];
  const required = ['title', 'date', 'category', 'difficulty', 'source', 'author'];

  // Check required fields
  for (const field of required) {
    if (!data[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  }

  // Validate category exists (but don't restrict to specific values)
  if (!data.category || data.category.trim() === '') {
    errors.push('Category field cannot be empty');
  }

  if (data.difficulty && !CONFIG.difficulties.includes(data.difficulty)) {
    errors.push(`Invalid difficulty "${data.difficulty}". Must be one of: ${CONFIG.difficulties.join(', ')}`);
  }

  // Validate date format
  if (data.date) {
    let dateString = data.date;
    
    // Handle both Date objects and string dates
    if (data.date instanceof Date) {
      // Convert Date object to YYYY-MM-DD format
      const year = data.date.getFullYear();
      const month = String(data.date.getMonth() + 1).padStart(2, '0');
      const day = String(data.date.getDate()).padStart(2, '0');
      dateString = `${year}-${month}-${day}`;
    } else if (typeof data.date === 'string' && data.date.includes('GMT')) {
      // Handle date strings like "Sun Jan 19 2025 19:00:00 GMT-0500 (Eastern Standard Time)"
      const dateObj = new Date(data.date);
      const year = dateObj.getFullYear();
      const month = String(dateObj.getMonth() + 1).padStart(2, '0');
      const day = String(dateObj.getDate()).padStart(2, '0');
      dateString = `${year}-${month}-${day}`;
    }
    
    // Now validate the string format
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(dateString)) {
      errors.push(`Date "${data.date}" must be in YYYY-MM-DD format`);
    }
  }

  // Validate source URL
  if (data.source) {
    try {
      const url = new URL(data.source);
      const isApproved = CONFIG.approvedSources.some(domain =>
        url.hostname === domain || url.hostname.endsWith('.' + domain)
      );

      if (!isApproved) {
        errors.push(`Source "${data.source}" is not from an approved domain. Approved: ${CONFIG.approvedSources.join(', ')}`);
      }
    } catch (e) {
      errors.push(`Invalid source URL: ${data.source}`);
    }
  }

  return errors;
}

/**
 * Count words in content, excluding code blocks and frontmatter
 */
function countWords(content) {
  // Remove code blocks
  const withoutCode = content.replace(/```[\s\S]*?```/g, '');

  // Remove inline code
  const withoutInlineCode = withoutCode.replace(/`[^`]+`/g, '');

  // Remove markdown formatting
  const cleanText = withoutInlineCode
    .replace(/#{1,6}\s+/g, '') // headers
    .replace(/\*\*([^*]+)\*\*/g, '$1') // bold
    .replace(/\*([^*]+)\*/g, '$1') // italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links
    .replace(/^\s*[-*+]\s+/gm, '') // list items
    .replace(/^\s*\d+\.\s+/gm, '') // numbered lists
    .trim();

  // Count words
  const words = cleanText.split(/\s+/).filter(word => word.length > 0);
  return words.length;
}

/**
 * Check for CSS code block (optional but recommended)
 */
function checkCodeBlock(content) {
  const cssCodeBlockPattern = /```css[\s\S]*?```/;
  const hasCSS = cssCodeBlockPattern.test(content);

  if (!hasCSS) {
    return {
      warning: 'Consider adding a CSS code example to demonstrate the concept'
    };
  }

  return { valid: true };
}

/**
 * Check for required sections
 */
function validateSections(content) {
  const errors = [];

  // Check for "When to use" section (case insensitive)
  const whenToUsePattern = /##\s+when\s+to\s+use/i;
  if (!whenToUsePattern.test(content)) {
    errors.push('Missing "When to use" section');
  }

  // Check for source link at the end
  const sourcePattern = /\*\*Source\*\*:\s*\[.+\]\(.+\)/;
  if (!sourcePattern.test(content)) {
    errors.push('Missing properly formatted source link: **Source**: [Link text](URL)');
  }

  return errors;
}

/**
 * Validate a single card file
 */
function validateCard(filePath) {
  console.log(chalk.blue(`\n📝 Validating: ${filePath}`));

  const errors = [];
  const warnings = [];

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    console.log(chalk.red(`❌ File not found: ${filePath}`));
    return false;
  }

  // Validate file name
  const fileNameResult = validateFileName(filePath);
  if (!fileNameResult.valid) {
    errors.push(fileNameResult.error);
  }

  // Read and parse file
  let fileContent, parsedFile;
  try {
    fileContent = fs.readFileSync(filePath, 'utf8');
    parsedFile = matter(fileContent);
  } catch (error) {
    errors.push(`Error reading file: ${error.message}`);
    console.log(chalk.red(`❌ ${errors[errors.length - 1]}`));
    return false;
  }

  // Validate frontmatter
  const frontmatterErrors = validateFrontmatter(parsedFile.data);
  errors.push(...frontmatterErrors);

  // Validate word count
  const wordCount = countWords(parsedFile.content);
  if (wordCount < CONFIG.wordCount.min) {
    errors.push(`Word count too low: ${wordCount} words (minimum: ${CONFIG.wordCount.min})`);
  } else if (wordCount > CONFIG.wordCount.max) {
    errors.push(`Word count too high: ${wordCount} words (maximum: ${CONFIG.wordCount.max})`);
  } else {
    console.log(chalk.green(`✅ Word count: ${wordCount} words`));
  }

  // Check for code block (warning only)
  const codeBlockResult = checkCodeBlock(parsedFile.content);
  if (codeBlockResult.warning) {
    warnings.push(codeBlockResult.warning);
  }

  // Validate required sections
  const sectionErrors = validateSections(parsedFile.content);
  errors.push(...sectionErrors);

  // Display results
  if (errors.length === 0) {
    console.log(chalk.green('✅ All validations passed!'));
    validationResults.passed++;
    return true;
  } else {
    console.log(chalk.red('\n❌ Validation failed:'));
    errors.forEach(error => {
      console.log(chalk.red(`   • ${error}`));
    });

    if (warnings.length > 0) {
      console.log(chalk.yellow('\n⚠️  Warnings:'));
      warnings.forEach(warning => {
        console.log(chalk.yellow(`   • ${warning}`));
      });
    }

    validationResults.failed++;
    validationResults.errors.push({ file: filePath, errors, warnings });
    return false;
  }
}

/**
 * Main execution
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    showHelp();
    return;
  }

  console.log(chalk.blue.bold('🎯 WDII Note Cards Validation\n'));

  let filesToValidate = [];

  // Handle glob patterns and file paths
  args.forEach(arg => {
    if (arg.includes('*')) {
      // Glob pattern
      const matches = glob.sync(arg);
      filesToValidate.push(...matches);
    } else {
      // Single file
      filesToValidate.push(arg);
    }
  });

  if (filesToValidate.length === 0) {
    console.log(chalk.yellow('⚠️  No files found to validate'));
    return;
  }

  // Validate each file
  filesToValidate.forEach(file => {
    validateCard(file);
  });

  // Summary
  console.log(chalk.blue.bold('\n📊 Validation Summary'));
  console.log(`${chalk.green('✅ Passed:')} ${validationResults.passed}`);
  console.log(`${chalk.red('❌ Failed:')} ${validationResults.failed}`);

  if (validationResults.failed > 0) {
    console.log(chalk.yellow('\n💡 Common fixes:'));
    console.log('   • Check frontmatter format and required fields');
    console.log('   • Ensure word count is between 75-250 words');
    console.log('   • Use approved sources only');
    console.log('   • Include CSS code examples for CSS topics');
    console.log('   • Add "When to use" section');
    console.log('   • Include properly formatted source link');

    process.exit(1);
  }

  console.log(chalk.green('\n🎉 All validations completed successfully!'));
}

if (require.main === module) {
  main();
}

module.exports = {
  validateCard,
  validateFileName,
  validateFrontmatter,
  countWords,
  checkCodeBlock,
  validateSections
};