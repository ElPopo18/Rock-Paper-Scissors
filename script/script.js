playGame();

function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3) + 1;
    if(computer == 1){
        return computer = ("The computer choose: Rock!");
    } else if(computer == 2){
        return computer = ("The computer choose: Paper!");
    } else {
        return computer = ("The computer choose: Scissors!");
    }
}

function getHumanChoice() {
    let human = prompt("Rock = 1, Paper = 2, Scissors = 3!!");
    if(human.toLowerCase() == ("rock")){
        return human = ("You choose: Rock!");
    } else if (human.toLowerCase() == ("paper")){
        return human = ("You choose: Paper!");
    } else if (human.toLowerCase() == ("scissors")){
        return human = ("You choose: Scissors!");
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

        console.log(computerSelection);
        console.log(humanSelection);

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
    if(humanChoice == ("You choose: Rock!") && computerChoice == ("The computer choose: Scissors!")){
        console.log("You won!");
        return 'human';
    } else if (humanChoice == ("You choose: Scissors!") && computerChoice == ("The computer choose: Paper!")){
        console.log("You won!")
        return 'human';
    } else if (humanChoice == ("You choose: Paper!") && computerChoice == ("The computer choose: Scissors!")){
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