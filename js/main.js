	

;(function($) {


	var layout = (function() {

		var addGrid = function (selector) {
			$(selector).addClass('grid');
		},
		removeGrid = function (selector) {
			$(selector).removeClass('grid');
		},
		addArticleView = function (selector) {
			$(selector).addClass('article-view');
		},
		removeArticleView = function (selector) {
			$(selector).removeClass('article-view');
		};		

		return {
			addGrid: addGrid,
			removeGrid: removeGrid,
			addArticleView: addArticleView,
			removeArticleView: removeArticleView
		};

	})();


	// ON CATEGORY EXPAND

	// Expand the first post and post wrapper
	// Can I use an .on selector to combine these two functions?

	$('.cat-btn').on('click', function() {
		var $this 	= $(this),
			wrap 	= $(this).siblings('.post-wrap');

		if ($this.hasClass('cat-expand')) {					// if collapsed, expand
			$this.closest('.cat').toggleClass('expanded');
			$this.toggleClass('cat-expand');
			wrap.toggleClass('post-wrap-collapsed');
			wrap.find('.current').slideDown();
			wrap.find('.lazy').trigger('loadSet');
			layout.addArticleView('.footer-actions-wrap');
		} else {											// if expanded, collapsed
			$this.closest('.cat').toggleClass('expanded');
			wrap.find('.post').slideUp();
			$this.toggleClass('cat-expand');
			setTimeout (function(){
				wrap.toggleClass('post-wrap-collapsed')
			}, 300);
			layout.removeArticleView('.footer-actions-wrap');
		}
	});

	$('.cat-btn-inside').on('click', function() {
		var $this = $(this);

			$this.closest('.post').slideUp();
			$this.closest('.cat').find('.cat-btn-outside').addClass('cat-expand');
			setTimeout (function(){
				$this.closest('.post-wrap').toggleClass('post-wrap-collapsed')
			}, 300);
	});

	// ON NEXT CLICK

	$('.button-big-post').on('click', function() {
		var post = $(this).closest('.post');

			// $(this).closest('.post').hide();
			
		if ($(this).hasClass('post-prev')) {
			if (post.data('index') === 1) {
				return;
			} else {
				post.hide().removeClass('current');
				post.prev().show().addClass('current');
			}
		} else {
			if (post.data('index') === 5) {
				return;
			} else {
				post.hide().removeClass('current');
				post.next().show().addClass('current');
			}
		}
	});



	// Simple State Manager
	// ssm.addStates([
	// 	{
	// 		id: 'small',
	// 		minWidth: 0,
	// 		maxWidth: 450,
	// 		onEnter: function() {
	// 			layout.removeGrid('.js-category-list');
	// 		},
	// 		onLeave: function() {
	// 			console.log('Leaving small');
	// 		}
	// 	}, 
	// 	{
	// 		id: 'medium',
	// 		minWidth: 450,
	// 		maxWidth: 960,
	// 		onEnter: function() {
	// 			layout.addGrid('.js-category-list');
	// 		},
	// 		onLeave: function() {
	// 			console.log('Leaving med');
	// 		}			
	// 	},
	// 	{
	// 		id: 'large',
	// 		minWidth: 960,
	// 		onEnter: function() {
	// 			layout.addGrid('.js-category-list');			
	// 		},
	// 		onLeave: function() {
	// 			console.log('Leaving large');
	// 		}			
	// 	}
	// ]).ready();


	// });		

	// ssm.addState({
	// 	id: 'large',
	// 	minWidth: 960,
	// 	onEnter: function() {
	// 		layout.addGrid('.js-category-list');			
	// 	},
	// 	onLeave: function() {
	// 		console.log('Leaving large' );
	// 	}
	// });

	// ssm.ready();


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



