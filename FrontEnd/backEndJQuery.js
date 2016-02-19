$(document).ready(function() {

	var MIN_PASS_LENGTH 	= 6;
	var INVALID_PASS_CHAR 	= " ! @ £ # $ % ^ & * ( ) { }";

	document.addEventListener("keydown", KeyCheck);
	function KeyCheck(event) {
	   var KeyID = event.keyCode;
	   switch(KeyID) {
	      case 8:
	      	$.proxy(passCheckDel, $('#passField'))();
	      	break; 
	      default:
	      	break;
	   }
	};

	$("#passField").keypress(function(){
		console.log("test");
		$.proxy(passCheck, $('#passField'))();
	});

	function passCheck() {
		var passVal = $(this).val() + String.fromCharCode(event.keyCode);
		var passLength = passVal.length;
		console.log(passVal);
		console.log(passLength);
		$("#errorSpan").remove();
		for (var i = 0; i < INVALID_PASS_CHAR.length; i++) {
			if (passVal.indexOf(INVALID_PASS_CHAR[i * 2]) > -1 ) {
				$(this).after("<div id=\"errorSpan\"> Password cannot contain " + INVALID_PASS_CHAR + "</div>");
				return;
			}
		}
		if (passLength <= 5) {
			$(this).css("border-color", "#FF0000");
			$(this).css("border-style", "solid");
			$(this).css("border-width", "5px");
			$(this).after("<div id=\"errorSpan\"> Password must be at least 6 characters long </div>")
		} else {
			$(this).css("border-color", "#00FF00");
			$(this).css("border-style", "#FF0000");
			$(this).css("border-width", "5px");
		}
	};

	function passCheckDel() {
		var passLength = $(this).val().length - 1;
		var passVal = $(this).val().substring(0, passLength);
		console.log(passVal);
		console.log(passLength);
		if (passLength <= 5) {
			$("#errorSpan").remove();
			$(this).css("border-color", "#FF0000");
			$(this).css("border-style", "solid");
			$(this).css("border-width", "5px");
		} else {
			$("#errorSpan").remove();
			$(this).css("border-color", "#00FF00");
			$(this).css("border-style", "#FF0000");
			$(this).css("border-width", "5px");
		}
	};
});