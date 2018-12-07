var hoverButton =  function() {
    document.getElementById("restartButton").addEventListener("mouseover", function(){
    document.getElementById("restartButton").style.backgroundColor = "white";
    document.getElementById("restartButton").style.color = "black";
    })
    document.getElementById("restartButton").addEventListener("mouseout", function(){
    document.getElementById("restartButton").style.backgroundColor = "black";
      document.getElementById("restartButton").style.color = "white";
    })
}

hoverButton();

//  var restartButton = function() {
//     document.getElementById("restartButton").addEventListener("click", function(){
//         turn = 0;
//         for(var i = 0; i < entryItems.length; i++){
//         entryItems[i].textContent="?";
//         entryItems[i].style.color="black";
//         }
//         // disappearButton();
//         document.getElementById("restartButton").style.backgroundColor = "white";
//         document.querySelector("#result").textContent = "Game restarted.";
//     })
// };

// restartButton();