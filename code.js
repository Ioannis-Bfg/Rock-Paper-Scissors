
const plays = ['rock', 'paper', 'scissors'];
let playerCount=0;
let cpuCount=0;
let button1=document.querySelector('#rock');
let button2=document.querySelector('#paper');
let button3=document.querySelector('#scissors');
let otp=document.querySelector('#output-text');
let pc_o=document.querySelector('#pc');
let cc_o=document.querySelector('#cc');
let otp_box=document.querySelector('.output');

button1.addEventListener('click',()=>{
    // otp.textContent=''
    let computerSelection = getComputerChoice();
    let temp=playRound('rock',computerSelection);
    otp.textContent=temp;
    gameCheck();
    cc_o.textContent=cpuCount;
    pc_o.textContent=playerCount;
})

button2.addEventListener('click',()=>{
    // otp.textContent=''
    let computerSelection = getComputerChoice();
    let temp=playRound('paper',computerSelection);
    otp.textContent=temp;
    gameCheck();
    cc_o.textContent=cpuCount;
    pc_o.textContent=playerCount;
})

button3.addEventListener('click',()=>{
    // otp.textContent=''
    let computerSelection = getComputerChoice();
    let temp=playRound('scissors',computerSelection);
    otp.textContent=temp;
    gameCheck();
    cc_o.textContent=cpuCount;
    pc_o.textContent=playerCount;
})

function gameCheck(){
    if(playerCount===5){
        alert('You won the match! \n Click ok to reset and play again !');
        playerCount=0;
        cpuCount=0;
    } else if(cpuCount==5){
        alert('You lost the match :(  \n Click ok to reset and play again !')
        playerCount=0;
        cpuCount=0;
    } else {
        return 0;
    }
}
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
            otp_box.style.backgroundColor = 'blue';
            return `Draw! ${playerSelection} and ${computerSelection} are the same`;
        }
        else if (computerSelection === 'paper') {
            ++cpuCount;
            otp_box.style.backgroundColor = 'red';
            return `You lost! ${playerSelection} loses to ${computerSelection}`;
        }
        else if (computerSelection === 'scissors') {
            ++playerCount;
            otp_box.style.backgroundColor = 'green';
            return `You Won! ${playerSelection} beats ${computerSelection}`;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            otp_box.style.backgroundColor = 'blue';
            return `Draw! ${playerSelection} and ${computerSelection} are the same`;
        }
        else if (computerSelection === 'scissors') {
            ++cpuCount;
            otp_box.style.backgroundColor = 'red';
            return `You lost! ${playerSelection} loses to ${computerSelection}`;
        }
        else if (computerSelection === 'rock') {
            ++playerCount;
            otp_box.style.backgroundColor = 'green';
            return `You Won! ${playerSelection} beats ${computerSelection}`;
        }
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'scissors') {
            otp_box.style.backgroundColor = 'blue';
            return `Draw! ${playerSelection} and ${computerSelection} are the same`;
        }
        else if (computerSelection === 'rock') {
            ++cpuCount;
            otp_box.style.backgroundColor = 'red';
            return `You lost! ${playerSelection} loses to ${computerSelection}`;
        }
        else if (computerSelection === 'paper') {
            ++playerCount;
            otp_box.style.backgroundColor = 'green';
            return `You Won! ${playerSelection} beats ${computerSelection}`;
        }
    }
    else {
        return 'error';
    }
}

// function playGame() {
//     let playerSelection = prompt('What is your move?');
//     playerSelection = playerSelection.toLowerCase();
//     if (plays.includes(playerSelection)){
//         let computerSelection = getComputerChoice();
//         alert(playRound(playerSelection, computerSelection));
//     } else {
//         alert('Wrong try again!');
//         playGame();
//     }
// }

