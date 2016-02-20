$(document).ready(function() {

	var MIN_PASS_LENGTH 	= 6;
	var INVALID_PASS_CHAR 	= " ! @ £ # $ % ^ & * ( ) { }";

	var ERROR_MSG_1 = "Password must be at least 6 characters long"
	var ERROR_MSG_2 = "Passwords cannot contain" + INVALID_PASS_CHAR;

	var keyPressed;

	var eventClickedId;

	document.addEventListener("keydown", keyCheck);
	function keyCheck(event) {
		if (event.keyCode === 8) {
			keyPressed = 8;
			$.proxy(passFieldCheck, this)();
		}
	}

	$(document).click(function(event){
		if ($(event.target).attr('id')){
			eventClickedId = $(event.target).attr('id');
		} else {
			eventClickedId = "null";
		}
	})

	$("#passField").keypress(function(){
		keyPressed = event.keyCode;
		$.proxy(passFieldCheck, this)();
	});
	
	function passFieldCheck() {
		console.log(keyPressed);
		var passVal;
		if (keyPressed === 8) {
			passVal = $("#" + eventClickedId).val().substring(0, $("#" + eventClickedId).val().length - 1);
		} else {
			passVal = $(this).val() + String.fromCharCode(event.keyCode);
		}
		var passLength = passVal.length;
		$("#errorSpan").remove();
		for (var i = 0; i < INVALID_PASS_CHAR.length; i++) {
			if (passVal.indexOf(INVALID_PASS_CHAR[i * 2]) > -1 ) {
				$('#passField').after("<div id=\"errorSpan\">" + ERROR_MSG_2 + "</div>");
				return;
			}
		}
		if (passLength <= 5) {
			$('#passField').css("border-color", "#FF0000");
			$('#passField').css("border-style", "solid");
			$('#passField').css("border-width", "5px");
			$('#passField').after("<div id=\"errorSpan\">" + ERROR_MSG_1 + "</div>")
		} else {
			$('#passField').css("border-color", "#00FF00");
			$('#passField').css("border-style", "#FF0000");
			$('#passField').css("border-width", "5px");
		}
	}
});