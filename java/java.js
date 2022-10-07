
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

let getPlayerChoice = prompt("Rock, Paper, or Scissor?")
let playerSelection = getPlayerChoice.toLowerCase()

console.log(playerSelection)

function rockPaperScissor(){
    if(playerSelection == computerSelection){
        return message = alert("Tie!")
    }
    else if(playerSelection == 'rock'){
        if (computerSelection == 'paper'){
            return message = alert("You lose! Paper beats Rock.")
       }
    }
    else if(playerSelection == 'paper'){
        if (computerSelection == 'scissor'){
            return message = alert("You lose! Scissors beats Paper.")
        }
    }
    else if(playerSelection == 'scissor'){
        if (computerSelection == 'rock'){
            return message = alert("You lose! Rock beats Scissors.")
        }
    }
    else if(computerSelection == 'scissor'){
        if (playerSelection == 'rock'){
            return message = alert("You win! Rock beats Scissors.")
       }
    }
    else if(computerSelection == 'rock'){
        if (playerSelection == 'paper'){
            return message = alert("You Win! Paper beats Scissors.")
        }
    }
    else if(computerSelection == 'paper'){
        if (playerSelection == 'scissor'){
            return message = alert("You Win! Scissors beats Paper.")
        }
    }

}       

result = rockPaperScissor()