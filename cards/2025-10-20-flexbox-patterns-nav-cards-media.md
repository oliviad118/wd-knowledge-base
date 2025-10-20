---
title: Common Flexbox Patterns - Navigation, Cards, and Media Objects
date: 2025-10-20
category: css-layout
difficulty: intermediate
source: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout
author: Olivia Denton
---

# Common Flexbox Patterns: Navigation, Cards, and Media Objects

Flexbox excels at creating common UI patterns through its flexible space distribution. **Navigation layouts** use `justify-content: space-between` for logo-left/menu-right patterns or `justify-content: center` for centered navigation. **Card layouts** leverage `flex-wrap` and `flex: 1` for equal-width responsive cards. **Media objects** combine images with text using `align-items: flex-start` to top-align content while the image stays fixed. These patterns solve layout challenges that previously required complex positioning or floats.

The key is understanding how flex properties work together: containers control overall distribution with `justify-content` and `align-items`, while individual items use `flex` shorthand to control growth and shrinkage within available space.

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Flexbox Patterns Demo</title>
  <style>
    /* Reset and base styles */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui; line-height: 1.5; }

    /* Navigation Pattern */
    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background: #2c3e50;
      color: white;
    }
    .nav-menu {
      display: flex;
      gap: 2rem;
      list-style: none;
    }
    .nav-menu a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background 0.2s;
    }
    .nav-menu a:hover {
      background: rgba(255,255,255,0.1);
    }

    /* Card Grid Pattern */
    .card-container {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .card {
      flex: 1 1 300px; /* grow, shrink, basis */
      padding: 1.5rem;
      border: 1px solid #ddd;
      border-radius: 8px;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .card h3 {
      margin-bottom: 1rem;
      color: #2c3e50;
    }

    /* Media Object Pattern */
    .media-object {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      margin: 1rem 0;
      border: 1px solid #eee;
      border-radius: 4px;
    }
    .media-object img {
      flex-shrink: 0; /* Prevent image from shrinking */
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
    }
    .media-content {
      flex: 1; /* Take remaining space */
    }
    .media-content h4 {
      margin-bottom: 0.5rem;
      color: #2c3e50;
    }
  </style>
</head>
<body>
  <!-- Navigation Pattern -->
  <nav class="nav">
    <div class="logo">My Website</div>
    <ul class="nav-menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- Card Grid Pattern -->
  <section class="card-container">
    <div class="card">
      <h3>Service One</h3>
      <p>Responsive card that grows and shrinks based on available space. Perfect for service listings or product grids.</p>
    </div>
    <div class="card">
      <h3>Service Two</h3>
      <p>Cards maintain minimum width while filling available space evenly.</p>
    </div>
    <div class="card">
      <h3>Service Three</h3>
      <p>Flex-wrap ensures cards wrap to new lines when screen width decreases.</p>
    </div>
  </section>

  <!-- Media Object Pattern -->
  <section style="max-width: 600px; margin: 2rem auto; padding: 0 1rem;">
    <h2 style="margin-bottom: 1rem;">Recent Comments</h2>
    
    <div class="media-object">
      <img src="https://picsum.photos/60/60?random=1" alt="User avatar">
      <div class="media-content">
        <h4>Sarah Johnson</h4>
        <p>Great article! The flexbox examples really helped me understand how to build responsive layouts without complex grid systems.</p>
      </div>
    </div>

    <div class="media-object">
      <img src="https://picsum.photos/60/60?random=2" alt="User avatar">
      <div class="media-content">
        <h4>Michael Chen</h4>
        <p>The navigation pattern is exactly what I needed for my project. Clean and professional looking.</p>
      </div>
    </div>
  </section>
</body>
</html>
```

## When to Use

**Navigation**: Use flexbox for headers, navigation bars, and toolbars where you need consistent spacing and alignment. Perfect for logo-left/menu-right layouts or centered navigation.

**Cards**: Ideal for product grids, service listings, or any content that needs to be displayed in flexible, equal-width containers that adapt to screen size.

**Media Objects**: Essential for comments, user profiles, notifications, or any layout combining fixed-width images with flexible text content. Common in social media feeds and messaging interfaces.

These patterns are browser-compatible (IE11+) and provide responsive layouts without media queries.

**Source**: [MDN: CSS Flexible Box Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)