---
title: Flexbox Container - justify-content, align-items, and flex-direction
date: 2025-01-20
category: css-layout
difficulty: starter
source: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox
author: instructor
---

# Flexbox Container: justify-content, align-items, and flex-direction

Flexbox is a one-dimensional layout system that excels at distributing space along a single axis. Setting `display: flex` creates a flex container with two axes: main (defined by flex-direction) and cross (perpendicular). **flex-direction** sets the main axis: row (default), column, or their reverse variants. **justify-content** aligns items along the main axis (horizontal spacing in rows). **align-items** aligns items along the cross axis (vertical alignment in rows).

Understanding axes is crucial: in row direction, justify-content controls horizontal distribution while align-items controls vertical alignment. In column direction, these roles swap. The container properties affect all children collectively.

## Example

```css
.flex-container {
  display: flex;
  flex-direction: row; /* Main axis = horizontal */
  justify-content: space-between; /* Horizontal distribution */
  align-items: center; /* Vertical alignment */
  gap: 1rem; /* Modern spacing between items */
  min-height: 100px;
  padding: 1rem;
}

/* Common patterns */
.nav { 
  display: flex;
  justify-content: space-between; /* Logo left, menu right */
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertical centering */
  align-items: center; /* Horizontal centering */
  min-height: 100vh;
}
```

## When to Use

Use flexbox for navigation bars, card layouts, centering content, and any one-dimensional layout. It's perfect for components that need to adapt to content size.

**Source**: [MDN: Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)