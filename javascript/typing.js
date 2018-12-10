// var currentWord = document.querySelector(".currentWord");

// var wordInput = document.querySelector(".playerInput");

// var message = document.querySelector(".message");

// var timeLeft = document.querySelector(".timeLeft");

// var scoreDisplay = document.querySelector(".scoreDisplay");

// var time = 5;

// var score = 0;

// var run;

// var wordList = ["spotless", "land", "abundant", "balance", "arrive", "furry", "attach", "punish", "shape", "festive", "dare"];

// function startGame() {
//     showWord(wordList);
//     wordInput.addEventListener("input", wordMatch);
//     setInterval(countdown, 1000);
//     setInterval(checkStatus, 50);
//     message.innerHTML = "";
// }

// function showWord(wordList) {
//     var wordIndex = Math.floor(Math.random() * wordList.length);
//     currentWord.innerHTML = wordList[wordIndex];
// }

// function countdown() {
//     if (time > 0) {
//         time --;
//     } else if (time === 0) {
//         run = false;
//     }
//     timeLeft.innerHTML = time;
// }

// function checkStatus() {
//     if ((!run) && (time === 0)) {
//         message.innerHTML = "Game Over!";
//     }
// }

// function wordMatch(wordInput) {
//     if (matchSuccess()) {
//         run = true;
//         time = 6;
//         showWord(wordList);
//         wordInput.value='';
//         score++;
//     }
//     scoreDisplay.innerHTML = score;
// }

// function matchSuccess() {
//     if (wordInput.value == currentWord.innerHTML) {
//         message.innerHTML = "Correct!";
//         return true;
//     } else {
//         message.innerHTML = "";
//         return false;
//     }
// }

// function hoverButton() {
//     document.getElementById("startButton").addEventListener("mouseover", function(){
//     document.getElementById("startButton").style.backgroundColor = "white";
//     document.getElementById("startButton").style.color = "black";
//     })
//     document.getElementById("startButton").addEventListener("mouseout", function(){
//     document.getElementById("startButton").style.backgroundColor = "black";
//       document.getElementById("startButton").style.color = "white";
//     })
// }

// hoverButton();

// function startButton() {
//     document.getElementById("startButton").addEventListener("click", startGame)
//     };

// startButton();
