---
title: "CSS Loading Strategies: Inline, External, and Code Splitting."
date: 2025-09-21
category: css-core
difficulty: starter
source: https://www.w3schools.com/html/html_css.asp, https://web.dev/learn/performance/optimize-resource-loading, https://developer.mozilla.org/en-US/docs/Glossary/Code_splitting
author: Christopher Urban
---

# CSS Inline, External, and Code-Splitting

Inline refers to the use of `<style>` in your html as a means of preloading style choices for faster rendering or to prototype style choices before being placed in the CSS external script.

This can be used to great affect when cutting down initial load times as, it reduces the amount of network requests for CSS resources. This can also improve initial load times when a users browser cache is not primed. Usually this is done in the `<head>` element to serve the purpose of faster loading.Be sure that the added bytes to the HTML are worth the effort. Inline can also refer to the use of the style attribute inside of an HTML element.

External refers to writing your CSS on an external file and using `<link>` or @import to bring that file in to style your page. This is an industry standard practice. External CSS files allows for more efficient loading and processing. Inline is only used for critical styling, to keep the overall size of the HTML file down.

Code-splitting is a means of breaking up CSS that is used to only have a webpage load the CSS it absolutely needs to. For example: if a user is on one page, the CSS of another page on the site doesn't need to be loaded. Code-splitting breaks your CSS into "bundles" that get loaded as the user needs it. CSS can be broken into multiple scripts, so no one CSS file has all the styling for every part of the site. Adding a `media` query to the `<link>` that calls in distinct CSS files ensures that CSS is only ever used when the query is met.

## Example

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>h1,h2{color:#ff0000}h1{font-size:2em}h2{font-size:1.5em}</style>
    <!-- Global styles, always load -->
    <link rel="stylesheet" href="style.css">

    <!-- Styling adjustments for mobile screens -->
    <link rel="stylesheet" href="mobile.css" media="(max-width:460px)">

    <!-- Styling adjustments for larger screens -->
    <link rel="stylesheet" href="large-screen.css" media="(min-width:900px)">
</head>
<body>
    <h1 style="color:blue;" class="content">Main Title</h1>
    <h2 class="content">Subtitle</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet bibendum tortor. Aenean pellentesque, ante id convallis varius, odio est aliquet augue, ut tristique dui ligula tincidunt ante. Donec commodo risus sem, sagittis placerat augue dapibus ut. Curabitur non lacinia elit. Vestibulum vitae risus ac nisi viverra semper. Donec lobortis, lorem in pretium egestas, arcu ex feugiat sem, et iaculis ipsum dui id nisl. Vivamus finibus convallis finibus. Pellentesque ac purus neque.</p>
</body>
</html>
```

```CSS
/* mobile.css: Small screen adjustment for phone users */
.content {
    max-width: 42ch;
    padding: 0;
}

html {
    font-size: 16px;
}

p {
  line-height: 1.2;
  margin: 1rem;
}
```

```CSS
/* large-screen.css: Adjustments for large screen sizes */
.content {
    padding: 0 2rem;
}

p {
    line-height: 1.9;
}

h1, h2 {
    text-align: center;
    margin-left: 5rem;
    margin-right: 5rem;
}
```

## When to Use

Use `<style>` when you need to save time on initial loads for an HTML page that would not suffer from the added bytes of code to the base HTML file. If I was having problems with my website having slow load times, I might move over critical styling that must be loaded first to a `<style>` element in the `<head>` so they are loaded before any of the CSS files need to be requested into the HTML. This is primarily an optimizing choice to make sure the aesthetic of your website can remain consistent and load faster for users.

External is used to avoid excessive styling in the HTML file. using the `<link>` for external CSS files is also a great method of improving loading. It inherently is loaded before other methods like @import. When using @import the CSS file must first be downloaded before imported. The same is not true, and therefore faster, using `<link>`. External use is important for projects that require great deals of styling and is currently an industry standard practice to do.

Code-Splitting is used widely to save on load times. This should be used if your webpage is extensive and requires a great deal of styling. Breaking the sites CSS into bundles and attaching conditionals for use will allow your site to run optimally. Ensuring that it is only using the styling that is necessary for the user based on what they can physically see and the parameters of their screen.

**Source**: [W3 Schools: HTML-CSS](https://www.w3schools.com/html/html_css.asp), [web.dev: Optimize Resource Loading](https://web.dev/learn/performance/optimize-resource-loading), [W3 Schools: HTML-CSS](https://www.w3schools.com/html/html_css.asp), [web.dev: Optimize Resource Loading](https://web.dev/learn/performance/optimize-resource-loading), [MDN: Code-Splitting](https://developer.mozilla.org/en-US/docs/Glossary/Code_splitting)
