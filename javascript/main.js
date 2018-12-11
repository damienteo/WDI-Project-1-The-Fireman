// In this game, the player is a fireman who is stationed at the forest. As it is the dry season, fires would auomatically start. It is the player's job to limit the spread of said fires before help arrives. If the fires spread beyond a certain point, it is determined that the forest will be beyond saving.
// The blue div represents the player. The green div represents the trees. A fire is highighted by a red div.
// Time left is highlighted by the timer. Once 50% of the forest is on fire, the player loses the game.


// popup with clear instructions
//change fireman to blue uniform
//resize fireimage
//levels based on time fire spreads, letters in words, time before help arrives (select with radio buttons)
// sprites for better feel
// generating wordlist from an API
// fires have timer which will cause fire to spread
// fires to start at different cell if cell already has fire class
//note: to prevent further appending after initial start of game
// reset game mid-game
// displaying percentage of forest on fire as a progress bar
//fixing the issue where the div css does not update when the player is on the fire div
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

hoverStart();
hoverInstruction();

var playArea = 20;
var fireTreshold = (playArea*playArea)/2;

var gameArea = document.getElementById("game-area");

var playerPosition = {
    row: 1,
    cell: 1
};

var message = document.querySelector("#notification");

var fireLeft = document.querySelector("#fireStatus");

var timeLeft = document.querySelector(".timeLeft");

var scoreDisplay = document.querySelector(".scoreDisplay");

var time = 60;

var score;

var run;

var typingOn = false;

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
    var firePercentage = Math.round((fireStatus.length/(playArea*playArea))*100)
    fireLeft.innerHTML = firePercentage+"% of the forest is on fire.";
    if ((time <= 0) || (fireStatus.length >= fireTreshold)) {
        message.innerHTML = "Game Over!";
        myStopFunction();
    }
}

function setPlayer() {
    settingPlayer = setInterval(drawPlayer, 50);
}

function removePlayer() {
    removingPlayer = setInterval(clearPlayer, 50);
}

function fireGenerator() {
    generatingFire = setInterval(startFire, 100);
}

function countingDown() {
    counter = setInterval(countdown, 1000);
}

function statusUpdate() {
    updatingStatus = setInterval(checkStatus, 50);
}

function myStopFunction() {
    clearInterval(settingPlayer);
    clearInterval(removingPlayer);
    clearInterval(generatingFire);
    clearInterval(counter);
    clearInterval(updatingStatus);
    stopWordMatch();
    clearGame();
}

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
    time=60;
    score = 0;
    setPlayer();
    removePlayer();
    fireGenerator();
    countingDown();
    statusUpdate();
    startWordMatch();
}





