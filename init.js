$(document).ready(function(){
	$("div:last").css("display", "none");
		$('.tlt').textillate({
		in: { effect: 'rollIn', delay:20},
		out: { effect:'rollIn'},
		loop: true
	});	
});

$('.hexagono1').click(function(){
  $(this).addClass('HexBig')
});	

