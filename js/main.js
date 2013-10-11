	

;(function($) {


	var site = (function() {

		var catList = $('.cat-list'),
			cats = catList.find('.cat'),
			catsLength = cats.length,
			postsLength = 5,					
			currentPost = 0,
			currentCat = 0;


		function addGrid(selector) {
			$(selector).addClass('grid');
		}

		function removeGrid(selector) {
			$(selector).removeClass('grid');
		}

		function addArticleView(selector) {
			$(selector).addClass('article-view');
		}

		function removeArticleView(selector) {
			$(selector).removeClass('article-view');
		}

		function setCurrentPost(dir) {
			var pos = $(this).data("postIndex");		// needs real targeting

			pos += ( ~~( dir === 'next' ) ? (dir === 'prev') : -1 : 0);

			var newPos = ( pos < 0 ) ? postsLength - 1 : pos % postsLength;				
			// Flesh out if/else not to loop, but to hideCat, set catDir and run setCurrentCat, showCat 
			$(cat).data("postIndex", newPos)			// needs real targeting

			return pos;
		}

		function setCurrentCat() {
			var pos = $(this).data("catIndex");		// needs real targeting
		 
			pos += ( ~~( catDir === 'nextCat' ) ? ( catDir === 'prevCat' ) : -1 : 0 );

			var newPos = ( pos < 0 ) ? catsLength - 1 : pos % catsLength;
			$('.cat-list').data("catIndex", newPos)			// needs real targeting

			return pos;
		}

		// Combine next two functions with Toggle, move toggleArticleView outside of function?

		function showCat() {
			var $this = $(this);			

			$this.closest('.cat').addClass('expanded');
			$this.find('.post').eq(currentCat.data("postIndex")).slideDown();
			site.addArticleView('.footer-actions-wrap');

			catList.data("postIndex", $.inArray(cats, currentCat));			
		}

		function hideCat() {
			var $this = $(this);
				
			$this.closest('.cat').removeClass('expanded');
			$this.find('.post').eq(currentCat.data("postIndex")).slideUp();
			site.removeArticleView('.footer-actions-wrap');
		}				

		function postNav() {
			var $this = $(this);

			site.setCurrentPost( $(this).data('dir') );
			oldPost.hide();	
			newPost.show();

		}					

		return {
			addGrid: addGrid,
			removeGrid: removeGrid,
			addArticleView: addArticleView,
			removeArticleView: removeArticleView,
			setCurrentPost: setCurrentPost,
			setCurrentCat: setCurrentCat,
			hideCat: hideCat,
			showCat: showCat,
			postNav: postNav
		};

	})();



	$('.cat-btn').on('click', function() {
		var $this 	= $(this),
			wrap 	= $(this).siblings('.post-wrap');

			if ($this.closest('.cat').hasClass('expanded')) {
				site.hideCat();
			} else {
				site.showCat;
			}			
	});


	$('.button-big-post').on('click', function() {
		var post = $(this).closest('.post');

			// $(this).closest('.post').hide();
			
	});


	// MISC FUNCTIONS

	// Lazy Load
	$(function() {          
	    $('.lazy').lazyload({
	        event : "loadSet"
	    });
	});

	// fastclick. No need for double-taps on the page
	if( $('html').hasClass('touch') ){
		window.addEventListener('load', function() {
		    FastClick.attach(document.body);
		}, false);
	}


})(jQuery);



