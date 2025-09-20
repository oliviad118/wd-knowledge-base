# Creating Your Own Issues from CSS Secret Sauce

## Overview

Beyond the 80 pre-created issues, you can create up to **2 additional issues** per week for modern CSS features
found on the [CSS Secret Sauce](https://nerdy.dev/cascading-secret-sauce) page.

This teaches you the complete GitHub workflow: not just claiming issues, but creating them too!

## Step-by-Step Process

### 1. Find a Topic Not Already Covered

1. Browse [CSS Secret Sauce](https://nerdy.dev/cascading-secret-sauce)
2. Pick something that interests you
3. Check our existing issues to ensure it's not already covered
4. Verify it's from our approved sources (MDN, web.dev, etc.)

### 2. Create a New GitHub Issue

Click "New Issue" and use this template:

```markdown
Title: Card: [Feature Name]

## Description
Create a knowledge card for [feature name and brief description]

## Requirements
- [ ] Explain the concept in 75-250 words
- [ ] Include practical "When to Use" section
- [ ] Add working code example (if applicable)
- [ ] Reference the Secret Sauce page
- [ ] Link to official documentation

## Resources from Secret Sauce
- Primary link: [paste the MDN/web.dev link from Secret Sauce]
- Secret Sauce reference: https://nerdy.dev/cascading-secret-sauce#[section]

## Proposed Details
Category: [css-core, css-layout, accessibility, performance, or animation]
Difficulty: [starter, intermediate, or advanced]

## Why This Matters
[1-2 sentences on why this feature is important to document]
```

### 3. Claim Your Own Issue

Immediately after creating the issue:

1. Comment "I'll take this one"
2. Wait for instructor approval (usually within 24 hours)
3. Once approved, follow the normal workflow

## Good Candidates from Secret Sauce

### Great Topics to Consider

#### Modern Selectors

- `:has()` - The parent selector
- `:is()` and `:where()` - Selector list simplification
- `:user-valid` / `:user-invalid` - Better form validation
- `:popover-open` - Popover state styling

#### Color Functions

- `color-mix()` - Mixing colors in CSS
- `light-dark()` - Automatic dark mode colors
- `oklch()` - Perceptually uniform colors

#### Layout Features

- `subgrid` - Nested grid alignment
- `@container` queries - Component-based responsive design
- `anchor-name` - Positioning elements relative to others

#### Modern Properties

- `accent-color` - Form control theming
- `content-visibility` - Performance optimization
- `field-sizing` - Auto-sizing form fields
- `text-wrap: balance` - Better text wrapping

## What Makes a Good Issue

### ✅ Good Issue Characteristics

- Feature is well-documented on MDN or web.dev
- Has practical use cases
- Is stable (not experimental)
- Adds value beyond our existing 80 issues

### ❌ Avoid These

- Experimental features with no browser support
- Features already covered in existing issues
- Overly complex topics requiring >250 words
- Features only documented on unofficial sites

## Example: Creating a :has() Selector Issue

```markdown
Title: Card: CSS :has() Parent Selector

## Description
Create a knowledge card for the :has() pseudo-class, which allows selecting parent elements based on their children.

## Requirements
- [ ] Explain how :has() enables parent selection
- [ ] Include practical "When to Use" section
- [ ] Add working code example showing form validation styling
- [ ] Reference the Secret Sauce page
- [ ] Link to official MDN documentation

## Resources from Secret Sauce
- Primary link: https://developer.mozilla.org/en-US/docs/Web/CSS/:has
- Secret Sauce reference: https://nerdy.dev/cascading-secret-sauce#selectors

## Proposed Details
Category: css-core
Difficulty: intermediate

## Why This Matters
The :has() selector solves a decades-old limitation in CSS by allowing parent selection, enabling powerful new styling patterns that previously required JavaScript.
```

## Tips for Success

1. **Research First**: Click the Secret Sauce link and read the documentation before creating an issue
2. **Check Browser Support**: Use caniuse.com to verify the feature is widely supported
3. **Keep It Focused**: Choose specific features, not broad topics
4. **Quality Over Quantity**: Better to create 1 great issue than 2 mediocre ones

## Timeline & Limits

### Weekly Options

Each week you can:

- Take 2 pre-created issues from the issue bank
- OR take 1 pre-created + create 1 from Secret Sauce  
- OR create 2 from Secret Sauce (if you prefer modern topics)

### Requirements

- **Minimum:** 10 cards total over 5 weeks (any combination)
- **Weekly:** 2 issues per week (Friday & Sunday deadlines)
- **Maximum Secret Sauce:** Up to 10 (if you create 2 per week)

### Suggested Approach

- **Week 1**: Start with 2 pre-created issues (learn the process)
- **Week 2-5**: Mix based on your interests
- **Smart Strategy**: Claim pre-created early, create Secret Sauce when you find exciting topics

## Questions?

- Check if someone else already created an issue for your topic
- Unsure if a topic is appropriate? Ask via GitHub comment, Discord Channel, or MS Teams Chat
- Need help with issue formatting? Reference this guide

## Remember

Creating issues is how real open-source contribution works. You're learning to:

- Identify documentation gaps
- Propose valuable additions
- Communicate technical requirements
- Participate in project planning

This skill is as valuable as writing the documentation itself!

---

*You can create up to 2 Secret Sauce issues per week (10 maximum total)*
*All issues must be approved before starting work*
*Friday & Sunday 11:59 PM deadlines apply to all issues*
