let computerScore = 0;
let humanScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(computerSelection);
console.log(humanSelection);
playRound(humanSelection, computerSelection);

function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3) + 1;
    if(computer == 1){
        return computer = ("Rock");
    } else if(computer == 2){
        return computer = ("Paper");
    } else {
        return computer = ("Scissors");
    }
}

function getHumanChoice() {
    let human = prompt("Rock = 1, Paper = 2, Scissors = 3!!");
    if(human.toLowerCase() == ("rock")){
        return human = ("Rock");
    } else if (human.toLowerCase() == ("paper")){
        return human = ("Paper");
    } else if (human.toLowerCase() == ("scissors")){
        return human = ("Scissors");
    } else {
        console.log("Please refresh and enter a rock, paper or scissors!");
    }
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice == ("Rock") && computerChoice == ("Scissors")){
        humanScore ++;
        console.log("You won!")
    } else if (humanChoice == ("Scissors") && computerChoice == ("Paper")){
        humanScore ++;
        console.log("You won!")
    } else if (humanChoice == ("Paper") && computerChoice == ("Rock")){
        humanScore ++;
        console.log("You won!")
    } else if (humanChoice == computerChoice){
        console.log("It's a tie!");
    } else {
        computerScore ++;
        console.log("You lost!");
    }
}