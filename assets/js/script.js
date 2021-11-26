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
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');

var timeInterval;
var timeLeft = 5;
var questionNumber = 0;

var questionArray = [
    {
        question: "Commonly used data types DO Not Include: ",
        answer: "3. alerts",
        options: ['1. strings', '2. booleans', '3. alerts', '4. numbers']

    },
    {
        question: "The condition in an if/else statement is enclosed with________.",
        answer: "3. parenthesis",
        options: ['1. quotes', '2 .curly brackets', '3 .parenthesis', '4. square brackets']
    },
    {
        question: "Arrays in JavaScript can be used to store_________.",
        answer: "4. all of the above",
        options: ['1. numbers and strings', '2. other arrays', '3. booleans', '4 .all of the above']
    },
    {
        question: "String values must be enclosed within__________.",
        answer: "3. quotes",
        options: ['1. commas', '2. curly brackets', '3. quotes', '4 .parenthesis']
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: "4. console.log",
        options: ['1. JavaScript', '2. terminal/bash', '3. for loops', '4. console.log']
    }
]



//---------------------------------------------start function -----------------------------------------------
function start() {
    //hide startContainer
    startScreen.className = "hide";
    //show timer
    timer.textContent = "Time: " + timeLeft;
    //show questionContainer
    questionContainer.className = "show";
    nextQuestion();



    //run question function


    //start timer
    timeInterval = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            timer.textContent = "Time: 0";
        } else {
            timer.textContent = "Time: " + timeLeft--;
        }
    }, 1000);
}
//------------------------------------------End start function------------------------------------------------

//get question function loop through array
//                                                   

//-------------------------------------------nextQuestion function--------------------------------------------
function nextQuestion() {
    
    questionTitle.textContent = questionArray[questionNumber].question;

    opt1.textContent = questionArray[questionNumber].options[0];
    opt2.textContent = questionArray[questionNumber].options[1];
    opt3.textContent = questionArray[questionNumber].options[2];
    opt4.textContent = questionArray[questionNumber].options[3];
    questionNumber++;
};

//------------------------------------------------------------------------------------------------------------
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







