var currentWord = document.querySelector(".currentWord");

var wordInput = document.querySelector(".playerInput");

var run;

var wordList = ["spotless", "land", "abundant", "balance", "arrive", "furry", "attach", "punish", "shape", "festive", "dare","monitor", "program", "application", "keyboard", "javascript", "gaming", "network", "brash", "complete", "complete", "legal", "wrench", "untidy", "moan", "march", "aware", "scare", "curved", "scientific", "cub", "stretch", "ducks", "collar", "material", "glow", "nerve", "surprise", "untidy", "wave", "letter", "wren", "choke", "chivalrous", "bedroom", "squalid", "kittens", "godly", "mixed", "mitten", "ladybug", "pack", "grease", "activity", "acceptable", "meek", "divergent", "contain", "statuesque", "bead", "mellow", "short", "short", "paste", "lewd", "number", "truculent", "ruin", "shocking", "tricky", "line", "bathe", "toothsome", "ossified", "misty", "remain", "intend", "wonder", "languid", "scattered", "longing", "roof", "incompetent", "whimsical", "humor", "film", "amazing", "afraid", "lumber", "tangy", "groan", "fail", "present", "messy", "handle", "market", "limping", "brown", "inject", "measure", "fine", "conscious", "correct", "brave", "intelligent", "kind"];

function startType() {
    showWord(wordList);
    wordInput.addEventListener("input", wordMatch);
    message.innerHTML = "";
    wordInput.value="";
    return wordMatch;
}

function showWord(wordList) {
    var wordIndex = Math.floor(Math.random() * wordList.length);
    currentWord.innerHTML = wordList[wordIndex];
}

function wordMatch(wordInput) {
    if (matchSuccess()) {
        // showWord(wordList);
        wordInput.value="";
        currentWord.innerHTML = "";
        score++;
    }
    scoreDisplay.innerHTML = score;
}

function matchSuccess() {
    if (wordInput.value == currentWord.innerHTML) {
        message.innerHTML = "Correct!";
        return true;
    } else {
        message.innerHTML = "";
        return false;
    }
}

