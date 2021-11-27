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
var initials = document.getElementById('initials');


var timeInterval;
var timeLeft = 75;
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

    //show questionContainer
    questionContainer.className = "show";
    nextQuestion();    

    //start timer
    timeInterval = setInterval(function () {
        timeLeft--;
        //update timer on html
        timer.textContent = timeLeft;

        if (timeLeft <= 0) {
            endGame()
        }
    }, 1000);

    //show timer on html
    timer.textContent = timeLeft;

}
//------------------------------------------End start function------------------------------------------------


//-------------------------------------------nextQuestion function--------------------------------------------
function nextQuestion() {

    questionTitle.textContent = questionArray[questionNumber].question;

    questionOptions.innerHTML = '';

    questionArray[questionNumber].options.forEach(function (choice, i) {

        var choiceBtn = document.createElement('button');
        choiceBtn.setAttribute('class', 'optBtn');
        choiceBtn.setAttribute('value', choice);

        choiceBtn.textContent = choice;

        choiceBtn.onclick = checkAnswer;

        questionOptions.append(choiceBtn)


    })
};


//-----------------------------------------End nextQuestion function------------------------------------------

//----------------------------------------checkAnswer function-------------------------------------------------
function checkAnswer() {
    if (questionArray[questionNumber].answer !== this.value) {
        timeLeft -= 10;
        timer.textContent = timeLeft;
    }
    questionNumber++;

    if (questionNumber === questionArray.length) {
        endGame()
    } else {
        nextQuestion()
    }
}
//---------------------------------------end checkAnswer function-----------------------------------------------

//---------------------------------------saveScore function------------------------------------------------------
function saveScore() {
    var savedScore = {
        initials: initials.value,
        score: timeLeft
    }


    //localStorage.setItem
    //localStorage.getItem


}
//---------------------------------------------------------------------------------------------------------------

//--------------------------------------------endGame function--------------------------------------------------

function endGame() {
    questionContainer.className = "hide";
    gameOver.className = "show";
    clearInterval(timeInterval);
    finalScore.textContent = timeLeft;

}
//---------------------------------------------------------------------------------------------------------------

// event listeners

startBtn.onclick = start;
submitBtn.onclick = saveScore;








