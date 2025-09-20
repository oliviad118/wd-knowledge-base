---
title: Core Web Vitals - LCP, CLS, and INP Optimization
date: 2025-01-20
category: performance
difficulty: intermediate
source: https://web.dev/vitals/
author: instructor
---

# Core Web Vitals: LCP, CLS, and INP Optimization

Core Web Vitals measure real-world user experience through three metrics. **Largest Contentful Paint (LCP)** measures loading performance—the time until the largest content element renders (target: <2.5s). **Cumulative Layout Shift (CLS)** quantifies visual stability—unexpected layout shifts during the page lifecycle (target: <0.1). **Interaction to Next Paint (INP)**, which replaced FID in 2024, measures responsiveness—the delay from user interaction to visual feedback (target: <200ms).

These metrics directly impact SEO rankings and user satisfaction. CSS plays a crucial role: proper dimensions prevent CLS, critical CSS improves LCP, and CSS containment helps INP. Modern tools like Lighthouse and Chrome UX Report provide real-world measurement.

## Example

```css
/* Prevent CLS: Define dimensions */
img, video, iframe {
  aspect-ratio: 16 / 9; /* Modern approach */
  width: 100%;
  height: auto;
}

/* Reserve space for dynamic content */
.ad-container {
  min-height: 250px; /* Prevents shift when ad loads */
}

/* Optimize LCP: Critical CSS inline */
.hero {
  /* These styles should be inlined in <head> */
  min-height: 100vh;
  background: linear-gradient(/* ... */);
}

/* Improve INP: Reduce paint complexity */
.interactive-element {
  will-change: transform; /* Optimize animations */
  contain: layout style; /* Isolate rendering */
}

/* Font loading optimization for CLS */
@font-face {
  font-family: 'CustomFont';
  font-display: swap; /* Show fallback immediately */
  src: url('/fonts/custom.woff2') format('woff2');
}
```

## When to Use

Implement Core Web Vitals optimization from project start. Define image dimensions, use CSS containment for complex components, and inline critical CSS. Monitor with real user data.

**Source**: [web.dev: Core Web Vitals](https://web.dev/vitals/)