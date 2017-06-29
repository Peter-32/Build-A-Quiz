function print(message) {
  document.write(message);
}

var guess;
var numCorrect = 0;
var questions = [
  ["In the children's book series, where is Paddington Bear originally from?", "PERU"],
  ["What letter must appear at the beginning of the registration number of all non-military aircraft in the U.S.?", "N"],
  ["Who delivered the less famous two-hour speech that preceded Abraham Lincoln's two-minute Gettysburg Address?", "EDWARD EVERETT"]
];

for (var i = 0; i < questions.length; i++) {
    guess = prompt(questions[i][0]);
    if (guess.toUpperCase() === questions[i][1]) {
    	numCorrect++;
    }
}

print("<p>You got " + numCorrect + " answers correct out of " + questions.length + " questions.</p>");
if (numCorrect === 0) {
    print("<p>Please try again.</p>");
} else if (numCorrect > 0 && numCorrect != questions.length) {
	print("<p>Good job!  Feel free to play again.</p>")
} else if (numCorrect === questions.length) {
	print("<p>You got a perfect score!  Great job!</p>")
}