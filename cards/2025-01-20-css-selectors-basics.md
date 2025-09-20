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
  color: gray;
  line-height: 1.6;
}

/* Class selector - medium specificity */
.highlight {
  background-color: yellow;
  padding: 2px 4px;
}

/* ID selector - most specific */
#page-title {
  font-size: 2rem;
  color: navy;
  margin-bottom: 1rem;
}
```

## When to Use

Use element selectors for base styles, classes for reusable components, and IDs sparingly for unique elements like navigation anchors or form targets.

**Source**: [MDN: CSS Selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)