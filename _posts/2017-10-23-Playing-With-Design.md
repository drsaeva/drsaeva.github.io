---
layout: post
title: "Playing With Design"
date: 2017-10-23
use_code: true
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

This isn't very attractive to visitors to the site - some of whom were pointed here from my resume to view my [portfolio](https://github.com/drsaeva?tab=repositories). I've been learning JavaScript (notably Angular) the past few months, and I decided sprucing up the design of my site was a great opportunity to apply that knowledge.

Responsive sidebar navigation is a fairly popular design choice on modern websites. While my site is small, and such design is unnecessary, I thought it would be a fun and simple implementation. For the most part, it was - except for the following caveat:

```html
<script src="/js/sidenav.js"></script>
<!-- Sidenav items -->
<div class="sidenav" id="mySidenav" >
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="https://drsaeva.github.io">home</a>
  <a href="https://drsaeva.github.io/about">about</a>
  <a href="https://drsaeva.github.io/cv">cv</a>
  <a href="https://drsaeva.github.io/blog">blog</a>
</div>
<!-- Element to open the sidenav -->
<div class="topnav" id="myTopnav" >
  <a onclick="openNav()">☰</a>
</div>
```

```css
/* SIDEBAR CSS */
/* The side navigation menu */
.sidenav {
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0;
    left: 0;
    background-color: #111; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

/* Cut short for brevity */ ...
```

```javascript
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
document.getElementById("mySidenav").style.width = "250px";
document.getElementById("main").style.marginLeft = "250px";
document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
document.getElementById("main").style.marginLeft = "0";
document.body.style.backgroundColor = "white";
}
```

The good - when you open the page, this menu is excellent. It's responsive, unobtrusive, and easy to spot (the ubiquitous hamburger). However... The bad - it doesn't work after navigating to another page. I struggled with this for hours - literally, *hours* - and the fix, when I found it, was unbelievably simple.

```html
<script src="/js/sidenav.js"></script>
<script src="https://drsaeva.github.io/js/sidenav.js"></script>
```

The two script tags above have one key difference: the top link is a **relative path**, and the bottom is an **absolute path**. When you navigate from https://drsaeva.github.io to https://drsaeva.github.io/blog, the **relative path** to the sourced javascript file includes the */blog*. This is a problem, since nothing exists there. If we place an **absolute path** in the script tag instead, indicated by the *https://* at the front, this file will be sourced from there.

I nearly kicked myself when I realized this. Why? I had just altered the links in the responsive sidebar from relative to absolute for the *exact same reason* no more than two hours prior. 

There are other ways around this as well. As common with Github pages, this site is built using Jekyll. Jekyll uses the Liquid templating language. A simple, clean fix is the following:

```html
<script src={{ site.base-url }}/js/sidenav.js></script>
```

This requires that ```base-url: ``` is set in the ```_config.yml``` file to your site's home directory - in my case, https://drsaeva.github.io. As it's much quicker to write ```// site.base-url }}``` every time, this saves a little effort. It's probably something I'll implement in the not-so-distant future. 

For now, though, I need to work on implementing a clear single-page layout for my home and blog pages, as well as links in the top navigation bar that shifts dynamically to fit the current page. Expect a post on that soon.
