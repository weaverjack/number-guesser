let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random()*10)
}

//confirming that generate target works this may produce a different number every time invoked.
//console.log('target number = ' + generateTarget());

//assign variable to generateTarget so it can be passed into function for comparing guesses
const target = generateTarget();
console.log('secret target' + target)
//determine who's guess is closer to the target number by absolute number

function compareGuesses(human, computer, target) {
    //calculating distance from target
    let humanDistance = target - human;
    //calculating absolute distance
if (humanDistance <0) {
    humanDistance *= -1;
};
//printing it out to test code
console.log(humanDistance);
let computerDistance = target - computer;
if (computerDistance<0) {
    computerDistance *= -1;
};
console.log(computerDistance)
if (computerDistance>=humanDistance) {
    return true
} else {
    return false 
}
};

//updateScore how is parameter getting passed in? in other code supplied by codecademy?

function updateScore(winner) {
    if (winner === human) {
        humanScore++
    } else {
        computerScore++
    }
};

function advanceRound() {
    currentRoundNumber+=1
};

compareGuesses(1, 8, target);
compareGuesses(2, 8, target);
compareGuesses(2, 6, target);



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
