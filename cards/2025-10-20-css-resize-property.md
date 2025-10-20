---
title: "CSS resize Property: User-Resizable Elements"
date: 2025-10-20
category: css
difficulty: intermediate
source: https://developer.mozilla.org/en-US/docs/Web/CSS/resize
author: Olivia denton
---

# CSS resize Property: User-Resizable Elements

The `resize` property controls whether (and how) an element is resizable by the user. It pairs with `overflow` (which must be something other than `visible`) to provide a handle the user can drag to change an element's box size. Values include `none`, `both`, `horizontal`, `vertical`, and `block`/`inline` (logical axes). Use it for user-adjustable UI like resizable textareas, panes, or panels where layout flexibility improves UX. Keep accessibility and layout constraints in mind so resizable elements don't break a page or become unusable for keyboard users.

## Example

```html
<style>
  .notes {
    width: 300px;
    height: 120px;
    padding: 8px;
    border: 1px solid #ccc;
    overflow: auto; /* required for resize to work */
    resize: vertical; /* allow vertical resizing only */
  }

  .panel {
    width: 320px;
    height: 200px;
    padding: 12px;
    border: 1px solid #888;
    overflow: auto;
    resize: both; /* allow both axes */
    min-width: 200px;
    min-height: 100px;
    max-width: 100%;
  }
</style>

<textarea class="notes" aria-label="Notes">This textarea can be resized vertically by the user.</textarea>

<div class="panel" role="region" aria-label="Resizable panel">Drag the corner to resize this panel.</div>
```

## When to Use

Use `resize` when letting users change the size of content areas improves their experience—for example, resizable textareas for composing long messages, adjustable side panels in dashboards, or split panes in IDE-like interfaces. Avoid enabling unconstrained resizing for complex responsive layouts or essential content areas where overflow could hide controls.

## Browser compatibility & accessibility notes

- Most modern browsers support `resize` on elements like `textarea` and other elements when `overflow` is not `visible`.
- Mobile support varies; touch interactions for drag handles may be less discoverable.
- Always provide sensible `min-`/`max-` constraints and ensure keyboard operability and focusability for users who cannot use a mouse. Consider alternate controls (buttons, sliders) to change size for keyboard-only or assistive-tech users.

## Real-world examples

- Resizable textareas in comment boxes or editors (e.g., GitHub comment textarea).
- Sidebar panels and split panes in web-based IDEs (VS Code Web, code playgrounds).
- Resizable chat or note widgets embedded in dashboards.

**Source**: [MDN: resize](https://developer.mozilla.org/en-US/docs/Web/CSS/resize)
