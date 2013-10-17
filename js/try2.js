	

var MODULE = (function($) {
	
	'use strict';

	var module = {};


	module = {
		a: 1,
		b: 2
	};

	module.hello = function() {
		console.log('ya');
	};

	// function myman() {
	// 	return c;
	// };

	console.log(module.a);

	//
	// HANDLERS
	// //

	// $('.cat-btn').on('click', function() {
	// 	FOLIO.toggleCat();
	// });

	return module;

}(jQuery));
