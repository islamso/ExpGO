$(document).ready(function() {
	document.addEventListener("keydown", KeyCheck);
	function KeyCheck(event) {
	   var KeyID = event.keyCode;
	   switch(KeyID) {
	      case 8:
	      	passCheck();
	      	break; 
	      default:
	      	break;
	   }
	};

	$("#passField").keypress(function(){
		console.log("test");
		passCheck();
		// var passLength = $(this).val().length;
		// if (passLength <= 5) {
		// 	$(this).css("border-color", "#FF0000");
		// 	$(this).css("border-style", "solid");
		// 	$(this).css("border-width", "5px");
		// } else {
		// 	$(this).css("border-color", "#00FF00");
		// 	$(this).css("border-style", "#FF0000");
		// 	$(this).css("border-width", "5px");
		// }
	});

	function passCheck() {
		var passLength = $(this).val().length;
		if (passLength <= 5) {
			$(this).css("border-color", "#FF0000");
			$(this).css("border-style", "solid");
			$(this).css("border-width", "5px");
		} else {
			$(this).css("border-color", "#00FF00");
			$(this).css("border-style", "#FF0000");
			$(this).css("border-width", "5px");
		}
	};
});