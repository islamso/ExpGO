var store_business_info = function() {
	const fs = require('fs');
	var data = [];
	var errorMsg = "";
	data.push(document.forms["businessForm"]["cName"].value); //0
	data.push(document.forms["businessForm"]["email"].value); //1
	data.push(document.forms["businessForm"]["phone"].value); //2
	data.push(document.forms["businessForm"]["admin"].value); //3
	data.push(document.forms["businessForm"]["pass"].value); //4
	data.push(document.forms["businessForm"]["confirmPass"].value); //5
	data.push(document.forms["businessForm"]["address"].value); //6
	data.push(document.forms["businessForm"]["address2"].value); //7
	data.push(document.forms["businessForm"]["industry"].value); //8
	data.push(document.forms["businessForm"]["bio"].value); //9
	console.log(data);
	if (data[4] !== data[5] && data[4] !== "" && data[5] !== "") {
		errorMsg += "Passwords enter do not match\n"
	}
	for (var i = 0; i < data.length - 3; i++) {
		if (data[i] === "" || data[i] === null) {
			errorMsg += "Missing ";
			switch (i) {
				case 0:
					errorMsg += '"Name" ';
					break;
				case 1:
					errorMsg += '"e-mail" ';
					break;
				case 2:
					errorMsg += '"Phone" ';
					break;
				case 3:
					errorMsg += '"Username" ';
					break;
				case 4:
					errorMsg += '"Password" ';
					break;
				case 5:
					errorMsg += '"Confirm Password" ';
					break;
				case 6:
					errorMsg += '"Address" '
					break;
				default:
			}
			errorMsg += "field.\n"
		}
	}
	if (errorMsg !== "") {
		console.log(errorMsg);
		window.alert(errorMsg);
	} else {

	}
}