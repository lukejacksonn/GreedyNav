# Greedy Navigation
Include the style and script files then put the `<nav>` code in the `<body>` of your project. When the user resizes the window the nav will shrink, any overflowing items will be removed from the visible list and get prepended to a list of vertically stacked items that are hidden. The user is notified of this action by a `count` badge next to a hamburger icon at the end of the menu, which acts as a dropdown trigger button for the hidden list.

##Usage

```html
<link rel="stylesheet" type="text/css" href="style.css">
<script src="script.js"></script>

<nav class='greedy'>
<button><div class="hamburger"></div></button>
  <ul class='visible-links'>
    <li><a href='#'>Greedy</a></li>
    <li><a href='#'>navigation</a></li>
    <li><a href='#'>that</a></li>
    <li><a href='#'>handles</a></li>
    <li><a href='#'>overflowing</a></li>
    <li><a href='#'>menu</a></li>
    <li><a href='#'>elements</a></li>
    <li><a href='#'>effortlessly</a></li>
  </ul>
  <ul class='hidden-links hidden'></ul>
</nav>
```

## TODO

* Cleanup style.less
* Add debounced resize
* Make into a web component
* Make into a react and angular component
