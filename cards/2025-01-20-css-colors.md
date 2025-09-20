---
title: CSS Colors - hex, rgb, hsl, and Modern Color Spaces
date: 2025-01-20
category: css-fundamentals
difficulty: starter
source: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
author: instructor
---

# CSS Colors: hex, rgb, hsl, and Modern Color Spaces

CSS offers multiple color formats, each with unique advantages. **Hexadecimal** (#RRGGBB) is compact but hard to read. **RGB** (red, green, blue) uses familiar 0-255 values. **HSL** (hue, saturation, lightness) is most intuitive for creating color variations—adjust lightness for tints/shades, saturation for intensity. Modern formats include **oklch** for perceptually uniform colors and **color-mix()** for dynamic blending.

The alpha channel (transparency) is available in all formats: hex (#RRGGBBAA), rgba(), hsla(). HSL excels for theme systems—keep hue constant while varying saturation and lightness for cohesive palettes.

## Example

```css
.color-examples {
  /* Hex: concise but opaque */
  color: #0066cc;
  
  /* RGB: clear channel values */
  background: rgb(0, 102, 204);
  
  /* HSL: human-readable */
  border-color: hsl(210, 100%, 40%);
  
  /* Alpha transparency */
  box-shadow: 0 4px 6px hsla(210, 100%, 40%, 0.3);
  
  /* Modern color-mix (2023+) */
  accent-color: color-mix(in srgb, #0066cc 75%, white);
}
```

## When to Use

Use HSL for design systems and themes, hex for quick prototyping, rgb for precise color matching. Modern browsers support oklch and color-mix() for advanced color manipulation.

**Source**: [MDN: CSS Color Values](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)