// 一个函数，随机返回电脑剪刀石头布结果
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock Paper Scissors! what you gonna go?");
    return humanChoice.toLowerCase();
}


function playRound(humanChoice, computerChoice) {
   if (humanChoice === "rock") {
    switch (computerChoice) {
        case "rock":
            console.log("tie!");
            break;
        case "paper":
            humanScore -= 1;
            computerScore +=1;
            console.log('human lose, -1 score');
            break;
        case "scissors":
            humanScore += 1;
            computerScore -=1;
            console.log("human win, +1 score");
            break;
    }
   }
   else if (humanChoice === "paper") {
    switch (computerChoice) {
        case "rock":
            humanScore += 1;
            computerScore -= 1;
            console.log("human win +1 score");
            break;
        case "paper":
            console.log("tie!");
            break;
        case "scissors":
            humanScore -= 1;
            computerScore += 1;
            console.log("human lose, -1 score");
            break;
    }
   }
   else {
    switch (computerChoice) {
        case "rock":
            humanScore -= 1;
            computerScore += 1;
            console.log("human lose -1 score");
            break;
        case "paper":
            humanScore += 1;
            computerScore -= 1;
            console.log("human win +1 score");
            break;
        case "scissors":
            console.log("tie");
            break;
    }
   }

   console.log(`current socre is
    human: ${humanScore}
    computer: ${computerScore}`);
    return;
}

function playGame() {

    for (let i = 0; i< 5; i++) {
        playRound(getHumanChoice(),getComputerChoice());
    }
    
}

playGame();
