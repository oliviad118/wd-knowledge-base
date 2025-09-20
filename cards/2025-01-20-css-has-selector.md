---
title: CSS has() Selector - The Parent Selector and Relationship Queries
date: 2025-01-20
category: css-fundamentals
difficulty: advanced
source: https://developer.mozilla.org/en-US/docs/Web/CSS/:has
author: instructor
---

# CSS :has() Selector: The Parent Selector and Relationship Queries

The :has() pseudo-class, often called the "parent selector," revolutionizes CSS by selecting elements based on their descendants or subsequent siblings. It enables upward and lateral selection in the DOM tree—previously impossible without JavaScript. An element matches :has() if any of its descendants match the selector argument.

Beyond parent selection, :has() enables powerful relational queries: select a form that contains an invalid input, a nav containing an active link, or a grid that holds a specific number of items. It's a game-changer for responsive components and state-based styling.

## Example

```css
/* Parent selection: Style form with invalid input */
form:has(input:invalid) {
  border: 2px solid red;
  padding: 1rem;
  background: #fff5f5;
}

/* Sibling selection: Label for checked checkbox */
label:has(+ input:checked) {
  font-weight: bold;
  color: #0066cc;
}

/* Quantity queries: Different grid for 4+ items */
.gallery:has(> :nth-child(4)) {
  grid-template-columns: repeat(4, 1fr);
}

/* Component state: Card with hover on button */
.card:has(.button:hover) {
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}
```

## When to Use

Use :has() for parent/ancestor selection, conditional layouts, form validation styling, and reducing JavaScript dependency. Check browser support (Safari 15.4+, Chrome/Edge 105+, Firefox 121+).

**Source**: [MDN: :has() Pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)
