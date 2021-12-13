let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//generate random number for computer and human to guess 0 to 9
function generateTarget() {
    return Math.floor(Math.random()*10)
}


//confirming that generate target works
console.log('Secret Target number:' + generateTarget());

//determine who's guess is closer to the target number

function compareGuesses(human, computer, target) {
let humanDistance = target - human;
if (humanDistance <0) {
    humanDistance *= -1;
};
let computerDistance = target - computer;
if (computerDistance<0) {
    computerDistance *= -1;
};
return humanDistance
return computerDistance
}

compareGuesses(2, 8, target)





/*
function generateTarget()  {
    return Math.floor(Math.random()*10)
};

console.log(generateTarget())

function compareGuesses(human, computer, secretTarget) {
const computerDiff = Math.abs(secretTarget-computer);
const humanDiff = Math.abs(secretTarget-human);
if (humanDiff <= computerDiff) {
    return true
} else {
    return false
}
}

function updateScore(string1) {
    if (string1 === 'human') {
        humanScore += 1
    } else if (string1 === 'computer') {
        computerScore +=1
    }
};

function advanceRound() {
    currentRoundNumber +=1
}

*/
