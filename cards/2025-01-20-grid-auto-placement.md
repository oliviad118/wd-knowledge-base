---
title: CSS Grid Auto-Placement - Smart Content Flow Algorithms
date: 2025-01-20
category: css-layout
difficulty: advanced
source: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout
author: instructor
---

# CSS Grid Auto-Placement: Smart Content Flow Algorithms

Grid's auto-placement algorithm intelligently positions items without explicit placement. The `grid-auto-flow` property controls flow direction: row (default), column, or dense. Dense packing fills gaps by allowing items to appear out of source order, maximizing space efficiency. `grid-auto-rows` and `grid-auto-columns` define sizes for implicitly-created tracks when content exceeds the explicit grid.

Auto-placement shines for dynamic content where item count varies. Combined with `auto-fit`/`auto-fill` and `minmax()`, it creates truly responsive grids that adapt to both container size and content amount, all without media queries or JavaScript.

## Example

```css
/* Masonry-like dense packing */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: 150px;
  grid-auto-flow: dense; /* Fill gaps efficiently */
  gap: 10px;
}

/* Span some items for variety */
.gallery-item.wide { grid-column: span 2; }
.gallery-item.tall { grid-row: span 2; }
.gallery-item.featured { 
  grid-column: span 2;
  grid-row: span 2;
}

/* Responsive card layout with auto-placement */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  gap: 2rem;
}
```

## When to Use

Use auto-placement for galleries, dashboards, card layouts, or any dynamic content grid. Dense packing works well for Pinterest-style layouts where visual order can differ from source order.

**Source**: [MDN: Auto-placement in Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)