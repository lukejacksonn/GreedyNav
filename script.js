/*
GreedyNav.js - http://lukejacksonn.com/actuate
Licensed under the MIT license - http://opensource.org/licenses/MIT
Copyright (c) 2015 Luke Jackson
*/

var $nav = $('nav.greedy');
var $button = $('nav.greedy button');
var $vlinks = $('.visible-links');
var $hlinks = $('.hidden-links');
var breaks = [];

$button.on('click', function() {
  $hlinks.toggleClass('hidden');
})

$(window).resize(function () {

  // Nav is overflowing
  if(($nav.width()-$button.width()-15) < $vlinks.width()) {
    $vlinks.children().last().prependTo($hlinks);
    breaks.push($nav.width());
    if($button.hasClass('hidden')) {
      $button.removeClass('hidden');
    }
  } else {
    // Another link could be made visible
    if($nav.width()>breaks[breaks.length-1]) {
      $hlinks.children().first().appendTo($vlinks);
      breaks.pop();
    }
    if(breaks.length < 1) {
      $button.addClass('hidden');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $button.attr("count", breaks.length);

});
