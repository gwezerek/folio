
(function($) {

	$(function() {
		// $('.post-wrap').
	});
	
	$('.lazy').lazyload({
		
	});


	// ON READY

	// Load first image of each set




	// ON CATEGORY EXPAND

	// Expand the first post and post wrapper
	// $('.cat-expand').on('click', function() {
	// 	var $this = $(this),
	// 		wrap = $(this).siblings('.post-wrap-collapsed');

	// 	wrap.removeClass('post-wrap-collapsed').addClass('post-wrap-expanded');
	// 	wrap.find('.post-collapsed').removeClass('post-collapsed').addClass('post-expanded');
	// 	$this.removeClass('cat-expand').addClass('cat-collapse');
	// 	console.log($('.cat-collapse'));
	// });

	$('.cat-btn').on('click', function() {
		var $this = $(this),
			wrap = $(this).siblings('.post-wrap');
			// wrapExpanded = $(this).siblings('.post-wrap-expanded');

		if ($this.hasClass('cat-expand')) {
			wrap.toggleClass('post-wrap-collapsed');
			wrap.find('.post').toggleClass('post-collapsed');
			$this.toggleClass('cat-expand');
		} else {

		}

		// wrap.removeClass('post-wrap-collapsed').addClass('post-wrap-expanded');
		// wrap.find('.post-collapsed').removeClass('post-collapsed').addClass('post-expanded');
		// $this.removeClass('cat-expand').addClass('cat-collapse');
		// console.log($('.cat-collapse'));
	});

	// Load all images in set

	// Change cat-expand button to cat-collapse





	// ON CATEGORY CLOSE

	// Add .post-collapsed to current post
	// $('.cat-collapse').on('click', function() {
	// 	var $this = $(this),
	// 		wrap = $(this).siblings('.post-wrap-expanded');

	// 	wrap.removeClass('post-wrap-expanded').addClass('post-wrap-collapsed');
	// 	wrap.find('.post-expanded').removeClass('post-expanded').addClass('post-collapsed');
	// 	$this.removeClass('cat-collapse').addClass('cat-expand');
	// });

	// Change category-collapse button to category-expand


	// ON NEXT CLICK

	// Add .post-collapsed to current .post

	// Remove .post-collapsed from next .post

	// On last post, run on category expand for next category



})(jQuery);