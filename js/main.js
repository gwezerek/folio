	

var FOLIO = (function($) {
	
	'use strict';

	var myFolio = {

		catList: $('.cat-list'),
		cats: $('.cat'),
		postsLength: 5,					
		currentPost: 0,
		currentCat: 0,

		getCatLength: function() {
			return (myFolio.cats.length);
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

		setCurrentPost: function(dir) {
			var pos = $(this).data('postIndex'),		// needs real targeting
				newPos = '';

			pos += ( ~~( dir === 'next' ) ? (dir === 'prev') : -1);

			// newPos = ( pos < 0 ) ? 5 - 1 : pos % 5);				
			// Flesh out if/else not to loop, but to hideCat, set catDir and run setCurrentCat, showCat

			console.log(newPos); 
			$(cat).data('postIndex', newPos);			// needs real targeting

			return pos;
		},

		setCurrentCat: function() {
			var pos = $(this).data('catIndex'),		// needs real targeting
				catsLength = myFolio.getCatLength();
		 
			pos += ( ~~( catDir === 'nextCat' ) ? ( catDir === 'prevCat' ) : -1);

			// var newPos = ( pos < 0 ) ? catsLength - 1 : pos % catsLength);
			$('.cat-list').data('catIndex', newPos);			// needs real targeting

			return pos;
		},

		postNav: function() {
			myFolio.setCurrentPost( $(this).data('dir') );
			oldPost.hide();	
			newPost.show();
		},

		// Combine next two functions with Toggle, move toggleArticleView outside of function?

		showCat: function() {
			var $this = $(this),
				currentCat = $this.closest('.cat');
				console.log(this);
				
			currentCat.addClass('cat-expanded');
			$this.find('.post').eq(currentCat.data('postindex')).slideDown();
			myFolio.addArticleView('.footer-actions-wrap');

			myFolio.catList.data('postIndex', $.inArray(myFolio.cats, currentCat));			
		},

		hideCat: function() {
			var $this = $(this),
				currentCat = $('.cat');
				
			currentCat.removeClass('cat-expanded');
			$this.find('.post').eq(currentCat.data('postIndex')).slideUp();
			myFolio.removeArticleView('.footer-actions-wrap');
		},

		toggleCat: function() {

			if ($(this).closest('.cat').hasClass('cat-expanded')) {
				myFolio.hideCat();
			} else {
				myFolio.showCat();
			}			

		}
	};

	//
	// HANDLERS
	//


	$('.cat-btn').on('click', function() {
		FOLIO.toggleCat();
	});

	// $('.button-big-post').on('click', function() {
	// 		$(this).closest('.post').hide();
	// });

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


