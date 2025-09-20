---
title: CSS Transitions - Smooth State Changes with transition Property
date: 2025-01-20
category: animation
difficulty: starter
source: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions
author: instructor
---

# CSS Transitions: Smooth State Changes with transition Property

CSS transitions animate property changes over time, creating smooth visual feedback for user interactions. The `transition` shorthand combines four values: property to animate, duration, timing function (ease, linear, cubic-bezier), and delay. Transitions only work on animatable properties with calculable intermediate values—you can't transition from `display: none` or `height: auto`.

Best practice: be specific about which properties to transition. Using `transition: all` causes performance issues as the browser checks every property for changes. Modern approach uses `transition-behavior: allow-discrete` to transition discrete properties like display (Chrome 117+).

## Example

```css
/* Basic button transition */
.button {
  background: #0066cc;
  transform: translateY(0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* Only transition what changes */
  transition: 
    background-color 200ms ease,
    transform 200ms ease,
    box-shadow 200ms ease;
}

.button:hover {
  background: #0052a3;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* Staggered menu items */
.menu-item {
  opacity: 0;
  transform: translateX(-20px);
  transition: 
    opacity 300ms ease,
    transform 300ms ease;
}

.menu-item.visible {
  opacity: 1;
  transform: translateX(0);
}

/* Transition delay for stagger effect */
.menu-item:nth-child(1) { transition-delay: 0ms; }
.menu-item:nth-child(2) { transition-delay: 50ms; }
.menu-item:nth-child(3) { transition-delay: 100ms; }
```

## When to Use

Apply transitions to hover effects, focus states, and micro-interactions. Keep durations between 200-300ms for responsive feel. Avoid transitioning expensive properties like width/height—use transform instead.

**Source**: [MDN: CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)
