# Contributing to Web Development II Knowledge Base

This guide explains how to contribute knowledge cards to the WDII CSS Knowledge Base project.

## Getting started

### Prerequisites

- GitHub account
- Basic knowledge of Git and markdown
- Node.js installed (required for local validation)
- VS Code with Git integration

### Setup

1. Fork this repository to your GitHub account
2. Clone your fork to your local machine
3. Open the project in VS Code
4. Install dependencies: `npm install`

## Workflow

### 1. Choose a card topic

#### Option A: Pre-Created Issues
- Browse [open issues](../../issues)
- Look for issues labeled `unassigned`
- Choose based on your interest and skill level

#### Option B: Create from Secret Sauce
- Browse [CSS Secret Sauce](https://nerdy.dev/cascading-secret-sauce)
- Find a modern CSS feature not already covered
- Create your own issue following CREATE-ISSUE-GUIDE.md
- Maximum 2 Secret Sauce issues per week

### 2. Claim an issue

- Comment on the issue: "I'll take this one"
- Instructor assigns based on first-come, first-served
- Start working immediately (don't wait for assignment)

### 3. Create your card

- In VS Code: Create a new branch using Source Control panel
  - Click branch name in bottom left
  - Select "Create new branch"
  - Name it: `card/issue-number` (e.g., `card/42`)
- Create your markdown file in the `cards/` directory
- Follow naming convention: `YYYY-MM-DD-topic-name.md`

### 4. Card requirements

- Use the required frontmatter format
- Write 75-250 words
- Include "When to Use" section
- Add code example (recommended but not required)
- Include properly formatted source link
- Reference approved sources only

### 5. Validate your work (required)

```bash
npm run validate cards/your-card.md
```

Fix any errors before submitting your PR.

### 6. Submit pull request

- In VS Code Source Control panel:
  - Stage your changes (+ icon)
  - Write commit message
  - Click "Commit"
  - Click "Sync Changes" (or "Publish Branch" if first push)
- Go to GitHub and create pull request from your fork to main repository
- GitHub Actions will automatically validate your card
- Fix any issues locally and push updates via VS Code

### 7. Respond to feedback

- GitHub Actions runs validation automatically
- Check PR for validation results
- Address any errors and push fixes
- Instructor reviews and merges when ready

## Card format specification

### File naming

`YYYY-MM-DD-topic-name.md`

Examples:
- `2025-01-15-css-box-model.md`
- `2025-01-16-aria-labels.md`
- `2025-01-17-responsive-images.md`

### Frontmatter

```yaml
---
title: CSS Box Model
date: 2025-01-15
category: css-core
difficulty: starter
source: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model
author: Your Name
---
```

**Note:** Category can be any descriptive term (not restricted to specific values)

### Content structure

1. **Title** (H1)
2. **Explanation** (75-250 words)
3. **Example** (code block with language specified - recommended but optional)
4. **When to Use** (required section - brief context for practical application)
5. **Source link** (required - properly formatted with descriptive title)

### Required Sections

Every card MUST include:
- **Explanation** of the concept (75-250 words)
- **"When to Use"** section explaining practical application
- **Source** link at the end in the correct format

### Source Link Format

End your card with a properly formatted source link:
```
**Source**: [Descriptive Title](https://approved-url.com/specific-page)
```

Example:
```
**Source**: [MDN: CSS Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model)
```

### Multiple Sources (Optional but Encouraged)

While the frontmatter requires one primary source, you may reference additional sources:

```
**Primary Source**: [MDN: CSS Grid](https://developer.mozilla.org/...)
**Also Referenced**: [Web.dev Grid Patterns](https://web.dev/...), [Chrome DevTools Grid](https://developer.chrome.com/...)
```

## Quality standards

### Writing

- Clear, concise explanations
- Correct technical terminology
- Beginner-friendly language
- No spelling or grammar errors

### Code examples

- Working, tested code
- Proper syntax highlighting with \`\`\`css blocks
- Relevant to the concept
- Include comments if helpful
- **Recommended but not required** - you'll receive a warning if missing but it won't block your PR

### Sources

- Must be from approved list (see below)
- Link to specific documentation pages, not homepage
- Use authoritative sources only

#### Approved Sources List

Only use these actively-maintained sources that teach modern practices:

**Essential sources:**
- developer.mozilla.org (MDN - Gold standard, always current)
- web.dev (Google's modern web practices)
- developer.chrome.com (Chrome team, cutting edge)
- w3.org (Official W3C specifications)
- whatwg.org (WHATWG living standards)
- spec.whatwg.org (WHATWG specs subdomain)

**Important sources:**
- a11yproject.com (Modern accessibility practices)
- webaim.org (Current accessibility resources)
- caniuse.com (Browser compatibility data)
- webkit.org (Safari/WebKit updates)

**Note:** We intentionally exclude sources that may contain outdated practices (like CSS Tricks, W3Schools, etc.) to ensure you learn modern techniques.

## Deadlines

- **First PR Due:** Friday 11:59 PM
- **Second PR Due:** Sunday 11:59 PM
- **Weekly Requirement:** 2 cards (can be pre-created issues or Secret Sauce)

## Review process

### Automated validation

- GitHub Actions validates on PR submission
- Checks file location, naming, frontmatter, word count
- Results appear on PR page
- Must pass validation before merge

### Instructor review

- Reviews all PRs over weekend/Monday
- Provides feedback if needed
- Merges when requirements are met

## Common issues

### Validation failures

- Missing or incorrect frontmatter
- Word count outside 75-250 range
- Unapproved source links
- Missing "When to Use" section
- Date format issues (use YYYY-MM-DD)

### Style issues

- Incorrect markdown formatting
- Missing language in code blocks
- Inconsistent heading structure
- Broken links

## Getting help

- Review existing cards for examples
- Ask questions in issue comments
- Check validation error messages on PR
- Use Discord channel or MS Teams chat
- Office hours for Git/GitHub help

## VS Code workflow tips

### Using Source Control panel

1. **Creating branches:**
   - Click branch name in bottom-left corner
   - Choose "Create new branch from..."
   - Name your branch `card/issue-number`

2. **Committing changes:**
   - Open Source Control panel (Ctrl+Shift+G)
   - Review changes in the panel
   - Stage files with + icon
   - Enter commit message
   - Click checkmark to commit

3. **Pushing to GitHub:**
   - Click "Sync Changes" in Source Control panel
   - Or use the cloud icon in bottom-left status bar

4. **Switching branches:**
   - Click branch name in bottom-left
   - Select branch from list

## Branch and merge strategy

- One card per branch
- Branch naming: `card/issue-number`
- Always branch from main
- Create fresh branch for each card
- Sync your fork regularly to stay up-to-date
- No merge conflicts (unique files)
- Branches auto-delete after merge