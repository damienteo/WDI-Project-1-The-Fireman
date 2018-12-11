// In this game, the player is a fireman who is stationed at the forest. As it is the dry season, fires would auomatically start. It is the player's job to limit the spread of said fires before help arrives. If the fires spread beyond a certain point, it is determined that the forest will be beyond saving.
// The blue div represents the player. The green div represents the trees. A fire is highighted by a red div.
// Time left is highlighted by the timer. Once 50% of the forest is on fire, the player loses the game.


//autofocus for input does not work when game starts
// fires have timer which will cause fire to spread
//game reset - remove child

//note: to prevent further appending after initial start of game
// displaying percentage of forest on fire as a progress bar
//fixing the issue where the div css does not update when the player is on the fire div
// popup with clear instructions
//levels based on time fire spreads, letters in words, time before help arrives
// sprites for better feel
// mediaquery for when browser is below a certain width
// generating wordlist from an API

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

var time = 180;

var score = 0;

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
    generatingFire = setInterval(startFire, 1000);
}

function myStopFunction() {
    clearInterval(settingPlayer);
    clearInterval(removingPlayer);
    clearInterval(generatingFire);
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
    setPlayer();
    removePlayer();
    fireGenerator();
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);
}






