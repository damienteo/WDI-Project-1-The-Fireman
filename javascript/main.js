
// move player into fire to initiate typing
// fires have timer which will cause fire to spread
// addition of timer, player has to last a cerain amount of time before help arrives.
// lose condition when fire reaches certain percent of the map, based on queryselectorall.length
//game reset

//note: to prevent further appending after initial start of game
// popup with clear instructions
// sprites for better feel

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

// var playerDir = {
//     "up": 1,
//     "right": 2,
//     "down": 3,
//     "left": 4
// };

// var currentPlayerDir = playerDir["right"];

function setPlayer() {
    setInterval(drawPlayer, 50);
}

function removePlayer() {
    setInterval(clearPlayer, 50);
}

function fireGenerator() {
    setInterval(startFire, 500);
}

function myStopFunction() {
    clearInterval(setPlayer);
    clearInterval(removePlayer);
    clearInterval(fireGenerator);
}

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

function drawPlayer() {
    // console.log("run");
    var updateRow = playerPosition.row;
    var updateCell = playerPosition.cell;
    var newPosition = "row"+updateRow+"cell"+updateCell;
    var getCell= document.getElementById(newPosition);
    getCell.classList.add("player");
}

function clearPlayer() {
    var updateRow = playerPosition.row;
    var updateCell = playerPosition.cell;
    var newPosition = "row"+updateRow+"cell"+updateCell;
    var allPlayers = document.querySelectorAll(".player");
    for (var i=0; i<allPlayers.length; i++){
        if (allPlayers[i].id != newPosition) {
            allPlayers[i].classList.remove("player");
        }
    }
}


function playerMove(e) {
    // keyCode for up arrow key is 38
    if (e.keyCode==38) {
        playerPosition.row -= 1;
        console.log(playerPosition.row);
        console.log("up");
        if (playerPosition.row < 0) {
            playerPosition.row += 1;
        }
    }
// keyCode for right arrow key is 39
    if (e.keyCode==39) {
        playerPosition.cell += 1;
        console.log(playerPosition.cell);
        console.log("right");
        if (playerPosition.cell > 29) {
            playerPosition.cell -= 1;
        }
    }
// keyCode for down arrow key is 40
    if (e.keyCode==40) {
        playerPosition.row += 1;
        console.log(playerPosition.row);
        console.log("down");
        if (playerPosition.row > 29) {
            playerPosition.row -= 1;
        }
    }
// keyCode for left arrow key is 37
    if (e.keyCode==37) {
        playerPosition.cell -= 1;
        console.log(playerPosition.cell);
        console.log("left");
        if (playerPosition.cell < 0) {
            playerPosition.cell += 1;
        }
    }
}

function startFire() {
    var fireRow = Math.floor(Math.random() * 29);
    var fireCell = Math.floor(Math.random() * 29);
    var firePosition = "row"+fireRow+"cell"+fireCell;
    var getCell= document.getElementById(firePosition);
    getCell.classList.add("fire");
    console.log(firePosition);
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