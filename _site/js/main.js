	

// var folio_page_state = 'small';


;(function($) {

	// $('.header-title').fitText();

	// $('.header-title').bigtext();

	// Lazy Load
	$(function() {          
	    $('.lazy').lazyload({
	        event : "loadSet"
	    });
	});



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
		} else {											// if expanded, collapsed
			$this.closest('.cat').toggleClass('expanded');
			wrap.find('.post').slideUp();
			$this.toggleClass('cat-expand');
			setTimeout (function(){
				wrap.toggleClass('post-wrap-collapsed')
			}, 300);
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

	// Load all images in set


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

	// Add .post-collapsed to current .post

	// Remove .post-collapsed from next .post

	// On last post, run on category expand for next category

			console.log('Leaving small' );


	ssm.addState({
		id: 'small',
		maxWidth: 600,
		onEnter: function() {
			folio_page_state = 'small';
		},
		onLeave: function() {
			// null
			console.log('Leaving small' );
		}
	});

	ssm.addState({
		id: 'medium',
		minWidth: 600,
		maxWidth: 960,
		onEnter: function() {
			folio_page_state = 'medium';
		},
		onLeave: function() {
			// null
							console.log('Leaving med' );

		}
	});		

	ssm.addState({
		id: 'large',
		minWidth: 960,
		onEnter: function() {
			folio_page_state = 'large';
		},
		onLeave: function() {
			// null
							console.log('Leaving large' );

		}
	});

	ssm.ready();
							console.log('Woop' );

	// fastclick. No need for double-taps on the page
	if( $('html').hasClass('touch') ){
		window.addEventListener('load', function() {
		    FastClick.attach(document.body);
		}, false);
	}


})(jQuery);



