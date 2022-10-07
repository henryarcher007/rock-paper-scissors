
let computerSelection = 0
let num = 0
let result = 0
let message = 0

function getComputerChoice(){
    function randomNumber(){
        return Math.floor(Math.random()* 3);
    };
    num = randomNumber();
    if (num == 0){
        return 'rock'
    }
    else if (num == 1){
        return 'paper'
    }
    else if (num == 2){
        return 'scissor'
    }

}

computerSelection = getComputerChoice()
console.log(computerSelection)
console.log(num)


function playRound(){
    for (let i = 0; i <= 5; i++) {
        i = game()

    }
}

function game(){
    
    let getPlayerChoice = prompt("Rock, Paper, or Scissor?")
    let playerSelection = getPlayerChoice.toLowerCase()

        console.log(playerSelection)
    
    if(playerSelection == computerSelection){
        return message = alert(`Tie! You and the computer selected ${playerSelection}`)
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper'){
        return message = alert("You lose! Paper beats Rock.")
    }
    else if(playerSelection == 'paper' && computerSelection == 'scissor'){
        return message = alert("You lose! Scissors beats Paper.")
    }
    else if(playerSelection == 'scissor' && computerSelection == 'rock'){
        return message = alert("You lose! Rock beats Scissors.")
    }
    else if(computerSelection == 'scissor' && playerSelection == 'rock'){
        return message = alert("You win! Rock beats Scissors.")
    }
    else if(computerSelection == 'rock' && playerSelection == 'paper'){
        return message = alert("You Win! Paper beats Scissors.")
    }
    else if(computerSelection == 'paper' && playerSelection == 'scissor'){
        return message = alert("You Win! Scissors beats Paper.")
    }
}



result = game()