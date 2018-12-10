var playArea = 20;
var fireTreshold = (playArea*playArea)/2;

var gameArea = document.getElementById("game-area");

var playerPosition = {
    row: 1,
    cell: 1
};

var message = document.querySelector(".message");

var timeLeft = document.querySelector(".timeLeft");

var scoreDisplay = document.querySelector(".scoreDisplay");

var time = 180;

var score = 0;

var run;

function countdown() {
    if (time > 0) {
        time --;
    } else if (time === 0) {
        run = false;
    }
    timeLeft.innerHTML = time;
}

function checkStatus() {
    var fireStatus = document.querySelectorAll(".fire");
    if ((time <= 0) || (fireStatus.length >= fireTreshold)) {
        message.innerHTML = "Game Over!";
    }
}

function setPlayer() {
    setInterval(drawPlayer, 50);
}

function removePlayer() {
    setInterval(clearPlayer, 50);
}

function fireGenerator() {
    setInterval(startFire, 1000);
}

function myStopFunction() {
    clearInterval(setPlayer);
    clearInterval(removePlayer);
    clearInterval(fireGenerator);
}
function drawPlayer() {
    var updateRow = playerPosition.row;
    var updateCell = playerPosition.cell;
    var newPosition = "row"+updateRow+"cell"+updateCell;
    var getCell= document.getElementById(newPosition);
    getCell.classList.add("player");
    if (getCell.className == "cell fire player") {
        startType();
        getCell.classList.remove("fire");
        // if (startType == false) {
        //     getCell.classList.add("fire");
        // }
    }
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

function startFire() {
    var fireRow = Math.floor(Math.random() * playArea);
    var fireCell = Math.floor(Math.random() * playArea);
    var firePosition = "row"+fireRow+"cell"+fireCell;
    var getCell= document.getElementById(firePosition);
    getCell.classList.add("fire");
}

function playerMove(e) {
    // keyCode for up arrow key is 38
    if (e.keyCode==38) {
        playerPosition.row -= 1;
        if (playerPosition.row < 0) {
            playerPosition.row += 1;
        }
    }
// keyCode for right arrow key is 39
    if (e.keyCode==39) {
        playerPosition.cell += 1;
        if (playerPosition.cell >= playArea) {
            playerPosition.cell -= 1;
        }
    }
// keyCode for down arrow key is 40
    if (e.keyCode==40) {
        playerPosition.row += 1;
        if (playerPosition.row >= playArea) {
            playerPosition.row -= 1;
        }
    }
// keyCode for left arrow key is 37
    if (e.keyCode==37) {
        playerPosition.cell -= 1;
        if (playerPosition.cell < 0) {
            playerPosition.cell += 1;
        }
    }
}

var hoverStart =  function() {
    document.getElementById("startButton").addEventListener("mouseover", function(){
    document.getElementById("startButton").style.backgroundColor = "white";
    document.getElementById("startButton").style.color = "black";
    })
    document.getElementById("startButton").addEventListener("mouseout", function(){
    document.getElementById("startButton").style.backgroundColor = "black";
      document.getElementById("startButton").style.color = "white";
    })
}

var hoverInstruction =  function() {
    document.getElementById("instructionButton").addEventListener("mouseover", function(){
    document.getElementById("instructionButton").style.backgroundColor = "white";
    document.getElementById("instructionButton").style.color = "black";
    })
    document.getElementById("instructionButton").addEventListener("mouseout", function(){
    document.getElementById("instructionButton").style.backgroundColor = "black";
      document.getElementById("instructionButton").style.color = "white";
    })
}
