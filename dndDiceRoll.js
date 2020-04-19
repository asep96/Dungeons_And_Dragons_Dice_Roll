function customRoll() {
	let customSidedDie = document.getElementById("input-bar").value;
	if (isNaN(customSidedDie)){
		alert("Please enter your number again without any letters");
	}
	else {
		roll(customSidedDie);
	}
}

//keeps track of results for duplicates
let resultArray = [];

function roll(numberOfSides) {
	let numberOfRolls = document.getElementById("num-of-rolls").value;
	//initally setting result equal to zero so it may have values added to it
	let result = 0;
	//logic for when user is rolling multiple of same dice at once
	if (numberOfRolls > 1) {
		let rollCounter = 0;
		while(rollCounter < numberOfRolls) {
			result += Math.floor((Math.random() * numberOfSides) + 1);
			rollCounter++;
		}
	}
	else {
		result = Math.floor((Math.random() * numberOfSides) + 1);
	}
	//have style set to 4em each time in case the user selected help beforehand
	document.getElementById("result").style.fontSize = "4em";
	document.getElementById("result").style.color = "#FFBC43";
	//posting result after just in case the styles do not load for whatever reason
	document.getElementById("result").innerHTML = result;

	//logic for determining if the user had a duplicated result
	//only a max of two results are kept stored in the array 
	resultArray.push(result);
	if(resultArray[0] == resultArray[1]) {
		document.getElementById("result").style.color = "#F84859";
		arrayTrim();
	}
	else if (resultArray.length == 2) {
		arrayTrim();
	}
}

//ensures only two results are in the array
function arrayTrim() {
	resultArray[0] = resultArray[1];
	resultArray.splice(-1,1);
}

function displayHelp() {
	//set color of text in case the user had a different color showing beforehand
	document.getElementById("result").style.color = "#FFBC43";
	document.getElementById("result").style.fontSize = "1.4em";
	document.getElementById("result").innerHTML = "Just click on the button for the corresponding " + 
	"dice you want to roll. For example, if you want to roll a 6 sided die, click the 'd6' button. " +
	"To roll a dice with a number of sides not listed, just type your number into the text box and click " + 
	"custom roll. If you notice the result of your roll change color, that means you rolled the same " +
	"number again. To roll multiple dice at once, select a number from the dropdown for how many " + 
	"dice you want to roll, and click on the type of dice you want to use. Good luck!"
}
