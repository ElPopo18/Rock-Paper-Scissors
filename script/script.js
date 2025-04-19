playGame();

function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3) + 1;
    if(computer == 1){
        console.log("The computer choose: Rock!");
        return computer = ("Rock");
    } else if(computer == 2){
        console.log("The computer choose: Paper!")
        return computer = ("Paper");
    } else {
        console.log("The computer choose: Scissors!")
        return computer = ("Scissors");
    }
}

function getHumanChoice() {
    let human = prompt("Rock = 1, Paper = 2, Scissors = 3!!");
    if(human.toLowerCase() == ("rock")){
        console.log("You choose: Rock!");
        return human = ("Rock");
    } else if (human.toLowerCase() == ("paper")){
        console.log("You choose: Paper!");
        return human = ("Paper");
    } else if (human.toLowerCase() == ("scissors")){
        console.log("You choose: Scissors!");
        return human = ("Scissors");
    } else {
        console.log("Please refresh and enter a rock, paper or scissors!");
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    const rounds = 5;

    for(let i = 0; i < rounds; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        let score = playRound(humanSelection, computerSelection, humanScore, computerScore);

        if(score == 'human'){
            ++humanScore;
        }else if(score == 'computer'){
            ++computerScore;
        }
    }

    console.log(`Your score is: ${humanScore}`);
    console.log(`The computer's score is: ${computerScore}`);

    if(humanScore > computerScore){
        console.log("You won the game! Youre the Rock, Paper, Scissors champion!!! :D")
    }else if(humanScore < computerScore){
        console.log("You lost the game… The computer won :(")
    }else{
        console.log("The game ended in a tie!!! :o")
    }

}

function playRound(humanChoice, computerChoice) {
    if(humanChoice == ("Rock") && computerChoice == ("Scissors")){
        console.log("You won!");
        return 'human';
    } else if (humanChoice == ("Scissors") && computerChoice == ("Paper")){
        console.log("You won!")
        return 'human';
    } else if (humanChoice == ("Paper") && computerChoice == ("Rock")){
        console.log("You won!")
        return 'human';
    } else if (humanChoice == computerChoice){
        console.log("It's a tie!");
        return 'tie';
    } else {
        console.log("You lost!");
        return 'computer';
    }
}