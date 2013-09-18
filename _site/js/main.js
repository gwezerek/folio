
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
	$('.cat-expand').on('click', function() {
		var wrap = $(this).siblings('.post-wrap-collapsed');

		wrap.removeClass('post-wrap-collapsed');
		wrap.find('.post-collapsed').removeClass('post-collapsed');
	});

	// Load all images in set

	// Change cat-expand button to cat-collapse





	// ON CATEGORY CLOSE

	// Add .post-collapsed to current post

	// Change category-collapse button to category-expand


	// ON NEXT CLICK

	// Add .post-collapsed to current .post

	// Remove .post-collapsed from next .post

	// On last post, run on category expand for next category



})(jQuery);