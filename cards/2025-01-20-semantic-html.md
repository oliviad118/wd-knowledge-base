---
title: Semantic HTML5 - Choosing the Right Elements for Accessibility
date: 2025-01-20
category: accessibility
difficulty: starter
source: https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML
author: instructor
---

# Semantic HTML5: Choosing the Right Elements for Accessibility

Semantic HTML uses elements that convey meaning, not just presentation. Screen readers, search engines, and browsers understand `<nav>`, `<main>`, `<article>`, and `<aside>` as distinct page regions. This built-in semantics provides navigation landmarks, document structure, and context without ARIA attributes. A `<button>` includes keyboard support, focus management, and screen reader announcement automatically—a `<div onclick>` requires recreating all of this.

Semantic HTML is the foundation of web accessibility. It's not about using divs less, but about choosing elements that describe content purpose: `<time>`, `<figure>`, `<mark>`, `<details>`. These elements work everywhere, require no JavaScript, and provide rich functionality for free.

## Example

```html
<!-- Semantic structure with built-in accessibility -->
<header>
  <nav aria-label="Main">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Article Title</h1>
    <time datetime="2025-01-20">January 20, 2025</time>
    <p>Content here...</p>
  </article>
  
  <aside>
    <h2>Related Links</h2>
    <!-- Sidebar content -->
  </aside>
</main>

<footer>
  <p>&copy; 2025</p>
</footer>
```

## When to Use

Always start with semantic HTML. Use `<button>` for actions, `<a>` for navigation, `<nav>` for navigation regions, `<main>` for primary content. Only add ARIA when semantic HTML falls short.

**Source**: [MDN: HTML Accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
