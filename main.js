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

var playArea = 30;

var gameArea = document.getElementById("game-area");

var playerLength = 6;

var playerPosition = {
    row: 1,
    cell: 1
};

playerPosition.row;
playerPosition.cell;

function startGame() {
    for (var i = 0; i < playArea; i++) {
        var rowDiv = document.createElement('div');
        rowDiv.className = "row";
        rowDiv.id = i;
        gameArea.appendChild(rowDiv);
        var currentRow = document.querySelectorAll(".row")[i];
        for (var j = 0; j < playArea; j++) {
            console.log(j)
            var cellDiv = document.createElement('div');
            cellDiv.className = "cell";
            cellDiv.id = j;
            currentRow.appendChild(cellDiv);
        }
    }
}

function playerMove(e) {
    // keyCode for up arrow key is 38
    if (e.keyCode==38) {
        playerPosition.row -= 1;
        console.log(playerPosition.row);
        console.log("up");
        if (playerPosition.row <= 0) {
            playerPosition.row += 1;
        }
    }
// keyCode for right arrow key is 39
    if (e.keyCode==39) {
        playerPosition.cell += 1;
        console.log(playerPosition.cell);
        console.log("right");
        if (playerPosition.cell >= 29) {
            playerPosition.cell -= 1;
        }
    }
// keyCode for down arrow key is 40
    if (e.keyCode==40) {
        playerPosition.row += 1;
        console.log(playerPosition.row);
        console.log("down");
        if (playerPosition.row >= 29) {
            playerPosition.row -= 1;
        }
    }
// keyCode for left arrow key is 37
    if (e.keyCode==37) {
        playerPosition.cell -= 1;
        console.log(playerPosition.cell);
        console.log("left");
        if (playerPosition.cell <= 0) {
            playerPosition.cell += 1;
        }
    }
}


var hoverButton =  function() {
    document.getElementById("startButton").addEventListener("mouseover", function(){
    document.getElementById("startButton").style.backgroundColor = "white";
    document.getElementById("startButton").style.color = "black";
    })
    document.getElementById("startButton").addEventListener("mouseout", function(){
    document.getElementById("startButton").style.backgroundColor = "black";
      document.getElementById("startButton").style.color = "white";
    })
}

hoverButton();