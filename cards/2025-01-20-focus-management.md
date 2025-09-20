---
title: Focus Management - focus-visible and Custom Focus Indicators
date: 2025-01-20
category: accessibility
difficulty: intermediate
source: https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible
author: instructor
---

# Focus Management: :focus-visible and Custom Focus Indicators

Focus indicators show keyboard users their current position—they're as crucial as mouse cursors. The `:focus-visible` pseudo-class intelligently shows focus rings for keyboard navigation while hiding them for mouse clicks, solving the designer-developer tension over "ugly" outlines. Never remove focus indicators without replacement; instead, design beautiful, high-contrast custom indicators that enhance your design.

Modern focus management goes beyond outlines: use offset for breathing room, multiple shadows for visibility on any background, and animations for delight. The key is ensuring indicators remain visible against all backgrounds—consider using both inner and outer rings for complex layouts.

## Example

```css
/* Remove default outline, add custom indicator */
button {
  position: relative;
  outline: none; /* Remove only if replacing */
}

/* Beautiful focus indicator for keyboard only */
button:focus-visible {
  outline: 3px solid #0066cc;
  outline-offset: 4px;
  box-shadow: 
    0 0 0 4px #ffffff,  /* White inner ring */
    0 0 0 6px #0066cc;  /* Blue outer ring */
}

/* Focus indicator that works on any background */
.universal-focus:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
  box-shadow: 
    0 0 0 4px rgba(255, 255, 255, 0.8),
    0 0 0 6px rgba(0, 102, 204, 0.8);
}

/* Skip to main content link */
.skip-link:focus {
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;
  background: #000;
  color: #fff;
  z-index: 999;
}
```

## When to Use

Apply custom focus indicators to all interactive elements. Use :focus-visible for keyboard-only indicators. Test with keyboard navigation to ensure focus is always clearly visible.

**Source**: [MDN: :focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
