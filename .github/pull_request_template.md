# Note Card Submission

## Critical Security Notice

**⚠️ WARNING: Modifications to workflow files (.github/workflows/) require admin approval for security reasons.**

GitHub Actions workflows can execute arbitrary code and access repository secrets. Unauthorized modifications pose significant security risks.

- [ ] This PR does NOT modify any files in .github/workflows/
- [ ] This PR only contains knowledge base cards or documentation

## Issue Reference

Closes #

## Card Details

- **Topic**:
- **Category**:
- **Difficulty**:
- **Word Count**:

## Pre-Submission Checklist

### Format Compliance

- [ ] Card follows the required frontmatter format
- [ ] All frontmatter fields are complete and accurate
- [ ] File naming follows convention: `YYYY-MM-DD-descriptive-name.md`
- [ ] Markdown formatting is correct (headers, code blocks, links)

### Content Requirements

- [ ] Explanation is between 75-250 words
- [ ] Technical accuracy verified
- [ ] Code example included (for applicable topics)
- [ ] Code example works and is properly formatted
- [ ] "When to use" section provides practical context
- [ ] Language is clear and beginner-friendly

### Source Verification

- [ ] Source is from approved list (MDN, web.dev, Chrome DevTools, W3C, WHATWG, A11Y Project, WebAIM, Can I Use)
- [ ] Source link is functional and relevant
- [ ] Attribution is properly formatted

### Validation

- [ ] Validation passes: `npm run validate cards/your-card.md` (includes both markdown linting and content validation)
- [ ] No spelling or grammar errors
- [ ] No broken links

**Tip:** Run `npm run lint:md:fix` to auto-fix common markdown formatting issues

### Testing (if applicable)

- [ ] CSS code tested in browser
- [ ] Code example produces expected results
- [ ] Accessibility features tested (for a11y topics)

## Review Requests

### Technical Review

- [ ] Please verify technical accuracy
- [ ] Please check code example functionality
- [ ] Please confirm source quality

### Editorial Review

- [ ] Please check writing clarity
- [ ] Please verify grammar and spelling
- [ ] Please confirm appropriate difficulty level

## Additional Notes

<!-- Add any specific questions, concerns, or context for reviewers -->

## For Reviewers

When reviewing this card, please check:

1. **Technical Accuracy**: Is the information correct and up-to-date?
2. **Code Quality**: Does the example work and demonstrate the concept clearly?
3. **Writing Quality**: Is the explanation clear and accessible?
4. **Completeness**: Does the card meet all requirements?
5. **Sources**: Are sources authoritative and properly cited?

Use the checklist above to guide your review and provide specific feedback in comments.
