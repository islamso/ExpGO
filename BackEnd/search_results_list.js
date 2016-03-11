$(document).ready(function() {

	$('.content-section').click(function() {
		$(this).find('.container-fluid').toggle(1000);
	});

	$('.panel').click(function() {
		$(this).parent().find('.panel-body').toggle(500);
	});
});