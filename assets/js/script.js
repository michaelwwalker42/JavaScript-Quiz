// creat all variables needed for DOM targeting
var timer = document.getElementById('timer');
var timeInterval;
var timeLeft = 5;
var startBtn = document.getElementById('startBtn');
var startScreen = document.getElementById('startScreen');
var questionContainer = document.getElementById('questionContainer');
var questionTitle = document.getElementById('questionTitle');
var questionOptions = document.getElementById('questionOptions');
var gameOver = document.getElementById('gameOver');
var submitBtn = document.getElementById('submit');
var finalScore = document.getElementById('finalScore');
var intitials = document.getElementById('initials');
var questionNumber = 0;

var questionArray = [
    {
        question: "1+1",
        answer: "2",
        options: ["3", '5', '4', '2']
        
    },
    {
        question: "1+3",
        answer: "4",
        options: ["3", '5', '4', '2']
    }
]

// for (var index = 0; index < questionArray[questionNumber].options.length; index++) {
//     var element = array[index];
    
// }


//-------------------------------------runTimer function start-----------------------------------------------
function runTimer() {

   timeInterval = setInterval(function(){
        if (timeLeft <= 0){
            clearInterval(timeInterval);
            timer.textContent = "Time: 0";
        } else {
            timer.textContent = "Time: " + timeLeft--;
        }
    },1000);
}    
//-------------------------------------End-runTimer function------------------------------------------------
    

    
    



// add all eventlisteners at the bottom of the JS
startBtn.onclick = runTimer;