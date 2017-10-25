---
layout: post
title: "Playing With Design"
date: 2017-10-23
---

In the last few days, I've been trying out design changes for this site. Prior, the site had a very simple set of navigation links at the top - while sensible, since the site is small, it produced a stale and unresponsive UI harkening back to the web pages of olden days.

```html
<ul>
  <li>David R. Saeva </li>
  <li><a href="/">home</a></li>
  <li><a href="/about">about</a></li>
  <li><a href="/cv">cv</a></li>
  <li><a href="/blog">blog</a></li>
</ul>
```

```css
nav ul, footer ul {
    font-family:'Helvetica', 'Arial', 'Sans-Serif';
    padding: 0px;
    list-style: none;
    font-weight: bold;
}
nav ul li, footer ul li {
    display: inline;
    margin-left: 20px;
}
```
