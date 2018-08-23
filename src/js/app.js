// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import DE from './modules/dots';

( ($) => {
  'use strict';

  // When DOM is ready
  $(() => {
    DE.dotsEffect();
  });

})(jQuery);

//Responsive menu for header 

$(function() {
	let link = $(".menu-link");
	let linkActive = $(".menu-link_active");
	let menu = $(".menu");
	let nav = $(".menu a");
	let body = $('html, body');
	
	link.on("click", function() {
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu-active');
		body.toggleClass('act');
	});
	linkActive.on("click", function() {
		link.removeClass('menu-link_active');
	});
	nav.on("click", function() {
		menu.toggleClass('menu-active');
		link.toggleClass('menu-link_active');
	});
});