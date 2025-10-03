---
title: "CSS Display Property: block, inline, inline-block, and none"
date: 2025-10-03
category: CSS Core 
difficulty: starter
source: 
author: Sahar Naz
---

## CSS Display Property - block, inline, inline-block, and none 
**Block elements:**
- Take up the full width available
- Start on a new line
- Examples: `<div>`, `<h1>`, `<p>`

**Inline elements:**
- Only take up as much width as needed
- Stay on the same line with other elements  
- Examples: `<span>`, `<a>`, `<strong>`

**Inline-block elements:**
- Best of both worlds - stay inline but can have width/height
- Useful for buttons, navigation items

**None:**
- Completely hides the element from the page

## Code examples
```html
<!-- Block elements (take full width, new line) -->
<div style="display: block; background: lightblue;">
  Block element - takes full width
</div>
<div style="display: block; background: lightgreen;">
  Another block - starts on new line
</div>

<!-- Inline elements (only width needed, same line) -->
<span style="display: inline; background: yellow;">Inline 1</span>
<span style="display: inline; background: pink;">Inline 2</span>
<span style="display: inline; background: orange;">Inline 3</span>

<!-- Inline-block (same line but can set width/height) -->
<div style="display: inline-block; width: 100px; height: 50px; background: purple;">Box 1</div>
<div style="display: inline-block; width: 100px; height: 50px; background: red;">Box 2</div>

<!-- None (completely hidden) -->
<div style="display: none;">
  You can't see me!
</div>
```

## When to use


**Source**: [description](url)
**Also referenced**: [description](url)