---
title: CSS Box Model - Understanding Content, Padding, Border, and Margin
date: 2025-01-20
category: css-fundamentals
difficulty: starter
source: https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model
author: instructor
---

# CSS Box Model: Understanding Content, Padding, Border, and Margin

Every HTML element is represented as a rectangular box with four distinct areas. The **content box** holds your actual content (text, images). **Padding** creates breathing room inside the element, between content and border. The **border** wraps around the padding and content, providing visual boundaries. **Margin** creates space outside the border, pushing other elements away.

The `box-sizing` property fundamentally changes how width and height are calculated. With `content-box` (default), width/height only applies to content. With `border-box`, width/height includes padding and border, making layouts more predictable. Modern CSS typically uses `border-box` for all elements.

## Example

```css
.card {
  /* Total width = 300px with border-box */
  width: 300px;
  padding: 20px;
  border: 2px solid #ddd;
  margin: 10px;
  box-sizing: border-box;
  
  /* Visual demonstration */
  background-color: #f5f5f5;
  border-radius: 8px;
}
```

## When to Use

Apply box model understanding whenever laying out elements, especially for cards, containers, and spacing systems. Use `border-box` globally for predictable sizing.

**Source**: [MDN: The Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)