---
title: CSS Containment - contain Property for Performance Isolation
date: 2025-01-20
category: performance
difficulty: advanced
source: https://developer.mozilla.org/en-US/docs/Web/CSS/contain
author: instructor
---

# CSS Containment: contain Property for Performance Isolation

The `contain` property creates rendering boundaries, telling browsers which parts of the page are independent. This enables aggressive optimizations by limiting the scope of layout, style, and paint calculations. Values include `layout` (isolates layout), `style` (scopes counters and quotes), `paint` (clips rendering), and `size` (element sizing doesn't depend on children). The `content` shorthand combines layout and paint.

Containment dramatically improves performance for dynamic UIs. When a contained element changes, the browser only recalculates that subtree, not the entire page. Combined with `content-visibility: auto`, browsers can skip rendering off-screen content entirely, making infinite scroll and large DOMs performant.

## Example

```css
/* Isolate card components */
.card {
  contain: content; /* layout + paint containment */
  /* Browser won't recalculate outside when card changes */
}

/* Strict containment for widgets */
.widget {
  contain: strict; /* All containment types */
  width: 300px; /* Size must be explicit with strict */
  height: 400px;
}

/* Optimize off-screen content */
.comment {
  contain: layout style;
  content-visibility: auto; /* Skip rendering if off-screen */
  contain-intrinsic-size: 0 100px; /* Placeholder size */
}

/* Isolate counter scope */
.chapter {
  contain: style; /* Counters don't leak out */
  counter-reset: section;
}

/* Performance optimization for infinite scroll */
.feed-item {
  contain: layout size paint;
  min-height: 200px; /* Predictable size for virtualization */
}
```

## When to Use

Apply containment to independent components, feed items, cards, widgets, and any frequently-updated UI sections. Essential for performant infinite scroll and complex dashboards.

**Source**: [MDN: CSS Containment](https://developer.mozilla.org/en-US/docs/Web/CSS/contain)
