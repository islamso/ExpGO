$(document).ready(function() {

	var MIN_PASS_LENGTH 	= 6;
	var INVALID_PASS_CHAR 	= " ! @ £ # $ % ^ & * ( ) { }";

	var ERROR_MSG_1 = "Password must be at least 6 characters long";
	var ERROR_MSG_2 = "Passwords cannot contain" + INVALID_PASS_CHAR;
	var ERROR_MSG_3 = "Passwords do not match";
	var ERROR_MSG_4 = "Invalid e-mail address";
	var ERROR_MSG_5 = "Invalid phone number";
	var ERROR_MSG_6 = "Field cannot be left blank";

	var keyPressed;

	var eventClickedId;

	document.addEventListener("keydown", keyCheck);
	function keyCheck(event) {
		if (event.keyCode === 8) {
			keyPressed = 8;
			switch (eventClickedId) {
				case "passField":
					$.proxy(passFieldCheck, this)();
					break;
				case "confirmPassField":
					$.proxy(confirmPassFieldCheck, this)();
					break;
				case "emailField":
					$.proxy(emailFieldCheck, this)();
					break;
				case "phoneField":
					$.proxy(phoneFieldCheck, this)();
					break;
				default:
					break;
			}
		}
	}

	$(document).click(function(event){
		if ($(event.target).attr('id')){
			eventClickedId = $(event.target).attr('id');
		} else {
			eventClickedId = "null";
		}
		console.log(eventClickedId);
	});

	$("#passField").keypress(function() {
		keyPressed = event.keyCode;
		$.proxy(passFieldCheck, this)();
	});

	$("#confirmPassField").keypress(function() {
		keyPressed = event.keyCode;
		$.proxy(confirmPassFieldCheck, this)();
	});

	$("#emailField").keypress(function() {
		keyPressed = event.keyCode;
		$.proxy(emailFieldCheck, this)();
	});

	$("#phoneField").keypress(function() {
		keyPressed = event.keyCode;
		$.proxy(phoneFieldCheck, this)();
	});
	
	function emailFieldCheck() {
		var emailVal;
		$("#emailErrDiv").remove();
		if (keyPressed === 8) {
			emailVal = $("#" + eventClickedId).val().substring(0, $("#" + eventClickedId).val().length - 1);
		} else {
			emailVal = $("#" + eventClickedId).val() + String.fromCharCode(event.keyCode);
		}
		if (emailVal === "") {
			$("#" + eventClickedId).after("<div id=\"emailErrDiv\">" + ERROR_MSG_6 + "</div>");
			displayErrorField();
			return;
		} else if (emailVal.indexOf('@') === -1 || emailVal.indexOf('.') === -1 ) {
			$("#" + eventClickedId).after("<div id=\"emailErrDiv\">" + ERROR_MSG_4 + "</div>");
			displayErrorField();
		} else {
			displayValidField();
		}
	};

	function phoneFieldCheck() {
		var phoneVal;
		$("#phoneErrDiv").remove();
		if (keyPressed === 8) {
			phoneVal = $("#" + eventClickedId).val().substring(0, $("#" + eventClickedId).val().length - 1);
		} else {
			phoneVal = $("#" + eventClickedId).val() + String.fromCharCode(event.keyCode);
		}
		if (phoneVal === "") {
			$("#" + eventClickedId).after("<div id=\"phoneErrDiv\">" + ERROR_MSG_6 + "</div>");
			displayErrorField();
			return;
		} else if (isNaN(phoneVal.split(' ').join(''))) {
			$("#" + eventClickedId).after("<div id=\"phoneErrDiv\">" + ERROR_MSG_5 + "</div>");
			displayErrorField();
		} else {
			displayValidField();
		}
	}

	function passFieldCheck() {
		var passVal;
		if (keyPressed === 8) {
			passVal = $("#" + eventClickedId).val().substring(0, $("#" + eventClickedId).val().length - 1);
		} else {
			passVal = $("#" + eventClickedId).val() + String.fromCharCode(event.keyCode);
		}
		var passLength = passVal.length;
		$("#errorSpan").remove();
		if (passVal === "") {
			$("#" + eventClickedId).after("<div id=\"errorSpan\">" + ERROR_MSG_6 + "</div>");
			displayErrorField();
			return;
		}
		for (var i = 0; i < INVALID_PASS_CHAR.length; i++) {
			if (passVal.indexOf(INVALID_PASS_CHAR[i * 2]) > -1 ) {
				$("#" + eventClickedId).after("<div id=\"errorSpan\">" + ERROR_MSG_2 + "</div>");
				displayErrorField();
				return;
			}
		}
		if (passLength <= 5) {
			displayErrorField();
			$("#" + eventClickedId).after("<div id=\"errorSpan\">" + ERROR_MSG_1 + "</div>");
		} else {
			displayValidField();
		}
	};

	function confirmPassFieldCheck() {
		$("#confErrDiv").remove();
		var passVal = $("#passField").val();
		var confirmPassVal;
		if (keyPressed === 8) {
			confirmPassVal = $("#confirmPassField").val().substring(0, $("#confirmPassField").val().length - 1);
		} else {
			confirmPassVal = $("#confirmPassField").val() + String.fromCharCode(event.keyCode);
		}
		if (confirmPassVal === "") {
			$("#" + eventClickedId).after("<div id=\"confErrDiv\">" + ERROR_MSG_6 + "</div>");
			displayErrorField();
			return;
		} else if (passVal !== confirmPassVal) {
			displayErrorField();
			$("#" + eventClickedId).after("<div id=\"confErrDiv\">" + ERROR_MSG_3 + "</div>");
		} else {
			displayValidField();
		}
	};

	function displayErrorField() {
		$("#" + eventClickedId).css("border-color", "#FF0000");
		$("#" + eventClickedId).css("border-style", "solid");
		$("#" + eventClickedId).css("border-width", "5px");
	};

	function displayValidField() {
		$("#" + eventClickedId).css("border-color", "#00FF00");
		$("#" + eventClickedId).css("border-style", "#FF0000");
		$("#" + eventClickedId).css("border-width", "5px");
	};
});

function store_business_info() {
	var data = [];
	var errorMsg = "";
	data.push(document.forms["businessForm"]["cName"].value); 		// 0
	data.push(document.forms["businessForm"]["email"].value); 		// 1
	data.push(document.forms["businessForm"]["phone"].value); 		// 2
	data.push(document.forms["businessForm"]["admin"].value); 		// 3
	data.push(document.forms["businessForm"]["pass"].value); 		// 4
	data.push(document.forms["businessForm"]["confirmPass"].value); // 5
	data.push(document.forms["businessForm"]["address"].value); 	// 6
	data.push(document.forms["businessForm"]["address2"].value); 	// 7
	data.push(document.forms["businessForm"]["industry"].value); 	// 8
	data.push(document.forms["businessForm"]["bio"].value); 		// 9
	console.log(data);
}