---
title: CSS Box Model Fundamentals
date: "2025-09-18"
category: css-fundamentals
difficulty: starter
source: https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model
author: instructor
---

# CSS Box Model Fundamentals

The CSS box model is the foundation of layout on the web. Every element is represented as a rectangular box with four areas: content, padding, border, and margin.

The **content box** holds the actual content (text, images). **Padding** creates space inside the border, around the content. The **border** wraps the padding and content. **Margin** creates space outside the border, separating elements from each other.

Understanding the box model is crucial because it affects how elements size and space themselves. The `box-sizing` property controls whether padding and border are included in an element's total width and height.

By default, when you set width and height on an element, you're setting the content box dimensions. Padding and border are added to this, making the element larger than expected. Using `box-sizing: border-box` makes width and height include padding and border, which is often more intuitive for layout.

## Example

```css
.box {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
  box-sizing: border-box; /* Total width stays 200px */
}

.content-box {
  width: 200px;
  padding: 20px;
  border: 5px solid blue;
  box-sizing: content-box; /* Total width becomes 250px */
}
```

## When to use

Apply box model concepts when laying out any webpage element, especially when precise spacing and alignment are needed. Understanding the box model is essential for CSS Grid, Flexbox, and traditional layout methods.

**Source**: [MDN: The Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
