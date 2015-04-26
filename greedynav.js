/*
GreedyNav.js - http://lukejacksonn.com/actuate
Licensed under the MIT license - http://opensource.org/licenses/MIT
Copyright (c) 2015 Luke Jackson
*/

$(function () {

var $nav = $('.greedy-nav');
var $btn = $('.greedy-nav button');
var $vlinks = $('.greedy-nav .visible-links');
var $hlinks = $('.greedy-nav .hidden-links');

var breaks = [];

  function updateNav() {

    var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

    // The visible list is overflowing the nav
    if($vlinks.width() > availableSpace) {

      // Record the width of the list
      breaks.push($vlinks.width());

      // Move item to the hidden list
      $vlinks.children().last().prependTo($hlinks);

      // Show the dropdown btn
      if($btn.hasClass('hidden')) {
        $btn.removeClass('hidden');
      }

    // The visible list is not overflowing
    } else {

      // There is space for another item in the nav
      if(availableSpace > breaks[breaks.length-1]) {

        // Move the item to the visible list
        $hlinks.children().first().appendTo($vlinks);
        breaks.pop();
      }

      // Hide the dropdown btn if hidden list is empty
      if(breaks.length < 1) {
        $btn.addClass('hidden');
        $hlinks.addClass('hidden');
      }
    }

    // Keep counter updated
    $btn.attr("count", breaks.length);

    // Recur if the items are still overflowing the nav
    if($vlinks.width() > availableSpace) {
      updateNav();
    }

  }

  // Window listeners

  $(window).resize(function() {
      updateNav();
  });

  $btn.on('click', function() {
    $hlinks.toggleClass('hidden');
  });

  updateNav();

});
