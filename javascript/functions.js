
function drawPlayer() {
    var updateRow = playerPosition.row;
    var updateCell = playerPosition.cell;
    var newPosition = "row"+updateRow+"cell"+updateCell;
    var getCell= document.getElementById(newPosition);
    getCell.classList.add("player");
    if (getCell.className == "cell fire player") {
        startType();
        typingOn = true;
        getCell.classList.remove("fire");
        // if (typeResult == true) {
        //     typingOn = false;
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
        if ((playerPosition.row < 0) || (typingOn == true)) {
            playerPosition.row += 1;
        }
    }
// keyCode for right arrow key is 39
    if (e.keyCode==39) {
        playerPosition.cell += 1;
        if ((playerPosition.cell >= playArea)  || (typingOn == true)) {
            playerPosition.cell -= 1;
        }
    }
// keyCode for down arrow key is 40
    if (e.keyCode==40) {
        playerPosition.row += 1;
        if ((playerPosition.row >= playArea) || (typingOn == true)) {
            playerPosition.row -= 1;
        }
    }
// keyCode for left arrow key is 37
    if (e.keyCode==37) {
        playerPosition.cell -= 1;
        if ((playerPosition.cell < 0) || (typingOn == true)) {
            playerPosition.cell += 1;
        }
    }
}

function clearGame() {
    var clearRow =document.querySelectorAll(".row");
    for (var i = 0; i < clearRow.length; i++) {
        clearRow[i].parentNode.removeChild(clearRow[i]);
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
