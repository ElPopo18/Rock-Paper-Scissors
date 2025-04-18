let computer;
let human = parseInt(prompt("Rock = 1, Paper = 2, Scissors = 3!!"));

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
    if(human == 1){
        return humanChoice = ("Rock");
    } else if (human == 2){
        return humanChoice = ("Paper");
    } else {
        return humanChoice = ("Scissors");
    }
}