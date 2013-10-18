

// Definitely a work in progress. Functions here are tightly coupled
// and scope inelegance means I'm passing $(this) as an arg a lot	


var FOLIO = (function($) {
	
	'use strict';

	var myFolio = {

		catList: $('.cat-list'),
		cats: $('.cat'),
		posts: $('.post'),
		postsLength: 5,					
		currentPost: 0,
		currentCat: 0,

		getCatLength: function() {
			return (myFolio.cats.length);
		},
		getPostsLength: function() {
			return (myFolio.cats.first().find('.post').length);
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

		setCurrentPost: function(dir, e) {
			var currentCat = e.closest('.cat'),
				postLength = myFolio.getPostsLength(),
				dir = e.data('dir'),
				pos = currentCat.data('postindex'),
				newCatIndex = '',		
				newPos = '';

			pos += ((dir === 'prev') ? -1 : ~~( dir === 'next' ));

			if (pos < 0) {
				newPos = postLength - 1;
				newCatIndex = myFolio.setCurrentCat(e);
			} else {
				newPos = pos % postLength;
			}

			currentCat.data('postindex', newPos);			

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

		postNav: function(e) {
			var currentCat = e.closest('.cat'),
				oldPos = currentCat.data('postindex'),
				newData = myFolio.setCurrentPost( e.data('dir'), e ),
				newPosition = newData[0],
				newCatIndex = newData[1];

			currentCat.find('.post').eq(oldPos).slideUp();

			if (newCatIndex) {
				myFolio.hideCat(currentCat);
				myFolio.cats.eq(newCatIndex).addClass('cat-expanded');
				myFolio.cats.eq(newCatIndex).find('.post').first().slideDown();
				
				console.log('hello1');
				
				return;

			} else {
				console.log(currentCat.find('.post'));
				currentCat.find('.post').eq(newPosition).slideDown();
			}

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

		toggleCat: function(e, selector) {

			if (selector.hasClass('cat-expanded')) {
				myFolio.hideCat(selector);
				myFolio.removeArticleView('.footer-actions-wrap');
			} else {
				myFolio.hideCat($('.cat'));
				myFolio.showCat(selector);
				myFolio.addArticleView('.footer-actions-wrap');
			}			

		}
	};

	//
	// HANDLERS
	//


	$('.cat-btn').on('click', function() {
		var $this = $(this);

		myFolio.toggleCat($this, $this.closest('.cat'));

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


