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
var showCorrectOrWrong = document.getElementById('showCorrectOrWrong');
var highScoresList = document.getElementById('highScoresList');
var highScoresBtn = document.getElementById('viewHighScores');

// retrieve high scores from local storage or create empty high scores array
var highScores = [];
if(localStorage.getItem("highScores") !== null) {
    highScores = JSON.parse(localStorage.getItem("highScores"));
}

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

var timeInterval;
var timeLeft = 75;
var questionNumber = 0;

//---------------------------------------------start function -----------------------------------------------
function start() {
    //hide startContainer
    startScreen.className = "hide";
    highScoresBtn.className = "hide";

    //show questionContainer
    questionContainer.className = "show";
    nextQuestion();

    //start timer
    timeInterval = setInterval(function () {
        timeLeft--;
        //update timer on html
        timer.textContent = timeLeft;
        // if no time is left end the game              
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
    // display the next question
    questionTitle.textContent = questionArray[questionNumber].question;
    // clear out the question options
    questionOptions.innerHTML = '';
    // loop through the question array
    questionArray[questionNumber].options.forEach(function (choice, i) {
        // create choice buttons
        var choiceBtn = document.createElement('button');
        // set button attributes
        choiceBtn.setAttribute('class', 'optBtn');
        choiceBtn.setAttribute('value', choice);
        choiceBtn.textContent = choice;
        // add event listener and check if answer is right on button click
        choiceBtn.onclick = checkAnswer;
        // append the choice buttons to the questionOptions element
        questionOptions.append(choiceBtn)
    })
};
//-----------------------------------------End nextQuestion function------------------------------------------

//----------------------------------------checkAnswer function-------------------------------------------------
function checkAnswer() {  

    // if the answer is wrong subtract 10 sectonds from time left
    if (questionArray[questionNumber].answer !== this.value) {
        console.log(this);
        timeLeft -= 10;
        timer.textContent = timeLeft;
        showCorrectOrWrong.textContent = "Wrong!";
    } else {
        showCorrectOrWrong.textContent = "Correct!";
    }
    questionNumber++;
    // if there are no more questions end the game
    if (questionNumber === questionArray.length) {
        endGame()
    } else {
        nextQuestion()
    }
};
//---------------------------------------end checkAnswer function-----------------------------------------------

//---------------------------------------saveScore function------------------------------------------------------
function saveScore() {

    var yourScore = {
        initials: initials.value,
        score: timeLeft
    };

    if (initials.value === "") {
        alert("You must enter your initials");
        return;
    }

    //push saved score into high scores array
    highScores.push(yourScore);
    // sorts array highest to lowest
    highScores = highScores.sort((a,b) => {
        if (a.score < b.score) {
            return 1;
        } else {
            return -1;
        }
    });
    // keep high score list to 5 scores
    highScores.splice(5);
    // save high scores array to local storage
    localStorage.setItem("highScores", JSON.stringify(highScores)); 

        
};
//-----------------------------------------end saveScore function-----------------------------------------------

//--------------------------------------------endGame function--------------------------------------------------

function endGame() {
    highScoresBtn.className = "viewHighScores";
    questionContainer.className = "hide";
    gameOver.className = "show";
    clearInterval(timeInterval);
    finalScore.textContent = timeLeft;
};
//---------------------------------------------------------------------------------------------------------------

// event listeners

startBtn.onclick = start;
submitBtn.onclick = saveScore;









