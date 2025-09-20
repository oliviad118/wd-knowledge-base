---
title: CSS Grid Template Areas - Visual Layout Design
date: 2025-01-20
category: css-layout
difficulty: intermediate
source: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas
author: instructor
---

# CSS Grid Template Areas: Visual Layout Design

Grid template areas provide a visual, ASCII-art approach to defining layouts. You literally draw your layout with named areas in `grid-template-areas`, then assign items to those areas with `grid-area`. This creates self-documenting CSS where the code visually represents the actual layout. Areas must form rectangles, and dots (.) represent empty cells.

This approach excels for responsive design: redefine the template in media queries to completely restructure layouts without touching HTML. The visual nature makes complex layouts intuitive and maintainable, especially for teams.

## Example

```css
.page-layout {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "nav    main   aside"
    "footer footer footer";
  gap: 1rem;
  min-height: 100vh;
}

.header { grid-area: header; }
.nav { grid-area: nav; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }

/* Mobile: Stack everything */
@media (max-width: 768px) {
  .page-layout {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "nav"
      "main"
      "aside"
      "footer";
  }
}
```

## When to Use

Use template areas for page layouts, dashboard designs, or any layout where visual representation improves maintainability. Perfect for responsive restructuring without HTML changes.

**Source**: [MDN: Grid Template Areas](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)