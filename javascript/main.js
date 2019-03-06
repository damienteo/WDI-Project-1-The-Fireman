// In this game, the player is a fireman who is stationed at the forest. As it is the dry season, fires would auomatically start. It is the player's job to limit the spread of said fires before help arrives. If the fires spread beyond a certain point, it is determined that the forest will be beyond saving.
// The blue div represents the player. The green div represents the trees. A fire is highighted by a red div.
// Time left is highlighted by the timer. Once 50% of the forest is on fire, the player loses the game.
//fire starts in two ways. They either start randomly, or spread via wind from existing fires. The wind blows in the northwest direction.


window.onload = function () {
    document.getElementById("startButton").addEventListener("click", startGame)
};

window.addEventListener("keydown", function (e) {
    // arrow keys
    if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

document.addEventListener('keydown', playerMove);

hoverStart();

function countdown() {
    if (time > 0) {
        time--;
    } else if (time === 0) {
        run = false;
    }
    timeLeft.innerHTML = time;
}

function checkStatus() {
    var fireStatus = document.querySelectorAll(".fire");
    var firePercentage = Math.round((fireStatus.length / (playArea * playArea)) * 100)
    fireLeft.innerHTML = firePercentage;
    if (time <= 0) {
        message.innerHTML = "You win!";
        myStopFunction();
    } else if (fireStatus.length >= fireTreshold) {
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
    generatingFire = setInterval(startFire, 4000);
}

function fireSpreader() {
    spreadingFire = setInterval(spreadFire, 12000);
}

function countingDown() {
    counter = setInterval(countdown, 1000);
}

function statusUpdate() {
    updatingStatus = setInterval(checkStatus, 50);
}

// this function literally stops and clears everything when the game meets the ending conditions
function myStopFunction() {
    clearInterval(settingPlayer);
    clearInterval(removingPlayer);
    clearInterval(generatingFire);
    clearInterval(spreadingFire);
    clearInterval(counter);
    clearInterval(updatingStatus);
    stopWordMatch();
    clearGame();
    typingOn = false;
    currentWord.innerHTML = "";
    wordInput.value = "";
    document.querySelector("#game-area").style.padding = "0";
    hideItems();
}

//This is the function which literally starts everything when the player clicks the 'Start Game button. Generally, the fire and map mechanics are in the 'main.js' file while the typing mechanics are in the 'typing.js' file
function startGame() {
    for (var i = 0; i < playArea; i++) {
        var rowDiv = document.createElement('div');
        rowDiv.className = "row";
        rowDiv.id = "row" + i;
        gameArea.appendChild(rowDiv);
        var currentRow = document.querySelectorAll(".row")[i];
        for (var j = 0; j < playArea; j++) {
            var cellDiv = document.createElement('div');
            cellDiv.className = "cell";
            var rowIndex;
            var cellIndex;
            if ((i < 10) && (j < 10)) {
                cellDiv.id = "row0" + i + "cell0" + j;
                currentRow.appendChild(cellDiv);
            } else if (i < 10) {
                cellDiv.id = "row0" + i + "cell" + j;
                currentRow.appendChild(cellDiv);
            } else if (j < 10) {
                cellDiv.id = "row" + i + "cell0" + j;
                currentRow.appendChild(cellDiv);
            } else {
                cellDiv.id = "row" + i + "cell" + j;
                currentRow.appendChild(cellDiv);
            }
        }
    }
    time = 180;
    score = 0;
    hideItems();
    setPlayer();
    removePlayer();
    fireGenerator();
    fireSpreader();
    countingDown();
    statusUpdate();
    document.querySelector("#game-area").style.padding = "1%";
    message.innerHTML = "";
    document.querySelector("input").style.backgroundColor = "white";
}