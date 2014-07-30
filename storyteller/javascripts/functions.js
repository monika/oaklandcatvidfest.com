$(window).load(function(){

	// FAQ Toggle Answers
	$('#faq h2').each(function() {

		var question = $(this);
		var open = false;
		var answer = question.nextUntil('h2').hide().css('height','auto').slideUp();

		question.click(function() {

			open = !open;
			answer.slideToggle();
			question.toggleClass('open', open);

		});

	});

	// Sticky Navigation
	$('.navigation').waypoint(function(){

		$(this).toggleClass('sticky');

	});

	$('.responsive-video').liquidFrame();

});
