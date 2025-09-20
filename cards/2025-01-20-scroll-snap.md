---
title: CSS Scroll Snap - Creating Smooth Scrolling Experiences
date: 2025-01-20
category: css-layout
difficulty: advanced
source: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap
author: instructor
---

# CSS Scroll Snap: Creating Smooth Scrolling Experiences

Scroll snap creates polished scrolling experiences with pure CSS, no JavaScript required. The container uses `scroll-snap-type` to define snap axis and strictness (mandatory vs proximity). Children use `scroll-snap-align` to specify their snap position (start, center, end). The result: smooth, predictable scrolling that feels native, perfect for carousels, galleries, and fullscreen sections.

Scroll padding (`scroll-padding`) creates breathing room, while `scroll-snap-stop` forces a pause at each item. Modern browsers handle touch, trackpad, and mouse wheel gracefully, providing momentum scrolling with magnetic snap points.

## Example

```css
/* Horizontal carousel */
.carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  gap: 1rem;
  padding: 1rem;
  /* Hide scrollbar but keep functionality */
  scrollbar-width: none;
}

.carousel-item {
  flex: 0 0 300px;
  scroll-snap-align: center;
  scroll-snap-stop: always; /* Prevent skipping */
}

/* Fullscreen sections */
.fullpage-container {
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
}

.section {
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## When to Use

Use scroll snap for image galleries, product carousels, fullscreen presentations, or mobile-friendly horizontal navigation. Provides touch-friendly experiences without JavaScript dependencies.

**Source**: [MDN: CSS Scroll Snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap)