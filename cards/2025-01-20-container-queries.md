---
title: CSS Container Queries - Component-Based Responsive Design
date: 2025-01-20
category: css-layout
difficulty: intermediate
source: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries
author: instructor
---

# CSS Container Queries: Component-Based Responsive Design

Container queries enable components to adapt based on their container's size, not the viewport. This solves the age-old problem of reusable components that work everywhere—sidebar, main content, or modal. Define a containment context with `container-type`, then query it with `@container`. Size queries check width/height, while style queries (upcoming) check custom properties.

This shifts responsive design from page-level to component-level, making truly portable components possible. Components adapt to their allocated space regardless of where they're placed, eliminating the need for viewport-based assumptions about layout context.

## Example

```css
/* Create container context */
.card-container {
  container-type: inline-size; /* Query inline dimension (width) */
  container-name: card; /* Optional: named container */
}

/* Component adapts to container width */
.card {
  display: grid;
  gap: 1rem;
}

/* Narrow container: Stack vertically */
@container (max-width: 400px) {
  .card {
    grid-template-columns: 1fr;
  }
  .card h2 { font-size: 1.25rem; }
}

/* Wide container: Horizontal layout */
@container card (min-width: 401px) {
  .card {
    grid-template-columns: 200px 1fr;
  }
  .card h2 { font-size: 1.5rem; }
}
```

## When to Use

Use container queries for component libraries, design systems, and any reusable component that appears in multiple contexts. Browser support: Chrome/Edge 105+, Safari 16+, Firefox 110+.

**Source**: [MDN: CSS Container Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries)