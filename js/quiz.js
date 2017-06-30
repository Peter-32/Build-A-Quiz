function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML += message;
}

function printList(list) {
html = "<ol>";
for (var i = 0; i < list.length; i++) {
	html += "<li>" + (list[i]) + "</li>";
}
html += "</ol>";
print(html);
}

var guess;
var numCorrect = 0;
var questions = [
  {
    question: "In the children's book series, where is Paddington Bear originally from?", 
    answer: "PERU"
  },
  {
    question: "What letter must appear at the beginning of the registration number of all non-military aircraft in the U.S.?", 
    answer: "N"
  },
  {
    question: "Who delivered the less famous two-hour speech that preceded Abraham Lincoln's two-minute Gettysburg Address?", 
    answer: "EDWARD EVERETT"
  }
];
var questionsCorrect = [];
var questionsWrong = [];

for (var i = 0; i < questions.length; i++) {
    guess = prompt(questions[i].question);
    if (guess.toUpperCase() === questions[i].answer) {
    	numCorrect++;
    	questionsCorrect.push(questions[i].question);    	
    } else {
    	questionsWrong.push(questions[i].question);
    }
}

print("<p>You got " + numCorrect + " answers correct out of " + questions.length + " questions.</p>");
if (numCorrect === 0) {
    print("<p>Please try again.</p>");
} else if (numCorrect > 0 && numCorrect != questions.length) {
	print("<p>Good job!  Feel free to play again.</p>");
} else if (numCorrect === questions.length) {
	print("<p>You got a perfect score!  Great job!</p>");
}

print("<p>You got these questions correct:</p>");
printList(questionsCorrect);


print("<p>You got these questions wrong:</p>");
printList(questionsWrong);
	
	
