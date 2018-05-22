$(document).ready(function(){
	$("div:last").css("display", "none");
		$('.tlt').textillate({
		in: { effect: 'rollIn', delay:20}
	});

	$(".modais").iziModal({ history: false, iframe : true, fullscreen: true, loop: true, zindex: 99999, focusInput: true });	

});

/*$('.triCon').hover(function(){
  $(this).addClass('magictime puffin');
});	


*/