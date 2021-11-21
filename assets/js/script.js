// create all variables needed for DOM targeting
var timer = document.getElementById('timer');
var startBtn = document.getElementById('startBtn');
var startScreen = document.getElementById('startScreen');
var questionContainer = document.getElementById('questionContainer');
var questionTitle = document.getElementById('questionTitle');
var questionOptions = document.getElementById('questionOptions');
var gameOver = document.getElementById('gameOver');
var submitBtn = document.getElementById('submit');
var finalScore = document.getElementById('finalScore');
var intitials = document.getElementById('initials');

var timeInterval;
var timeLeft = 5;
var questionNumber = 0;

var questionArray = [
    {
        question: "Commonly used data types DO Not Include: ",
        answer: "alerts",
        options: ['strings', 'booleans', 'alerts', 'numbers']
        
    },
    {
        question: "The condition in an if/else statement is enclosed with________.",
        answer: "parenthesis",
        options: ['quotes', 'curly brackets', 'parenthesis', 'square brackets']
    },
    {
        question: "Arrays in JavaScript can be used to store_________.",
        answer: "all of the above",
        options: ['numbers and strings', 'other arrays', 'booleans','all of the above']
    },
    {
        question: "String values must be enclosed within__________.",
        answer: "quotes",
        options: ['commas', 'curly brackets', 'quotes', 'parenthesis']
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: "console.log",
        options: ['JavaScript','terminal/bash', 'for loops', 'console.log']
    }
]

//---------------------------------------------start function -----------------------------------------------
function start() {
    //hide startContainer

    //show questionContainer

    //start timer

    //run question funtion

   timeInterval = setInterval(function(){
        if (timeLeft <= 0){
            clearInterval(timeInterval);
            timer.textContent = "Time: 0";
        } else {
            timer.textContent = "Time: " + timeLeft--;
        }
    },1000);
}    
//------------------------------------------End start function------------------------------------------------
    // for loop
// for (var index = 0; index < questionArray[questionNumber].options.length; index++) {
//     var element = array[index];
    
// }

    //create our question function

    //update the title of the current question and display it on the page

    //loop over the choices in the current question

    //create buttons for those choices, add attributes to the buttons and a run an on click

    //append the buttons to the button container.

    //button click function

    //check if answer is wrong
     // make sure the question number is increased and check if you ran out of questions if you did game over. 
    



// add all eventlisteners at the bottom of the JS
startBtn.onclick = start;