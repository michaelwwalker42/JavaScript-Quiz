var highScoreContainer = document.getElementById('highScoreContainer');
var highScoreList = document.getElementById('highScoreList');

highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

highScoreContainer.appendChild(highScoreList);

for (let i = 0; i < highScores.length; i++) {
    var liEl = document.createElement("li");
    liEl.textContent = highScores[i].initials + " : " + highScores[i].score;

    highScoreList.appendChild(liEl);
    
}










// highScoreList.textContent = highScores[0].initials + " - " + highScores[0].score;




    //console.log(highScores[0].initials);
    //console.log(highScores[0].score);


    
