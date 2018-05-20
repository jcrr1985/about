// JavaScript Document

/*number count effect open*/

$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {
    duration: 1800,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      $(".numbers").text("200,000");
    }
  });
});
			
			$(".team").on('click',function() {
				console.log('xx');
    $('html, body').animate({
        'scrollTop' : $(".team-container").position().top
    },1000,"linear");
});
/*number count effect close*/


(function($) {
            'use strict';
            window.sr = new scrollReveal({
                reset: true,
                move: '50px',
                mobile: false
            });

        })();