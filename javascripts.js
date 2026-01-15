// 一个函数，随机返回电脑剪刀石头布结果

const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

let computerChoice;
let humanChoice;

function getComputerChoice() {

    randomNum = Math.floor(Math.random() * 100) % 3;
    if (randomNum == 0) {
        return "rock";
    }
    else if (randomNum == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    humanChoice = prompt("Rock Paper Scissors! what you gonna go?");
    
}


console.log(getComputerChoice());