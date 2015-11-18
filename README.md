# Greedy Navigation
Include `greedynav.css` and `greedynav.js` on the page and put the `<nav>` code in the body of the document. When the user resizes the window the nav will shrink, any overflowing items will be removed from the visible list and get prepended to a list of vertically stacked items that are hidden. The user is notified of this action by a `count` badge next to a hamburger icon at the end of the menu, which acts as a dropdown trigger button for the hidden list.

# Demo

http://codepen.io/lukejacksonn/pen/BowbWE

##Usage

```html
<head>
<link href="greedynav.css" rel="stylesheet" type="text/css" >
<script src="greedynav.js"></script>
</head>
<body>
<nav class='greedy'>
  <h1>GreedyNav</h1>
  <ul class='links'>
    <li><a href='#'>navbar</a></li>
    <li><a href='#'>that</a></li>
    <li><a href='#'>handles</a></li>
    <li><a href='#'>overflowing</a></li>
    <li><a href='#'>menu</a></li>
    <li><a href='#'>elements</a></li>
    <li><a href='#'>effortlessly</a></li>
  </ul>
  <button>MENU</button>
  <ul class='hidden-links hidden'></ul>
</nav>
</body>
```

## TODO

* Extend demo to show varients
* Make into a web component
