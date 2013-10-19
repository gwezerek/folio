

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

		addArticleView: function(selector) {
			$(selector).addClass('article-view');
		},

		removeArticleView: function(selector) {
			$(selector).removeClass('article-view');
		},



		showCat: function(selector) {
			selector.addClass('cat-expanded');
			selector.find('.post').eq(selector.data('postindex')).slideDown();
			myFolio.catList.data('catindex', selector.data('cat') - 1 );			
		},

		hideCat: function(selector) {
			selector.removeClass('cat-expanded');
			myFolio.posts.hide();
		},

		toggleCat: function(selector) {

			if (selector.hasClass('cat-expanded')) {
				myFolio.hideCat(selector);
				myFolio.removeArticleView('.footer-actions-wrap');
			} else {
				myFolio.hideCat($('.cat'));
				myFolio.showCat(selector);
				myFolio.addArticleView('.footer-actions-wrap');
			}			

		},



		postNav: function(e) {
			var oldCat = e.closest('.cat'),
				oldPos = oldCat.data('postindex'),
				newData = myFolio.setCurrentPost( e.data('dir'), e ),
				newPos = newData[0],
				newCat = newData[1];

			oldCat.find('.post').eq(oldPos).slideUp();

			if (newCat === 0 || newCat) {
				myFolio.hideCat(oldCat);
				myFolio.cats.eq(newCat).addClass('cat-expanded');
				myFolio.cats.eq(newCat).find('.post').eq(newPos).slideDown();							
			} else {
				oldCat.find('.post').eq(newPos).slideDown();
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
		}

	};

	//
	// HANDLERS
	//


	$('.cat-btn').on('click', function() {
		var $this = $(this);

		myFolio.toggleCat($this.closest('.cat'));

	});


	$('.button-big-post').on('click', function() {
		myFolio.postNav($(this));
	});

	return myFolio;

}(jQuery));




	// MISC FUNCTIONS

	// Lazy Load
	// $(function() {
	// 	$('.lazy').lazyload({
	// 		event : 'loadSet'
	// 	});
	// });

	// fastclick. No need for double-taps on the page
	// if( $('html').hasClass('touch') ){
	// 	window.addEventListener('load', function() {
	// 		FastClick.attach(document.body);
	// 	}, false);
	// }


