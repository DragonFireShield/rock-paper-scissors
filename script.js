const hands = ['rock', 'paper', 'scissors'];
const heading = document.createElement('h1');
const choiceDiv = document.createElement('div');
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
const resultComputer = document.createElement('p');
const resultPlayer = document.createElement('p');
const resultComputerScore = document.createElement('p');
const resultPlayerScore = document.createElement('p');

heading.textContent = 'Rock, Paper, Scissors!';
rockButton.textContent = 'Rock';
paperButton.textContent = 'Paper';
scissorsButton.textContent = 'Scissors';
resultComputer.textContent = '?';
resultPlayer.textContent = '?';
resultComputerScore.textContent = '0';
resultPlayerScore.textContent = '0';

document.body.appendChild(heading); 
document.body.appendChild(choiceDiv)
choiceDiv.appendChild(rockButton)
choiceDiv.appendChild(paperButton)
choiceDiv.appendChild(scissorsButton)
document.body.appendChild(resultComputer);  
document.body.appendChild(resultPlayer);  
document.body.appendChild(resultComputerScore);  
document.body.appendChild(resultPlayerScore);  

choiceDiv.addEventListener('click', (e) => playRound(getComputerChoice(), e.target.textContent.toLowerCase()))

function getComputerChoice() {
    const random = Number(Math.floor(Math.random() * 3));
    const choice = hands[random];
    return choice;
}

// function getInput() {
//     let input = '';
//     do {
//         input = prompt("Rock, paper, scissors? ");    
//     } while (!hands.includes(input.toLowerCase()));
//     return input;
// }

function playRound(computerSelection, playerSelection) {
    resultComputer.textContent = computerSelection;
    resultPlayer.textContent = playerSelection;
    if (computerSelection === 'rock' && playerSelection === 'paper') {
        playerScore++;
        console.log(`computerSelection: ${computerSelection}`, `playerSelection: ${playerSelection}`);
        resultComputerScore.textContent = computerScore;
        resultPlayerScore.textContent = playerScore;
        return "You win! Paper beats rock.";
    } else if (computerSelection === 'paper' && playerSelection === 'scissors'){
        playerScore++;
        console.log(`computerSelection: ${computerSelection}`, `playerSelection: ${playerSelection}`);
        resultComputerScore.textContent = computerScore;
        resultPlayerScore.textContent = playerScore;
        return "You win! Scissors beats paper.";
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        playerScore++;
        console.log(`computerSelection: ${computerSelection}`, `playerSelection: ${playerSelection}`);
        resultComputerScore.textContent = computerScore;
        resultPlayerScore.textContent = playerScore;
        return "You win! Rock beats scissors.";
    } else if (computerSelection !== playerSelection) {
        computerScore++;
        console.log(`computerSelection: ${computerSelection}`, `playerSelection: ${playerSelection}`);
        resultComputerScore.textContent = computerScore;
        resultPlayerScore.textContent = playerScore;
        return `You lose!`;
    } else {
        console.log(`computerSelection: ${computerSelection}`, `playerSelection: ${playerSelection}`);
        resultComputerScore.textContent = computerScore;
        resultPlayerScore.textContent = playerScore;
        return `It's a draw! You: ${playerSelection}, Computer: ${computerSelection}`;
    }
}

let playerScore = 0;
let computerScore = 0;

// function game() {
//     playerScore = 0;
//     computerScore = 0;

//     for (let index = 0; index < 5; index++) {
//         const computerSelection = getComputerChoice();
//         const playerSelection = getInput();
//         console.log(playRound(computerSelection, playerSelection), `playerScore: ${playerScore}`, `computerScore: ${computerScore}`);
//     }

//     if (playerScore === computerScore) {
//         console.log("It's a draw!!");
//     } else {
//         const winner = playerScore > computerScore ? 'Player' : 'Computer';
//         const winnerScore = playerScore > computerScore ? playerScore : computerScore;
//         console.log(`${winner} wins with a score of ${winnerScore}`);
//     }
// }

// console.log(game());