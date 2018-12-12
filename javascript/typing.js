var currentWord = document.querySelector(".currentWord");

var wordInput = document.querySelector(".playerInput");

var run;

var wordList = ["spotless", "land", "abundant", "balance", "arrive", "furry", "attach", "punish", "shape", "festive", "dare","monitor", "program", "application", "keyboard", "javascript", "gaming", "network", "brash", "complete", "complete", "legal", "wrench", "untidy", "moan", "march", "aware", "scare", "curved", "scientific", "cub", "stretch", "ducks", "collar", "material", "glow", "nerve", "surprise", "untidy", "wave", "letter", "wren", "choke", "chivalrous", "bedroom", "squalid", "kittens", "godly", "mixed", "mitten", "ladybug", "pack", "grease", "activity", "acceptable", "meek", "divergent", "contain", "statuesque", "bead", "mellow", "short", "short", "paste", "number", "truculent", "ruin", "shocking", "tricky", "line", "bathe", "toothsome", "ossified", "misty", "remain", "intend", "wonder", "languid", "scattered", "longing", "roof", "whimsical", "humor", "film", "amazing", "afraid", "lumber", "tangy", "groan", "fail", "present", "messy", "handle", "market", "limping", "brown", "inject", "measure", "fine", "conscious", "correct", "brave", "intelligent", "kind", "distinct", "sleet", "allow", "expect", "cough", "next", "ready", "knot", "vanish", "pack", "sulky", "general", "coal", "regret", "practical", "definite", "curious", "assistance", "turbine", "bicycle", "fury", "sound", "soap", "television", "movies", "yesterday", "today", "tomorrow", "past", "future", "present", "gods", "kings", "queen", "people", "triumph", "event", "listen", "only", "move", "roll", "jump", "hop", "concern", "mark", "language", "array", "call", "back", "bottle", "clean", "canteen", "find", "search", "previous", "next", "forward", "dawn", "dusk", "morning", "afternoon", "evening", "school", "baby", "helper", "rain", "clouds", "moon", "lion", "wolf", "monkey", "dragon", "fish", "rhino", "pure", "water", "drink", "fire", "dry", "weather", "condition", "while", "loop", "determine", "perseverance", "epiphany", "ambivalence", "equanimity", "resolve", "will", "relentless", "flexible", "modern"];

function startType() {
    showWord(wordList);
    wordInput.addEventListener("input", wordMatch);
    wordInput.focus();
    document.querySelector("input").style.backgroundColor = "white";
    wordInput.value="";
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
        typingOn = false;
    }
    scoreDisplay.innerHTML = score;
}

function matchSuccess() {
    if (wordInput.value == currentWord.innerHTML) {
        document.querySelector("input").style.backgroundColor = "#ADD8E6";
        return true;
    } else {
        document.querySelector("input").style.backgroundColor = "white";
        return false;
    }
}

function stopWordMatch() {
wordInput.removeEventListener("input", wordMatch);
}

function startWordMatch() {
    wordInput.addEventListener("input", wordMatch);
    wordInput.focus();
}