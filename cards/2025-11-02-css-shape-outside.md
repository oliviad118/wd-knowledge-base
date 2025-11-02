---
title: "CSS shape-outside: Wrapping Text Around Complex Shapes"
date: 2025-11-02
category: css-layout
difficulty: advanced
source: https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside
author: copilot
---

# CSS shape-outside: Wrapping Text Around Complex Shapes

CSS `shape-outside` lets inline content wrap around non-rectangular floats (images, SVG, or pseudo-elements). Instead of the default rectangular float box, you define a geometric shape (circle, ellipse, polygon) or use an image/alpha mask so surrounding text conforms to the shape—creating magazine-style layouts, avatars that text flows around, or decorative illustrations that integrate with paragraphs.

Unlike `float` alone, `shape-outside` controls the contour used for text wrapping while `clip-path` (or an alpha channel) can visually crop the floated element so the visual and wrapping shapes match. Use `shape-margin` to add breathing room between the shape and wrapped text.

When to Use
--------------
- To create editorial or magazine-like layouts where images sit inside text blocks.
- For avatars or icons that should be inset into copy without hard rectangular gaps.
- When you want a decorative or branded composition where type hugs an illustration.

Example (working)
------------------
This example floats an image and uses `shape-outside` with `circle()` while `clip-path` visually crops the image to the same circle so text follows the visible edge.

```html
<!-- HTML -->
<article class="card">
  <img class="float-shape" src="/images/avatar.jpg" alt="Decorative avatar">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt
    arcu et sapien laoreet, non pulvinar urna porttitor. The text will wrap
    around the circular image, creating a more integrated, magazine-like
    appearance.
  </p>
</article>
```

```css
/* CSS */
.float-shape {
  float: left;
  width: 180px;
  height: 180px;
  object-fit: cover; /* keep image filling the box */
  /* Wrap text around a circle centered in the element */
  shape-outside: circle(50% at 50% 50%);
  /* Leave a little space between text and shape */
  shape-margin: 12px;
  /* Visually crop the image to match the wrapping shape */
  clip-path: circle(50% at 50% 50%);
  /* Prevent image from being treated as inline when calculating shape
     (some browsers require display:block) */
  display: block;
  margin-right: 1rem;
}

/* Fallback: if shape-outside unsupported, float will still provide rectangular wrap */
@supports (shape-outside: circle(50% at 50% 50%)) {
  /* modern browsers handle as above */
}

article { max-width: 60ch; }
```

Browser compatibility and notes
------------------------------
- `shape-outside` has solid support in modern Chromium and WebKit browsers (Chrome, Edge, Safari). Historically Firefox had limited or partial support—always check current MDN compatibility and test on your target browsers.
- Use graceful fallback: keep `float` so text still wraps in a rectangular fashion when `shape-outside` isn't supported; avoid placing essential content inside the shaped region because assistive tech might not expose the exact flow.
- Performance: complex shapes or very large images may affect layout work; prefer simple shapes and test on mobile.

Real-world applications
----------------------
- Magazine and news sites (images embedded in long-form articles).
- Author bios and avatars that tuck into the first paragraph.
- Styled pull-quotes or decorative illustrations that interact with copy.

Accessibility and best practices
-------------------------------
- Do not rely on shapes to convey essential information—keep semantics in HTML.
- Ensure `alt` text for images is meaningful; if an image is purely decorative, use an empty `alt=""`.

**Source**: [CSS shape-outside - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside)
