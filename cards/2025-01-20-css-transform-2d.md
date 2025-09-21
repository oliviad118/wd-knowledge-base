---
title: CSS transform 2D Transformations - scale, rotate, translate, skew
date: 2025-01-20
category: animation
difficulty: advanced
source: https://developer.mozilla.org/en-US/docs/Web/CSS/transform
author: instructor
---

# CSS transform: 2D Transformations - scale, rotate, translate, skew

The transform property modifies element position, size, and shape without affecting document flow. **translate()** moves elements (better than position for performance), **scale()** resizes from the center point, **rotate()** spins around the transform origin, and **skew()** creates parallelogram distortions. Combine multiple transforms in order—sequence matters because each transform applies to the result of previous ones.

Transform creates a new stacking context and establishes a containing block for fixed/absolute children. Use `transform-origin` to change the pivot point (default is "50% 50%" or center center). Hardware acceleration kicks in automatically, making transforms ideal for animations. Individual transform properties (translate, rotate, scale) offer better granular control.

## Example

```css
/* Basic transforms */
.card {
  transition: transform 300ms ease;
  transform-origin: center bottom; /* Change pivot point */
}

.card:hover {
  /* Multiple transforms apply right-to-left */
  transform: translateY(-10px) scale(1.05) rotate(2deg);
}

/* Individual transform properties (modern) */
.modern-card {
  translate: 0 0;
  scale: 1;
  rotate: 0deg;
  transition: translate 300ms, scale 300ms, rotate 300ms;
}

.modern-card:hover {
  translate: 0 -10px;
  scale: 1.05;
  rotate: 2deg;
}

/* Practical examples */
.menu-toggle {
  /* Hamburger to X transformation */
  transform: rotate(0deg);
}

.menu-toggle.active {
  transform: rotate(45deg);
}

/* Performance-optimized movement */
.slider {
  /* Use transform instead of left/top */
  transform: translateX(var(--slide-position));
  will-change: transform;
}

/* Flip card effect */
.flip-card-inner {
  transform-style: preserve-3d;
  transition: transform 600ms;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
```

## When to Use

Use transforms for animations, hover effects, and any visual manipulation. Prefer transform over position properties for animations. Individual transform properties provide cleaner syntax for complex animations.

**Source**: [MDN: CSS transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
