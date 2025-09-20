---
title: CSS @keyframes - Creating Multi-Step Animations
date: 2025-01-20
category: animation
difficulty: intermediate
source: https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes
author: instructor
---

# CSS @keyframes: Creating Multi-Step Animations

The @keyframes rule defines animation sequences with multiple steps, enabling complex motion beyond simple transitions. Define waypoints using percentages (0-100%) or keywords (from/to), then apply with the `animation` property. Each keyframe specifies property values at that point in time, and the browser interpolates between them smoothly.

Animations differ from transitions: they run automatically, can loop infinitely, and support multiple intermediate steps. The `animation` shorthand includes duration, timing-function, delay, iteration-count, direction, fill-mode, and play-state. Use `animation-fill-mode: forwards` to persist the final state.

## Example

```css
/* Define the animation */
@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  60% {
    transform: translateX(10px); /* Slight overshoot */
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Apply the animation */
.animate-in {
  animation: slide-in 600ms ease-out forwards;
}

/* Loading spinner */
@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #0066cc;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Pulse effect for attention */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.badge-new {
  animation: pulse 2s ease-in-out infinite;
}
```

## When to Use

Use keyframe animations for loading indicators, entrance effects, attention-grabbing elements, and complex sequences. Prefer CSS animations over JavaScript for better performance and simpler maintenance.

**Source**: [MDN: @keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
