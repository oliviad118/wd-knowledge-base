---
title: "Touch Targets: Size and Spacing for Mobile Accessibility"
date: 2025-10-20
category: accessibility-intermediate
difficulty: intermediate
source: https://www.w3.org/WAI/WCAG22/Understanding/target-size.html
author: Olivia Denton
---

# Touch Targets: Size and Spacing for Mobile Accessibility

Touch targets are the tappable areas for controls (buttons, links, icons). Make touch targets big enough and give them space so users don't activate the wrong control. Aim for a minimum interactive area of ~44×44 CSS pixels (WCAG 2.2 recommendation; Material uses 48dp). Prefer adding padding, using `min-width`/`min-height`, and increasing gap between controls rather than shrinking visual elements. Larger and well-spaced targets reduce accidental taps for people with motor impairments, one-handed users, and those on small or dense screens.

## Example

This minimal example uses CSS to guarantee a tappable hit area while allowing a smaller visual icon.

```html
<style>
  :root{ --touch:44px; }
  .btn{ display:inline-flex; align-items:center; justify-content:center; min-width:var(--touch); min-height:var(--touch); padding:8px; border-radius:8px; }
  .icon{ width:20px; height:20px; }
</style>
<a class="btn" href="#">Save</a>
<button class="btn" aria-label="Search"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6"/></svg></button>
```

## When to Use

Apply these rules on mobile layouts, toolbars, navigation, forms, and anywhere users tap. In dense UI regions, preserve hit area with extra padding or invisible margins (a larger clickable parent) instead of reducing visual size.

## Notes

- Works across modern mobile browsers; CSS used (flexbox, min-width/min-height) is widely supported.
- Always provide accessible names for icon-only controls (aria-label or visible text).

**Source**: [Understanding Success Criterion 2.5.5: Target Size (WCAG 2.2)](https://www.w3.org/WAI/WCAG22/Understanding/target-size.html)