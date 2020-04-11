function customRoll() {
	let customSidedDie = document.getElementById("input-bar").value;
	if (isNaN(customSidedDie)){
		alert("Please enter your number again without any letters");
	}
	else {
		roll(customSidedDie);
	}
}

function roll(numberOfSides) {
	let result = Math.floor((Math.random() * numberOfSides) + 1);
	document.getElementById("result").innerHTML = result;
}