

// Definitely a work in progress. Functions here are tightly coupled
// and scope inelegance means I'm passing $(this) as an arg a lot	


var FOLIO = (function($) {
	
	'use strict';

	var myFolio = {

		catList: $('.cat-list'),
		cats: $('.cat'),
		posts: $('.post'),


		getCatLength: function() {
			return (myFolio.cats.length);
		},
		getPostsLength: function(selector) {
			return (selector.find('.post').length);
		},



		addGrid: function(selector) {
			$(selector).addClass('grid');
		},

		removeGrid: function(selector) {
			$(selector).removeClass('grid');
		},

		addSingleView: function(selectors) {
			$(selectors).addClass('single-view');
		},

		removeSingleView: function(selectors) {
			$(selectors).removeClass('single-view');
		},



		showCat: function(selector) {
			selector.addClass('cat-expanded');
			selector.find('.post').eq(selector.data('postindex')).show();
			myFolio.catList.data('catindex', selector.data('cat') - 1 );
			selector.find('.lazy').trigger('loadSet');			
		},

		hideCat: function(selector) {
			selector.removeClass('cat-expanded');
			myFolio.posts.hide();
		},

		toggleCat: function(selector) {

			if (selector.hasClass('cat-expanded')) {
				myFolio.hideCat(selector);
				myFolio.removeSingleView('body');
			} else {
				myFolio.hideCat($('.cat'));
				myFolio.showCat(selector);
				myFolio.addSingleView('body');
			}			

		},



		postNav: function(e) {
			var oldCat = e.closest('.cat'),
				oldPos = oldCat.data('postindex'),
				newData = myFolio.setCurrentPost( e.data('dir'), e ),
				newPos = newData[0],
				newCatIndex = newData[1],
				newCat = myFolio.cats.eq(newCatIndex);

			oldCat.find('.post').eq(oldPos).hide();

			if (newCatIndex === 0 || newCatIndex) {
				myFolio.hideCat(oldCat);
				newCat.find('.lazy').trigger('loadSet');			
				newCat.addClass('cat-expanded');
				newCat.find('.post').eq(newPos).show();							
			} else {
				oldCat.find('.post').eq(newPos).show();
			}

		},				

		setCurrentPost: function(dir, e) {
			var currentCat = e.closest('.cat'),
				postLength = myFolio.getPostsLength(currentCat),	// defaults as 0
				dir = e.data('dir'),
				pos = currentCat.data('postindex'),
				newCatIndex = '',
				newPos = '';

			pos += ((dir === 'prev') ? -1 : ~~( dir === 'next' ));

			if (pos < 0) {
				newCatIndex = myFolio.setCurrentCat(e);
				newPos = postLength - 1;
				myFolio.cats.eq(newCatIndex).data('postindex', newPos);
			} else if (pos === postLength) {
				newCatIndex = myFolio.setCurrentCat(e);
				myFolio.cats.eq(newCatIndex).data('postindex', 0);	
			} else {
				newPos = pos % postLength;
				currentCat.data('postindex', newPos);
			}

			return [newPos, newCatIndex];
		},

		setCurrentCat: function(e) {
			var catsLength = myFolio.getCatLength(),
				catList = e.closest('.cat-list'),
				dir = e.data('dir'),		
				catIndex = catList.data('catindex'),
				newCatIndex = '';
		 
			catIndex += ((dir === 'prev') ? -1 : ~~( dir === 'next' ));
			newCatIndex = ( catIndex < 0 ? catsLength - 1 : catIndex % catsLength);	
			catList.data('catindex', newCatIndex);
			return newCatIndex;
		},


		// enquire.js utilities

		mediumEnterMeta: function() {
			// myFolio.posts.each(function() {
			// 	var $this = $(this),
			// 		postTxt = $this.find('.post-txt');

			// 	console.log('heyo');
			// 	$this.find($('.post-txt-client')).prependTo(postTxt);
			// 	$this.find($('.post-txt-index')).appendTo(postTxt);
			// });
		},

		mediumExitMeta: function() {

		}



	};

	//
	// HANDLERS
	//


	$('.cat-name').on('click', function() {
		var $this = $(this);

		myFolio.toggleCat($this.closest('.cat'));
		console.log('ay');
	});


	$('.button-big-post').on('click', function() {
		myFolio.postNav($(this));
	});

	return myFolio;

}(jQuery));


	// ENQUIRE FUNCTIONS

	enquire
	.register("screen and (min-width:600px)", {

		match : function() {
			FOLIO.mediumEnterMeta();
			console.log('enter');
		},    

		unmatch : function() {
			FOLIO.mediumExitMeta();
			console.log('exit');			
		}

	})
	.register("screen and (min-width:960px)", {

		match : function() {
			// console.log('meow');
		},    

		unmatch : function() {
			// console.log('meoweeee');
		}

	});


	// MISC FUNCTIONS

	// Lazy Load
	$(function() {
		$('.lazy').lazyload({
			event : 'loadSet'
		});
	});

	// fastclick. No need for double-taps on the page
	// if( $('html').hasClass('touch') ){
	// 	window.addEventListener('load', function() {
	// 		FastClick.attach(document.body);
	// 	}, false);
	// }


