---
title: CSS Selectors - Element, Class, and ID Selection Strategies
date: 2025-01-20
category: css-fundamentals
difficulty: starter
source: https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors
author: instructor
---

# CSS Selectors: Element, Class, and ID Selection Strategies

CSS selectors are patterns that tell the browser which HTML elements to style. The three fundamental selector types form the foundation of all CSS styling. **Element selectors** target HTML tags directly (like `p` or `h1`), applying styles broadly. **Class selectors** use a period (`.classname`) to target elements with specific class attributes, allowing reusable styles across multiple elements. **ID selectors** use a hash (`#idname`) to target unique elements, providing the highest specificity.

Understanding selector specificity is crucial: IDs (1-0-0) override classes (0-1-0), which override elements (0-0-1). This cascade determines which styles apply when multiple rules target the same element.

## Example

```css
/* Element selector - least specific */
p {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

/* Class selector - medium specificity, reusable */
.highlight {
  background-color: #fef3c7;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #f59e0b;
}

/* Modern utility classes */
.text-large { font-size: 1.25rem; }
.mb-4 { margin-bottom: 1rem; }

/* ID selector - most specific, use sparingly */
#page-title {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: #1e40af;
  margin-bottom: 2rem;
  font-weight: 700;
}

/* Modern attribute selectors */
[data-state="active"] {
  background-color: #10b981;
  color: white;
}

/* Compound selectors for specificity control */
.card.is-featured {
  border: 2px solid #f59e0b;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

## When to Use

Use element selectors for base styles, classes for reusable components and utilities, and IDs sparingly for unique elements. Leverage attribute selectors and compound selectors for modern, maintainable CSS architecture.

**Source**: [MDN: CSS Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)
