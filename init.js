$(document).ready(function(){
	$("div:last").css("display", "none");
		$('.tlt').textillate({
		in: { effect: 'rollIn', delay:20},
		out: { effect:'rollOut'},
		loop: true
	});	
});

/*$('.triCon').hover(function(){
  $(this).addClass('magictime puffin');
});	


*/