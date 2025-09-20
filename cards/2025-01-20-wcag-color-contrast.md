---
title: WCAG Color Contrast - Meeting AA and AAA Standards
date: 2025-01-20
category: accessibility
difficulty: starter
source: https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
author: instructor
---

# WCAG Color Contrast: Meeting AA and AAA Standards

WCAG defines minimum contrast ratios between text and background colors to ensure readability for users with visual impairments. **Level AA** requires 4.5:1 for normal text and 3:1 for large text (18pt+ or 14pt+ bold). **Level AAA** requires 7:1 and 4.5:1 respectively. These ratios ensure text remains readable for users with moderately low vision, color blindness, or in challenging lighting conditions.

Contrast applies to all text, including placeholders, disabled states, and text over images. Tools like Chrome DevTools, WebAIM's contrast checker, and browser extensions help verify compliance. Remember: aesthetic preferences never outweigh accessibility needs.

## Example

```css
/* Good contrast examples - AA compliant */
.text-normal {
  color: #212529;        /* Dark gray */
  background: #ffffff;   /* White */
  /* Ratio: 12.63:1 ✓ Exceeds AAA */
}

.text-large {
  font-size: 1.5rem;
  font-weight: bold;
  color: #495057;        /* Medium gray */
  background: #ffffff;   /* White */
  /* Ratio: 8.59:1 ✓ AA for large text */
}

/* Warning colors with good contrast */
.alert {
  color: #721c24;        /* Dark red */
  background: #f8d7da;   /* Light pink */
  /* Ratio: 7.39:1 ✓ AAA compliant */
}

/* Link colors that meet standards */
a {
  color: #0066cc;        /* Blue - 5.07:1 with white ✓ */
}
```

## When to Use

Apply contrast requirements to all text content, including error messages, form labels, and data visualizations. Use automated testing tools during development to catch issues early.

**Source**: [W3C WAI: Understanding Contrast Minimum](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
