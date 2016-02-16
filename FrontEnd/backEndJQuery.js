$(document).ready(function() {
	$("#passField").click(function(){
		console.log("test");
		console.log($(this).val());
		var passLength = $(this).val();
		if (passLength <= 5) {
			console.log("too short");
			$(this).css("border-color", "#FF0000");
		} else {
			$(this).css("border-color", "#0000FF");
		}
	})
});