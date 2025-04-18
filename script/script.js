let computer;
let computerScore = 0;
let human = prompt("Rock = 1, Paper = 2, Scissors = 3!!");
let humanScore = 0;

getComputerChoice();
console.log(getHumanChoice(human));

function getComputerChoice() {
    let computerChoice; 
    computer = Math.floor(Math.random() * 3) + 1;

    if(computer == 1){
        return computerChoice = ("Rock");
    } else if(computer == 2){
        return computerChoice = ("Paper");
    } else {
        return computerChoice = ("Scissors");
    }
}

function getHumanChoice() {
    let humanChoice;
    if(human.toLowerCase() == ("rock")){
        return humanChoice = ("Rock");
    } else if (human.toLowerCase() == ("paper")){
        return humanChoice = ("Paper");
    } else if (human.toLowerCase() == ("scissors")){
        return humanChoice = ("Scissors");
    } else {
        console.log("Please refresh and enter a rock, paper or scissors!");
    }
}