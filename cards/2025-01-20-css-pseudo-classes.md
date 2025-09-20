---
title: CSS Pseudo-classes - hover, focus, active, and State Management
date: 2025-01-20
category: css-fundamentals
difficulty: intermediate
source: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
author: instructor
---

# CSS Pseudo-classes: :hover, :focus, :active, and State Management

Pseudo-classes select elements based on their state or user interaction, enabling dynamic styling without JavaScript. **:hover** applies when a pointer hovers over an element. **:focus** targets elements receiving keyboard focus, crucial for accessibility. **:active** styles elements during activation (mousedown or keypress). **:focus-visible** is the modern approach, showing focus rings only for keyboard navigation, not mouse clicks.

Order matters due to CSS cascade: link-visited-focus-hover-active (LVFHA) ensures proper state precedence. Always provide distinct focus styles for keyboard accessibility—never remove focus indicators without replacement.

## Example

```css
.button {
  background: #0066cc;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.button:hover {
  background: #0052a3;
  transform: translateY(-2px);
}

.button:focus-visible {
  outline: 3px solid #66b3ff;
  outline-offset: 2px;
}

.button:active {
  transform: translateY(0);
}
```

## When to Use

Apply pseudo-classes to all interactive elements: buttons, links, form inputs. Always test keyboard navigation to ensure focus states are visible and logical.

**Source**: [MDN: Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)