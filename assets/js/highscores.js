var highScoreContainer = document.getElementById('highScoreContainer');
var highScoreList = document.getElementById('highScoreList');
var clearScoresBtn = document.getElementById('clearScoresBtn');

highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

highScoreContainer.appendChild(highScoreList);

for (let i = 0; i < highScores.length; i++) {
    var liEl = document.createElement("li");
    liEl.textContent = highScores[i].initials + ":    " + highScores[i].score;

    highScoreList.appendChild(liEl);    
}


 function clearScores(){
    localStorage.clear();
    highScoreList.innerHTML = "";
 };

clearScoresBtn.onclick = clearScores;




    
