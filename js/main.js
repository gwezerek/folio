
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

	$('.cat-btn').on('click', function() {
		var $this 	= $(this),
			wrap 	= $(this).siblings('.post-wrap'),
			wrapValue = wrap.data('index');

		if ($this.hasClass('cat-expand')) {
			wrap.toggleClass('post-wrap-collapsed');
			$this.toggleClass('cat-expand');
			wrap.find('.post[data-index='+wrapValue+']').slideDown();
		} else {
			wrap.find('.post').slideUp();
			$this.toggleClass('cat-expand');
			setTimeout (function(){
				wrap.toggleClass('post-wrap-collapsed')
			}, 300);
		}

	});

	$('.cat-btn-inside').on('click', function() {
		var $this 	= $(this),
			wrap 	= $this.closest('.post-wrap');

			$this.closest('.post').slideUp();
			$this.closest('.cat').find('.cat-btn-outside').addClass('cat-expand');
			setTimeout (function(){
				wrap.toggleClass('post-wrap-collapsed')
			}, 300);
	});

	// Load all images in set



	// ON NEXT CLICK

	$('.post-nav').on('click', function() {
		var  wrap 	= $(this).siblings('.post-wrap'),
			wrapValue = wrap.data('index');
			// wrapExpanded = $(this).siblings('.post-wrap-expanded');

			// console.log($this.closest('.post'));
			$(this).closest('.post').hide();


			// $(this).closest('.post').next().show();



		if ($(this).hasClass('post-prev')) {
			$(this).closest('.post').prev().show();
		} else {
			$(this).closest('.post').next().show();
		}

	});

	// Add .post-collapsed to current .post

	// Remove .post-collapsed from next .post

	// On last post, run on category expand for next category



})(jQuery);