// Variables
var startBtn = document.getElementById("start-btn");
var introEL = document.querySelector("#intro");
var questionsEl = document.querySelector("#questions");
var questionDisplayEl = document.querySelector("#question-display");
var choicesEl = document.querySelector("#choices");
var countdownEl = document.querySelector("#timer");


var question = 
[
{
    display: "The document object, like all other global variables, is a property of which object?",
    answers: [
        "Window", 
        "Location", 
        "Body"
    ],
    correctAnswer: 0
},
{
    display: "Interactivity with JavaScript involves which three basic actions?",
    answers: [
        "Browser detection, styling the document, rendering content", 
        "Selecting elements, manipulating elements, listening for user actons", 
        "Global scope, document, Document Object Model"
    ],
    correctAnswer: 1
},
{
    display: "The ____ is a representation of the document that JavaScript uses to navigate and make changes to a webpage.",
    answers: [
        "Chrome developer tools", 
        "DOM (Document Object Model)", 
        "globsl objects"
    ],
    correctAnswer: 1
},
{
    display: "What is the document object?",
    answers: [
        "A feature in the Chrome web browser", 
        "A representation of a webpage that JavaScript can use", 
        "A gobal object representing the HTML and content of a web page"
    ],
    correctAnswer: 2
},
{
    display: "appendChild() is an example of...",
    answers: [
        "A state",
        "A method",
        "A function"
    ],
    correctAnswer: 1
},
];

var cursor = 0;
var score = 0;
var timeLeft = 75;
var interval;


choicesEl.addEventListener("click", function(event){
    var element = event.target;
    if (element.getAttribute("class") === "item") {
        var id = parseInt(element.getAttribute("data-id"));
        if (question.correctAnswer === id) {
            score += 10;
        } else {
            console.log("Wrong Answer!")
        }
        cursor++
        generateQuestionaire();
    }
})

function generateQuestionaire() {
    questionDisplayEl.textContent = "1. " + question.display;
    question.answers.forEach(function(choice, index) {
        var choiceItem = document.createElement("button");
        choiceItem.setAttribute("class", "item");
        choiceItem.setAttribute("data-id", index);
        choiceItem.textContent = choice;
        choicesEl.appendChild(choiceItem);
    });
}

function startTimer() {
    timeLeft = parseInt(countdownEl.getAttribute("data-time"))
    interval = setInterval(function() {
        timeLeft--;
        if(timeLeft > 0) {
        countdownEl.textContent = timeLeft;
        } else {
            clearInterval(Interval);
        }
    }, 1000);
  }

// Make my start button toggle through questions
startBtn.addEventListener("click", function(event) {
    introEL.style.display = "none";
    // Replace introduction with questions and choices
    questionsEl.style.display = "flex";
    // var question = question[cursor];
    generateQuestionaire();
    startTimer();
})
