

// Definitely a work in progress. Functions here are tightly coupled
// and scope inelegance means I'm passing $(this) as an arg a lot	


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

		setCurrentPost: function(dir, e) {
			var cat = e.closest('.cat'),
				dir = e.data('dir'),
				pos = cat.data('postindex'),		
				newPos = "0";

			pos += ((dir === 'prev') ? -1 : ~~( dir === 'next' ));

			// newPos += (( pos < 0 ) ? 4 : 0));
			// Flesh out if/else not to loop, but to hideCat, set catDir and run setCurrentCat, showCat

			cat.data('postindex', pos);			
			console.log(pos); 

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

		postNav: function(e) {
			myFolio.setCurrentPost( e.data('dir'), e );
			// oldPost.hide();	
			// newPost.show();
		},

		// I shouldn't be using e here, proper scope would fix this

		showCat: function(e) {
			var currentCat = e.closest('.cat');
				
			currentCat.addClass('cat-expanded');
			currentCat.find('.post').eq(currentCat.data('postindex')).slideDown();
			myFolio.addArticleView('.footer-actions-wrap');

			myFolio.catList.data('postIndex', $.inArray(myFolio.cats, currentCat));			
		},

		hideCat: function(e) {
			var currentCat = e.closest('.cat');


			currentCat.removeClass('cat-expanded')
			currentCat.find('.post').eq(currentCat.data('postindex')).hide()

			myFolio.removeArticleView('.footer-actions-wrap');
		},

		toggleCat: function(e) {

			if (e.closest('.cat').hasClass('cat-expanded')) {
				myFolio.hideCat(e);
			} else {
				myFolio.showCat(e);
			}			

		}
	};

	//
	// HANDLERS
	//


	$('.cat-btn').on('click', function() {
		myFolio.toggleCat($(this));
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


