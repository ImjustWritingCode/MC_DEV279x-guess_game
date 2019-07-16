var min = Number(prompt("give the min number:"));
var max = Number(prompt("give the max number:"));
var number = Math.floor(Math.random()*(max - min + 1))+min;
var guess = Number(prompt("give us your guess:"));

while (guess != number) {
	if (number > guess) {
		guess = Number(prompt("Bigger:"));
	} else {
		guess = Number(prompt("Smaller:"));
	}
}

alert("Congrats!");