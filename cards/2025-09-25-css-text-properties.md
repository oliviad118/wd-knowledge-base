---
title: CSS Text Properties: align, decoration, transform and spacing
date: 2025-09-25
category: css-core
difficulty: starter
source: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals
author: Olivia Denton
---

# CSS Text Properties

To manage how your text looks and is positioned, you can use several CSS properties. The text-transform property allows you to change the casing of your font (e.g., to all uppercase). For adding or removing visual lines, the text-decoration property is key; it's a shorthand for text-decoration-line, text-decoration-style, and text-decoration-color. This means you can combine values to create effects like line-through red wavy, or even apply multiple decorations at once, such as underline overline. To add depth, the text-shadow property can apply drop shadows to your text. It accepts up to four values (offsets, blur, and color), and you can apply multiple shadows by separating them with commas. Finally, the text-align property controls the horizontal positioning of text within its container. You can set it to left, right, or center. An additional option is justify, which spreads the text by varying word gaps so that all lines are the same width. However, use justify with caution, as it can look poor, especially with long words; if you use it, you should also consider using the hyphens property to help break words across lines. Letter-spacing and word-spacing, let you control the horizontal space between individual letters and full words in your text, respectively. While not used for general styling very often, they are useful for achieving a specific visual look or for improving the legibility of text, particularly with fonts that might be hard to read due to their density. Both properties typically accept standard length units (like px, em, or rem).

## Example

```css

/* text-transform example*/
h1 {
  font-size: 5rem;
  text-transform: capitalize;
}

/* letter-spacing and word-spacing example */
p::first-line {
  letter-spacing: 4px;
  word-spacing: 4px;
}

/* text-decoration example */
p {
  font-size: 1.5rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
  text-decoration: underline;
}

/* text-align example*/
p {
  font-size: 1.5rem;
  color: red;
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
}

# When to Use 

You should use the key CSS text properties when you need to control the horizontal placement, appearance, case, or spacing of text to improve design, readability, or user experience. Use text-align property to control the horizontal positioning of inline content (like text) within its parent block element. Use text-decoration property to add or remove visual lines from text. It is most commonly used to style links. Use text-transform property to modify the capitalization of text without changing the original HTML content. Use these properties letter-spacing and word-spacing to fine-tune the space between characters and words, respectively. These should be used conservatively.

