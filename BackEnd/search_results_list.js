$(document).ready(function() {
	$('.view-more').click(function() {
		$(this).parent().find('.list-group-item-text').toggle(500);
	});
});