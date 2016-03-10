$(document).ready(function() {

	$('.content-section').click(function() {
		$(this).toggle(1000);
		console.log(this);
	});
});