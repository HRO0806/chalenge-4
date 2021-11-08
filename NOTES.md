Local Storage
getItem
setItem

var allScores = [];

var newScore = {
    initials: "SS",
    score: 5
}

allScores.push(newScore);

localStorage.setItem("allScores", allScores)
localStorage.getItem("allScores")