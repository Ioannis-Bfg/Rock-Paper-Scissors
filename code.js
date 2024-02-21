
const plays = ['rock', 'paper', 'scissors'];
let playerCount=0;
let cpuCount=0;

function getComputerChoice() {
    let i = Math.floor(Math.random() * 3);
    let choice = plays[i];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    console.log('Player : ' + playerSelection);
    console.log('CPU : ' + computerSelection);
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return `Draw! ${playerSelection} and ${computerSelection} are the same`;
        }
        else if (computerSelection === 'paper') {
            ++cpuCount;
            return `You lost! ${playerSelection} loses to ${computerSelection}`;
        }
        else if (computerSelection === 'scissors') {
            ++playerCount;
            return `You Won! ${playerSelection} beats ${computerSelection}`;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            return `Draw! ${playerSelection} and ${computerSelection} are the same`;
        }
        else if (computerSelection === 'scissors') {
            ++cpuCount;
            return `You lost! ${playerSelection} loses to ${computerSelection}`;
        }
        else if (computerSelection === 'rock') {
            ++playerCount;
            return `You Won! ${playerSelection} beats ${computerSelection}`;
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'scissors') {
            return `Draw! ${playerSelection} and ${computerSelection} are the same`;
        }
        else if (computerSelection === 'rock') {
            ++cpuCount;
            return `You lost! ${playerSelection} loses to ${computerSelection}`;
        }
        else if (computerSelection === 'paper') {
            ++playerCount;
            return `You Won! ${playerSelection} beats ${computerSelection}`;
        }
    }
    else {
        return 'error';
    }
}

function playGame() {
    let playerSelection = prompt('What is your move?');
    playerSelection = playerSelection.toLowerCase();
    if (plays.includes(playerSelection)){
        let computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));
    } else {
        alert('Wrong try again!');
        playGame();
    }
}

playGame()
playGame()
playGame()
playGame()
playGame()
alert(`Player score ${playerCount}\nCPU score ${cpuCount}`);