var colors = [];
FillColors(colors);

var pickedColor = colors[Math.floor(Math.random() * 6)];

var rgbText = document.getElementById("picked-color");
rgbText.textContent = pickedColor.toUpperCase(pickedColor);

var buttonUpperLeft = document.getElementsByClassName("square")[0];
buttonUpperLeft.style.backgroundColor = colors[0];
var buttonUpperMiddle = document.getElementsByClassName("square")[1];
buttonUpperMiddle.style.backgroundColor = colors[1];
var buttonUpperRight = document.getElementsByClassName("square")[2];
buttonUpperRight.style.backgroundColor = colors[2];
var buttonLowerLeft = document.getElementsByClassName("square")[3];
buttonLowerLeft.style.backgroundColor = colors[3];
var buttonLowerMiddle = document.getElementsByClassName("square")[4];
buttonLowerMiddle.style.backgroundColor = colors[4];
var buttonLowerRight = document.getElementsByClassName("square")[5];
buttonLowerRight.style.backgroundColor = colors[5];

var buttonEasy = document.getElementsByClassName("button")[0];
var buttonNormal = document.getElementsByClassName("button")[1];
var buttonHard = document.getElementsByClassName("button")[2];


buttonUpperLeft.addEventListener("click", function () {
	checkAnswer(buttonUpperLeft);
});
buttonUpperMiddle.addEventListener("click", function () {
	checkAnswer(buttonUpperMiddle);
});
buttonUpperRight.addEventListener("click", function () {
	checkAnswer(buttonUpperRight);
});
buttonLowerLeft.addEventListener("click", function () {
	checkAnswer(buttonLowerLeft);
});
buttonLowerMiddle.addEventListener("click", function () {
	checkAnswer(buttonLowerMiddle);
});
buttonLowerRight.addEventListener("click", function () {
	checkAnswer(buttonLowerRight);
});


buttonEasy.addEventListener("click", function () {
	buttonEasy.classList.add("active");
	buttonNormal.classList.remove("active");
	buttonHard.classList.remove("active");
});
buttonNormal.addEventListener("click", function () {
	buttonEasy.classList.remove("active");
	buttonNormal.classList.add("active");
	buttonHard.classList.remove("active");
});
buttonHard.addEventListener("click", function () {
	buttonEasy.classList.remove("active");
	buttonNormal.classList.remove("active");
	buttonHard.classList.add("active");
});


function checkAnswer(button) {
	if (button.style.backgroundColor == pickedColor) {
		alert("Correct");
		location.reload();
	} else {
		button.classList.add("hide-square");
	}
}


function getRandomColorRGB() {
	var color = "rgb(";

	for (var i = 0; i < 3; i++) {
		i < 2 ? (color += Math.floor(Math.random() * 256) + ", ") : (color += Math.floor(Math.random() * 256));
	}
	color += ")";
	return color;
}




function FillColors(colors) {
	for (var i = 0; i < 6; i++)
		colors[i] = getRandomColorRGB();
}




