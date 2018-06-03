

function showInput() {
	
	var string_val = document.getElementById("user_input").value;
	var user_position = document.getElementById("user_pos").value;
	console.log("The user's name is: " + string_val);
	
	if (new Date().getHours < 15) {
		document.getElementById('timer').innerHTML = "Good Morning!";
	} else {
		document.getElementById('timer').innerHTML = "Good Evening!";
	}

	document.getElementById('display').innerHTML = "Your name is " + string_val + " and your position is " + user_position;
}
