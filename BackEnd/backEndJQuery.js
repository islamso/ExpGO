var validity = false;

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

	var formValid = {};

	var currentForm;
	if (this.title === "Business Sign Up") {
		currentForm = document.forms["businessForm"];
		formValid["address2Field"] = true;
		formValid["industryField"] = true;
		formValid["bioField"] = true;
	} else if (this.title === "Student Sign Up") {
		currentForm = document.forms["studentForm"];
		formValid["collegeField"] = true;
		formValid["yearField"] = true;
	}
	var formFields = [];
	for (var i = 1; i < currentForm.length - 1; i++) {
		var idName = currentForm[i]['id'];
		formFields.push(idName);
		if (!formValid[idName]) formValid[idName] = false;
	}
	console.log(formFields);

	document.addEventListener("keydown", keyCheck);
	function keyCheck(event) {
		if (event.keyCode === 8) {
			keyPressed = 8;
			switch (eventClickedId) {
				case "passField":
					formValid[eventClickedId] = $.proxy(passFieldCheck, this)();
					break;
				case "confirmPassField":
					formValid[eventClickedId] = $.proxy(confirmPassFieldCheck, this)();
					break;
				case "emailField":
					formValid[eventClickedId] = $.proxy(emailFieldCheck, this)();
					break;
				case "phoneField":
					formValid[eventClickedId] = $.proxy(phoneFieldCheck, this)();
					break;
				case "cNameField":
				case "adminField":
				case "addressField":
				case "courseField":
				case "fnameField":
				case "lNameField":
				case "collegeField":
				case "yearField":
				case "courseField":
					formValid[eventClickedId] = $.proxy(blankCheck, this)();
					break;
				default:
					break;
			}
		} else if (event.keyCode === 9) {
			if (formFields[(formFields.indexOf(eventClickedId) + 1)]){
				eventClickedId = formFields[(formFields.indexOf(eventClickedId) + 1)];
			} else {
				eventClickedId = "null";
			}
		}
	}

	$(document).click(function(event){
		if ($(event.target).attr('id')){
			eventClickedId = $(event.target).attr('id');
		} else {
			eventClickedId = "null";
		}
	});

	$("#passField").keypress(function() {
		keyPressed = event.keyCode;
		formValid[eventClickedId] = $.proxy(passFieldCheck, this)();
	});

	$("#confirmPassField").keypress(function() {
		keyPressed = event.keyCode;
		formValid[eventClickedId] = $.proxy(confirmPassFieldCheck, this)();
	});

	$("#emailField").keypress(function() {
		keyPressed = event.keyCode;
		formValid[eventClickedId] = $.proxy(emailFieldCheck, this)();
	});

	$("#phoneField").keypress(function() {
		keyPressed = event.keyCode;
		formValid[eventClickedId] = $.proxy(phoneFieldCheck, this)();
	});

	$("#cNameField").keypress(function() {
		keyPressed = event.keyCode;
		formValid[eventClickedId] = $.proxy(blankCheck, this)();
	});

	$("#adminField").keypress(function() {
		keyPressed = event.keyCode;
		formValid[eventClickedId] = $.proxy(blankCheck, this)();
	});

	$("#addressField").keypress(function() {
		keyPressed = event.keyCode;
		formValid[eventClickedId] = $.proxy(blankCheck, this)();
	});

	$("#courseField").keypress(function() {
		keyPressed = event.keyCode;
		formValid[eventClickedId] = $.proxy(blankCheck, this)();
	});

	$("#fnameField").keypress(function() {
		keyPressed = event.keyCode;
		formValid[eventClickedId] = $.proxy(blankCheck, this)();
	});

	$("#lNameField").keypress(function() {
		keyPressed = event.keyCode;
		formValid[eventClickedId] = $.proxy(blankCheck, this)();
	});

	$("#Submitbutton").click(function() {
		for (var i = 0; i < formFields.length; i++) {
			if (!formValid[formFields[i]]) {
				validity = false;
				return;
			}
		}
		validity = true;
	});

	function blankCheck() {
		$("#" + eventClickedId + "DivErr").remove();
		var fieldVal = getValue();
		if (fieldVal === "") {
			$("#" + eventClickedId).after("<div id=\"" + eventClickedId + "DivErr\">" + ERROR_MSG_6 + "</div>");
			displayErrorField();
			return false;
		} else {
			displayValidField();
			return true;
		}
	};
	
	function emailFieldCheck() {
		var emailVal = getValue();
		$("#emailErrDiv").remove();
		if (emailVal === "") {
			$("#" + eventClickedId).after("<div id=\"emailErrDiv\">" + ERROR_MSG_6 + "</div>");
			displayErrorField();
			return false;
		} else if (emailVal.indexOf('@') === -1 || emailVal.indexOf('.') === -1 ) {
			$("#" + eventClickedId).after("<div id=\"emailErrDiv\">" + ERROR_MSG_4 + "</div>");
			displayErrorField();
			return false;
		} else {
			displayValidField();
			return true;
		}
	};

	function phoneFieldCheck() {
		var phoneVal = getValue();
		$("#phoneErrDiv").remove();
		if (phoneVal === "") {
			$("#" + eventClickedId).after("<div id=\"phoneErrDiv\">" + ERROR_MSG_6 + "</div>");
			displayErrorField();
			return false;
		} else if (isNaN(phoneVal.split(' ').join(''))) {
			$("#" + eventClickedId).after("<div id=\"phoneErrDiv\">" + ERROR_MSG_5 + "</div>");
			displayErrorField();
			return false;
		} else {
			displayValidField();
			return true;
		}
	}

	function passFieldCheck() {
		var passVal = getValue();
		var passLength = passVal.length;
		$("#passErrDiv").remove();
		if (passVal === "") {
			$("#" + eventClickedId).after("<div id=\"passErrDiv\">" + ERROR_MSG_6 + "</div>");
			displayErrorField();
			return false;
		}
		for (var i = 0; i < INVALID_PASS_CHAR.length; i++) {
			if (passVal.indexOf(INVALID_PASS_CHAR[i * 2]) > -1 ) {
				$("#" + eventClickedId).after("<div id=\"passErrDiv\">" + ERROR_MSG_2 + "</div>");
				displayErrorField();
				return false;
			}
		}
		if (passLength <= 5) {
			displayErrorField();
			$("#" + eventClickedId).after("<div id=\"passErrDiv\">" + ERROR_MSG_1 + "</div>");
			return false;
		} else {
			displayValidField();
			return true;
		}
	};

	function confirmPassFieldCheck() {
		$("#confErrDiv").remove();
		var passVal = $("#passField").val();
		var confirmPassVal = getValue();
		if (confirmPassVal === "") {
			$("#" + eventClickedId).after("<div id=\"confErrDiv\">" + ERROR_MSG_6 + "</div>");
			displayErrorField();
			return false;
		} else if (passVal !== confirmPassVal) {
			displayErrorField();
			$("#" + eventClickedId).after("<div id=\"confErrDiv\">" + ERROR_MSG_3 + "</div>");
			return false;
		} else {
			displayValidField();
			return true;
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

	function getValue() {
		if (keyPressed === 8) {
			return $("#" + eventClickedId).val().substring(0, $("#" + eventClickedId).val().length - 1);
		} else {
			return $("#" + eventClickedId).val() + String.fromCharCode(event.keyCode);
		}
	};
});

function store_business_info() {
	if (validity) {
		var data = [];
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
	else console.log("INVALID");
};

function store_student_info() {
	if (validity) {
		var data = [];
		data.push(document.forms["studentForm"]["fName"].value); 		// 0
		data.push(document.forms["studentForm"]["lName"].value); 		// 1
		data.push(document.forms["studentForm"]["email"].value); 		// 2
		data.push(document.forms["studentForm"]["pass"].value); 		// 3
		data.push(document.forms["studentForm"]["confirmPass"].value); 	// 4
		data.push(document.forms["studentForm"]["college"].value); 		// 5
		data.push(document.forms["studentForm"]["year"].value); 		// 6
		data.push(document.forms["studentForm"]["course"].value); 		// 7
		console.log(data);
	}
	else console.log("INVALID");
};