---
title: CSS Custom Properties - Dynamic Theming with CSS Variables
date: 2025-01-20
category: performance
difficulty: intermediate
source: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
author: instructor
---

# CSS Custom Properties: Dynamic Theming with CSS Variables

CSS custom properties (CSS variables) enable dynamic values that cascade, inherit, and update at runtime. Declared with `--` prefix and accessed via `var()`, they revolutionize theming, component variants, and responsive design. Unlike preprocessor variables, they're live in the browser—JavaScript can read and modify them, animations can interpolate them, and they respect the cascade.

Custom properties shine for design systems: define tokens at `:root`, override in components, and switch themes by updating a few values. The `var()` function accepts fallbacks, enabling progressive enhancement. They're the foundation of modern CSS architecture.

## Example

```css
/* Design tokens at root */
:root {
  --color-primary: #0066cc;
  --color-surface: #ffffff;
  --spacing-unit: 0.5rem;
  --radius: 4px;
  --font-body: system-ui, sans-serif;
}

/* Dark theme override */
[data-theme="dark"] {
  --color-primary: #66b3ff;
  --color-surface: #1a1a1a;
}

/* Component using variables */
.button {
  background: var(--color-primary);
  padding: calc(var(--spacing-unit) * 2) calc(var(--spacing-unit) * 4);
  border-radius: var(--radius);
  color: var(--color-surface);
  
  /* Local variable for variants */
  --button-scale: 1;
  transform: scale(var(--button-scale));
}

.button:active {
  --button-scale: 0.95;
}

/* Responsive variables */
@media (min-width: 768px) {
  :root {
    --spacing-unit: 0.75rem;
  }
}
```

## When to Use

Use custom properties for theming, design tokens, component variants, and any value that changes across contexts. They're essential for modern CSS architecture and runtime customization.

**Source**: [MDN: Using CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)