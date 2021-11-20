var timer = document.getElementById('timer');
//-------------------------------------runTimer function start-----------------------------------------------
function runTimer() {
    var timeLeft = 5;

    var timeInterval = setInterval(function(){
        if (timeLeft <= 0){
            clearInterval(timeInterval);
            timer.textContent = "Time: 0";
        } else {
            timer.textContent = "Time: " + timeLeft--;
        }
    },1000);
}    
//-------------------------------------End-runTimer function------------------------------------------------
    

    
    



