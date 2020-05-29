var startBtn = document.getElementById("start-display");
var quizEL = document.querySelector("#quiz-display");
var questionsEl = document.querySelector("#question-display");
var timerEl = document.querySelector("#timer-display");
var countdownEl = document.querySelector("#timer");
var question = document.querySelector("#question");

var timeLeft = 60;
var randIndex;
var correctAnswer;

// Press start button to display question
startBtn.addEventListener("click", function(event) {
    quizEL.style.display = "none";
    // Replace introduction with questions and choices
    timerEl.style.display = "inline";   
    questionsEl.style.display = "inline";

    questionsEl.textContent = myQuestions;
    
    timeLeft = parseInt(countdownEl.getAttribute("data-time"));
    interval = setInterval(function() {
        timeLeft--;
        if(timeLeft > 0) {
        countdownEl.textContent = timeLeft;
        } else {
            clearInterval(interval);
        }
    }, 1000);
});

// Render Questions
for (var i = 0; i < myQuestions.length; i++) {
    console.log(myQuestions[i]);
}
// Create a scoring method for correct answers
// Subtract time from clock when answered incorrectly
// Use localstorage to save score and initials



// Quiz questions and choices
var myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        choiceA: "Douglas Crockford",
        choiceB: "Sheryl Sandberg",
        choiceC: "Brendan Eich"
      },
      correctAnswer: "choiceC"
    },
    {
    question: "The document object, like all other global variables, is a property of which object?",
    answers: {
       choiceA: "Window", 
       choiceB: "Location", 
       choiceC: "Body"
    },
    correctAnswer: "choiceA"
},
    {
        question: "Interactivity with JavaScript involves which three basic actions?",
        answers: {
        choiceA: "Browser detection, styling the document, rendering content", 
        choiceB: "Selecting elements, manipulating elements, listening for user actons", 
        choiceC: "Global scope, document, Document Object Model"
        },
        correctAnswer: "choiceB"
    },
    {
        question: "The ____ is a representation of the document that JavaScript uses to navigate and make changes to a webpage.",
        answers: {
        choiceA: "Chrome developer tools", 
        choiceB: "DOM (Document Object Model)", 
        choiceC: "globsl objects"
        },
        correctAnswer: "choiceB"
    },
    {
        question: "What is the document object?",
        answers: {
        choiceA: "A feature in the Chrome web browser", 
        choiceB: "A representation of a webpage that JavaScript can use", 
        choiceC: "A gobal object representing the HTML and content of a web page"
        },
        correctAnswer: "choiceC"
    },
    {
        question: "appendChild() is an example of...",
        answers: {
        choiceA: "A state",
        choiceB: "A method",
        choiceC: "A function"
        },
        correctAnswer: "choiceB"
    },
]