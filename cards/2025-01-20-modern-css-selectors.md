---
title: Modern CSS Selectors - is(), where(), and not() for Efficient Selection
date: 2025-01-20
category: css-fundamentals
difficulty: intermediate
source: https://developer.mozilla.org/en-US/docs/Web/CSS/:is
author: instructor
---

# Modern CSS Selectors: :is(), :where(), and :not() for Efficient Selection

Modern functional pseudo-classes dramatically reduce selector repetition and improve maintainability. **:is()** accepts a selector list and matches any element that matches any selector in that list, maintaining the highest specificity of its arguments. **:where()** works identically but always has zero specificity, perfect for creating easily overridable defaults. **:not()** selects elements that don't match its argument, now accepting complex selector lists.

These selectors are forgiving—if one selector in the list is invalid, others still work (unlike traditional selector lists where one invalid selector breaks the entire rule). This makes them ideal for progressive enhancement.

## Example

```css
/* :is() - Reduces repetition, takes highest specificity */
:is(header, main, footer) h2 {
  color: navy;
  margin-top: 2rem;
}

/* :where() - Zero specificity for easy overrides */
:where(input, textarea, select) {
  border: 1px solid #ccc;
  padding: 8px;
}

/* :not() - Exclude specific elements */
.card:not(:last-child) {
  margin-bottom: 1rem;
}

/* Complex example */
article :is(h1, h2, h3):not(:first-child) {
  margin-top: 2em;
}
```

## When to Use

Use :is() for DRY CSS, :where() for low-specificity defaults in design systems, and :not() for exceptions. All have excellent browser support (2021+).

**Source**: [MDN: :is() Pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:is)
