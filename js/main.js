

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
			var post = selector.find('.post').eq(selector.data('postindex'));

			selector.addClass('cat-expanded');
			post.addClass('post-expanded');
			myFolio.catList.data('catindex', selector.data('cat') - 1 );
			myFolio.contain(post);
		},

		hideCat: function(selector) {
			selector.removeClass('cat-expanded');
			myFolio.posts.removeClass('post-expanded');
			myFolio.posts.removeClass('post-contain');
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

		changeCat: function(selector) {
			var oldCat = $('.post-expanded').closest('.cat'),
				oldPos = oldCat.data('postindex'),
				dir = selector.data('dir'),
				catList = $('.cat-list'),
				catIndex = catList.data('catindex'),
				catsLength = myFolio.getCatLength(),
				newCatIndex = '',
				newCat = '';

			// Remove current post-expanded
			oldCat.find('.post').eq(oldPos).removeClass('post-expanded');

			// Change cat index
			catIndex += ((dir === 'prev') ? -1 : ~~( dir === 'next' ));

			// Deal with edge cases
			newCatIndex = ( catIndex < 0 ? catsLength - 1 : catIndex % catsLength);

			// Set the new catIndex
			catList.data('catindex', newCatIndex);

			// Define newCat
			newCat = myFolio.cats.eq(newCatIndex);

			console.log(oldCat);

			// Hide the old cat
			myFolio.hideCat(oldCat);

			// Add cat expanded to the new cat
			newCat.addClass('cat-expanded');

			// Set the post index of the new cat

			if (dir === 'prev') {
				newCat.data('postindex', 4);
				newCat.find('.post').eq(4).addClass('post-expanded');		
			} else if (dir === 'next') {
				newCat.data('postindex', 0);
				newCat.find('.post').eq(0).addClass('post-expanded');		
			}	

		},



		postNav: function(e, opt) {
			var oldCat = e.closest('.cat'),
				oldPos = oldCat.data('postindex'),
				newData = myFolio.setCurrentPost( e.data('dir'), e, oldCat, oldPos ),
				newCat = myFolio.cats.eq(newData[1]);

			oldCat.find('.post').eq(oldPos).removeClass('post-expanded');

			if (newData[1] === 0 || newData[1]) {
				myFolio.hideCat(oldCat);
				newCat.addClass('cat-expanded');
				newCat.find('.post').eq(newData[0]).addClass('post-expanded');							
			} else {
				oldCat.find('.post').eq(newData[0]).addClass('post-expanded');
			}

		},				


		// Changes post index based on event direction
		// Runs setCurrentCat if at bounds of post range, updates catIndex

		setCurrentPost: function(dir, e, oldCat, oldPos) {
			var postLength = myFolio.getPostsLength(oldCat),	// defaults as 0
				newCatIndex = '',
				newPos = '';

			oldPos += ((dir === 'prev') ? -1 : ~~( dir === 'next' ));

			if (oldPos < 0) {
				newCatIndex = myFolio.setCurrentCat(dir, e);
				newPos = postLength - 1;
				myFolio.cats.eq(newCatIndex).data('postindex', newPos);
			} else if (oldPos === postLength) {
				newCatIndex = myFolio.setCurrentCat(dir, e);
				myFolio.cats.eq(newCatIndex).data('postindex', 0);	
			} else {
				newPos = oldPos % postLength;
				oldCat.data('postindex', newPos);
			}

			return [newPos, newCatIndex];
		},

		setCurrentCat: function(dir, e) {
			var catsLength = myFolio.getCatLength(),
				catList = e.closest('.cat-list'),
				catIndex = catList.data('catindex'),
				newCatIndex = '';
		 
			catIndex += ((dir === 'prev') ? -1 : ~~( dir === 'next' ));
			newCatIndex = ( catIndex < 0 ? catsLength - 1 : catIndex % catsLength);	
			catList.data('catindex', newCatIndex);
			return newCatIndex;
		},


		indexToImg: function() {
			myFolio.posts.each(function() {
				var index = $(this).find('.post-txt-index'),
					wrap = $(this).find('.post-img-wrap');

				index.appendTo(wrap);
			});
		},

		indexFromImg: function() {
			myFolio.posts.each(function() {
				var index = $(this).find('.post-txt-index'),
					txt = $(this).find('.post-txt');

				index.appendTo(txt);
			});
		},



		contain: function(selector) {
			var imgHeight = selector.find('.post-img').height();

			if (imgHeight < 380) {
				selector.addClass('post-contain');
			} else {
				selector.removeClass('post-contain');
			}
		},

		bindContain: function() {
			var post = $('.post-expanded');

			if (post.length === 0) { return; }

			$(window).on('resize', function() {
				myFolio.contain(post);
			})
		},

		unbindContain: function() {
			$(window).off('resize');
			myFolio.posts.removeClass('post-contain');
		}

	};

	//
	// HANDLERS
	//

	$('.cat-name, .cat-btn-outside').on('click', function() {
		myFolio.toggleCat($(this).closest('.cat'));
		myFolio.contain($('.post-expanded'));
		myFolio.bindContain();
	});

	$('.button-big-post').on('click', function() {
		myFolio.postNav($(this));
		myFolio.contain($('.post-expanded'));
	});

	$('.cat-change').on('click', function() {
		myFolio.changeCat($(this));
		myFolio.contain($('.post-expanded'));
	});

	$(window).on('resize', function bindContain() {
		var img = $('.post-expanded'),
			imgHeight = $('.post-expanded').find('.post-img').height();

		if (imgHeight < 430) {
			img.addClass('post-contain');
		} else {
			img.removeClass('post-contain');
		}
	});

	$(window).on('load', function() {
		$('.lazy').trigger('loadSet');
	});



	// MISC FUNCTIONS

	// Lazy Load
	$(function() {
		$('.lazy').lazyload({
			event : 'loadSet'
		});
	});


	return myFolio;


}(jQuery));



	// ENQUIRE FUNCTIONS

	enquire.register("screen and (min-width:800px)", {

		match : function() {
			FOLIO.contain($('.post-expanded'));
			FOLIO.indexToImg();
		},    

		unmatch : function() {
			FOLIO.unbindContain();
			FOLIO.indexFromImg();
		}

	});





