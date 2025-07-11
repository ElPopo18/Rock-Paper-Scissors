document.addEventListener('DOMContentLoaded', function () {
    function getComputerChoices() {

        let computer = Math.floor(Math.random() * 3) + 1;
        if(computer == 1){
            computer = ("Rock");
            return computer;
        } else if(computer == 2){
            computer = ("Paper");
            return computer;
        } else {
            computer = ("Scissors");
            return computer;
        }
        
    }

    function playRound(humanChoice) {

        let div = document.querySelector(".roundResults");

        rounds++;

        if(rounds > 1){
            while (div.firstChild) {
                div.removeChild(div.firstChild);
            }
        }

        let computerChoice = getComputerChoices();

        let humanResult = document.createElement("p");
        let computerResult = document.createElement("p");
        let winner = document.createElement("p");

        humanResult.textContent = `You choose: ${humanChoice}`;
        computerResult.textContent = `The computer choose: ${computerChoice}`;

        div.appendChild(humanResult);
        div.appendChild(computerResult);
        div.appendChild(winner);

        if(humanChoice == ("Rock") && computerChoice == ("Scissors")){
            winner.textContent = "You won!";
            result = 'human';
            scores(result);
        } else if (humanChoice == ("Scissors") && computerChoice == ("Paper")){
            winner.textContent = "You won!";
            result = 'human';
            scores(result);
        } else if (humanChoice == ("Paper") && computerChoice == ("Rock")){
            winner.textContent = "You won!";
            result = 'human';
            scores(result);
        } else if (humanChoice == computerChoice){
            winner.textContent = "It's a tie!";
            result = 'tie';
            scores(result);
        } else {
            winner.textContent = "You lost!";
            result = 'computer';
            scores(result);
        }
    }

    function scores(result){

        let resultScreen = document.querySelector(".resultScreen")

        if(rounds > 1){
            while (resultScreen.firstChild) {
                resultScreen.removeChild(resultScreen.firstChild);
            }
        }
        
        let winnerScreen = document.createElement("p");
        let textHuman = document.createElement("p");
        let textComputer = document.createElement("p");

        if(result == 'human'){
            ++humanScore;
        }else if(result == 'computer'){
            ++computerScore;
        }

        textHuman.textContent = `Your score: ${humanScore}`;
        textComputer.textContent = `The computer's score: ${computerScore}`;

        resultScreen.appendChild(textHuman);
        resultScreen.appendChild(textComputer);
        resultScreen.appendChild(winnerScreen);

        if(humanScore == 5 || computerScore == 5){
            if(humanScore > computerScore){
                winnerScreen.textContent = "You won the game! Youre the Rock, Paper, Scissors champion!!! :D"
            }else{
                winnerScreen.textContent = "You lost the game… The computer won :("
            }
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }
    }

    let rounds = 0;
    let humanScore = 0;
    let computerScore = 0;

    let rock = document.querySelector(".rock")
    rock.addEventListener('click', (e) => {
        human = ("Rock");
        playRound(human);
    })

    let paper = document.querySelector(".paper")
    paper.addEventListener('click', (e) => {
        human = ("Paper");
        playRound(human);
    })

    let scissors = document.querySelector(".scissors")
    scissors.addEventListener('click', (e) => {
        human = ("Scissors");
        playRound(human);
    })
            

})