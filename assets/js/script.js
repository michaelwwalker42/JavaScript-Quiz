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

//create ordered list
var optionList = document.createElement("ol");
optionList.className = "alignLeft";

// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

optionList.appendChild(li1);
optionList.appendChild(li2);
optionList.appendChild(li3);
optionList.appendChild(li4);


var opt1 = document.createElement("button");
var opt2 = document.createElement("button");
var opt3 = document.createElement("button");
var opt4 = document.createElement("button");


var timeInterval;
var timeLeft = 5;
var questionNumber = 0;

var questionArray = [
    {
        question: "Commonly used data types DO Not Include: ",
        answer: "alerts",
        options: ['1. strings', '2. booleans', '3. alerts', '4. numbers']
        
    },
    {
        question: "The condition in an if/else statement is enclosed with________.",
        answer: "parenthesis",
        options: ['1. quotes', '2 .curly brackets', '3 .parenthesis', '4. square brackets']
    },
    {
        question: "Arrays in JavaScript can be used to store_________.",
        answer: "all of the above",
        options: ['1. numbers and strings', '2. other arrays', '3. booleans','4 .all of the above']
    },
    {
        question: "String values must be enclosed within__________.",
        answer: "quotes",
        options: ['1. commas', '2. curly brackets', '3. quotes', '4 .parenthesis']
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: "console.log",
        options: ['1. JavaScript','2. terminal/bash', '3. for loops', '4. console.log']
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

    // append elemenents to questionContainer
    questionTitle.textContent = questionArray[0].question;
    questionContainer.appendChild(questionTitle);
 
    questionContainer.appendChild(optionList);

    li1.appendChild(opt1);
    opt1.textContent = questionArray[0].options[0];
    opt1.className = "btn";

    li2.appendChild(opt2);
    opt2.textContent = questionArray[0].options[1];
    opt2.className = "btn";

    li3.appendChild(opt3);
    opt3.textContent = questionArray[0].options[2];
    opt3.className = "btn";

    li4.appendChild(opt4);
    opt4.textContent = questionArray[0].options[3];
    opt4.className = "btn"; 

    

    

  

    //run question funtion

      //start timer

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