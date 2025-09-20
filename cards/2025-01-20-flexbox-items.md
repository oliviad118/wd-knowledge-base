---
title: Flexbox Items - flex-grow, flex-shrink, and flex-basis
date: 2025-01-20
category: css-layout
difficulty: intermediate
source: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items
author: instructor
---

# Flexbox Items: flex-grow, flex-shrink, and flex-basis

Flex item properties control how elements resize within their container. **flex-basis** sets the initial main size before free space is distributed (default: auto). **flex-grow** determines how much an item grows relative to siblings when extra space exists (default: 0). **flex-shrink** controls how much an item shrinks when space is insufficient (default: 1). The shorthand `flex` property intelligently sets all three.

The `flex` shorthand has smart defaults: `flex: 1` means `flex: 1 1 0%` (grow, shrink, zero basis), creating equally-sized flexible items. Understanding these properties enables sophisticated responsive layouts where items adapt proportionally to available space.

## Example

```css
.flex-container {
  display: flex;
  gap: 1rem;
}

/* Equal width columns */
.flex-item {
  flex: 1; /* flex: 1 1 0% */
}

/* Sidebar layout: fixed sidebar, flexible content */
.sidebar {
  flex: 0 0 250px; /* No grow, no shrink, 250px basis */
}

.main-content {
  flex: 1 1 auto; /* Grow, shrink, auto basis */
}

/* Proportional sizing */
.small { flex: 1; }  /* 1 unit of space */
.medium { flex: 2; } /* 2 units of space */
.large { flex: 3; }  /* 3 units of space */

/* Prevent shrinking below content */
.no-shrink {
  flex-shrink: 0;
  min-width: 200px;
}
```

## When to Use

Use flex properties for responsive layouts, proportional sizing, and preventing content overflow. The flex shorthand is preferred over individual properties for clarity.

**Source**: [MDN: Controlling Flex Item Ratios](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items)