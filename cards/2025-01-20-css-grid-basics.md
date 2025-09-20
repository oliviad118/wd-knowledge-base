---
title: CSS Grid Basics - Creating Your First Grid Container
date: 2025-01-20
category: css-layout
difficulty: starter
source: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout
author: instructor
---

# CSS Grid Basics: Creating Your First Grid Container

CSS Grid is a two-dimensional layout system that divides space into rows and columns. Setting `display: grid` creates a grid container where children become grid items. Define the structure with `grid-template-columns` and `grid-template-rows` using any unit: fixed (px), flexible (fr), or content-based (auto). The `fr` unit represents a fraction of available space, making responsive grids effortless.

The `gap` property (formerly `grid-gap`) adds spacing between cells without margin hacks. Grid items automatically flow into cells, or you can explicitly place them using line numbers or named areas. This makes Grid perfect for page layouts and complex component structures.

## Example

```css
.grid-container {
  display: grid;
  /* Three columns: fixed, flexible, auto */
  grid-template-columns: 200px 1fr auto;
  /* Two rows of equal height */
  grid-template-rows: 1fr 1fr;
  gap: 20px; /* Space between all cells */
  padding: 1rem;
}

/* Responsive grid with auto-fit */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

/* Simple 12-column grid */
.layout {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
}
```

## When to Use

Use Grid for two-dimensional layouts: page structures, card galleries, complex forms. It excels where both row and column alignment matter. Combine with Flexbox for complete layout control.

**Source**: [MDN: Basic Concepts of Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)