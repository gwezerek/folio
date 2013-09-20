(function($) {

    $(function() {
        // $('.post-wrap').
    });

    $('.lazy').lazyload({

    });


    // ON READY

    // Load first image of each set




    // ON CATEGORY EXPAND
    // EXAMPLE WITH CURRENT CLASS

    $('.cat-btn').on('click', function() {
        var $this = $(this),
            wrap = $(this).siblings('.post-wrap');

        if ($this.hasClass('cat-expand')) {
            wrap.toggleClass('post-wrap-collapsed');
            $this.toggleClass('cat-expand');
            wrap.find('.current').slideDown();
        } else {
            wrap.find('.post').slideUp();
            $this.toggleClass('cat-expand');
            setTimeout(function() {
                wrap.toggleClass('post-wrap-collapsed')
            }, 300);
        }
    });

    $('.cat-btn-inside').on('click', function() {
        var $this = $(this),
            wrap = $this.closest('.post-wrap');

        $this.closest('.post').slideUp();
        setTimeout(function() {
            wrap.toggleClass('post-wrap-collapsed')
        }, 300);
    });


    // ON NEXT CLICK

    $('.post-nav').on('click', function() {
    	var post = $(this).closest('.post');

        post.hide().removeClass('current');

        if ($(this).hasClass('post-prev')) {
            post.prev().show().addClass('current');
        } else {
            post.next().show().addClass('current');
        }
    });



    // EXAMPLE WITH INDEX VAR

    // $('.cat').each(function(index, val) {
    // 	var postLen = $('.posts').length,
    // 		current = 1;

    // 	$('.cat-btn').on('click', function() {
    // 		var $this 	= $(this),
    // 			wrap 	= $(this).siblings('.post-wrap');
    // 			// wrapValue 	= wrap.data('index');

    // 		if ($this.hasClass('cat-expand')) {
    // 			wrap.toggleClass('post-wrap-collapsed');
    // 			$this.removeClass('cat-expand');
    // 			wrap.find('.post').filter('[data-index='+current+']').slideDown();
    // 			console.log('h');
    // 		} else {
    // 			// wrap.find('.post').slideUp();
    // 			// $this.toggleClass('cat-expand');
    // 			// console.log(current);
    // 			// setTimeout (function(){
    // 			// 	wrap.toggleClass('post-wrap-collapsed')
    // 			// }, 300);
    // 		}
    // 	});

    // 	// console.log($('post-nav'));

    // 	$('.post-nav').on('click', function() {
    // 		var  wrap = $(this).siblings('.post-wrap');

    // 			$(this).closest('.post').hide();

    // 		if ($(this).hasClass('post-prev')) {
    // 			$(this).closest('.post').prev().show();
    // 			wrap.data("index");
    // 			current --;
    // 		} else {
    // 			$(this).closest('.post').next().show();
    // 			current ++;
    // 		}
    // 	});

    // }


})(jQuery);
