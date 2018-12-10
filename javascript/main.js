
// move player into fire to initiate typing
// fires have timer which will cause fire to spread
// addition of timer, player has to last a cerain amount of time before help arrives.
// lose condition when fire reaches certain percent of the map, based on queryselectorall.length
//game reset

//note: to prevent further appending after initial start of game
// popup with clear instructions
// sprites for better feel
// mediaquery for when browser is below a certain width

window.onload=function() {
    document.getElementById("startButton").addEventListener("click", startGame)
};

window.addEventListener("keydown", function(e) {
    // arrow keys
    if([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

document.addEventListener('keydown', playerMove);

hoverButton();

// var playerDir = {
//     "up": 1,
//     "right": 2,
//     "down": 3,
//     "left": 4
// };

// var currentPlayerDir = playerDir["right"];

function startGame() {
    for (var i = 0; i < playArea; i++) {
        var rowDiv = document.createElement('div');
        rowDiv.className = "row";
        rowDiv.id = "row"+i;
        gameArea.appendChild(rowDiv);
        var currentRow = document.querySelectorAll(".row")[i];
        for (var j = 0; j < playArea; j++) {
            var cellDiv = document.createElement('div');
            cellDiv.className = "cell";
            cellDiv.id = "row"+i+"cell"+j;
            currentRow.appendChild(cellDiv);
        }
    }
    setPlayer();
    removePlayer();
    fireGenerator();
}






