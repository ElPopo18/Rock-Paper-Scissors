let computer;
let computerChoice; 

function getComputerChoice() {
    computer = Math.floor(Math.random() * 3) + 1;

    if(computer == 1){
        return computerChoice = ("Rock");
    } else if(computer == 2){
        return computerChoice = ("Paper");
    } else {
        return computerChoice = ("Scissors");
    }
}

console.log(getComputerChoice());