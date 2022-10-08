
//global variables
let round = 0;
let games = 0;

let computer = 0
let you = 0


playRound()

function game(){
    /*
    the game() function gets the player input and 
    computer input and compares them to see which 
    value will win
    */

    let computerSelection = 0
    
    function getComputerChoice(){
        
        let num = 0

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


    // rockPaperScissors function
    rockPaperScissors()

    function rockPaperScissors(){
        let getPlayerChoice = prompt("Rock, Paper, or Scissor?")
        let playerSelection = getPlayerChoice.toLowerCase()
    
        if(playerSelection == computerSelection){
            return message = console.log(`Tie! You and the computer selected ${playerSelection}`)
        }
        else if(playerSelection == 'rock' && computerSelection == 'paper'){
            computer ++;
            return message = console.log("You lose! Paper beats Rock.")
        }
        else if(playerSelection == 'paper' && computerSelection == 'scissor'){
            computer ++;
            return message = console.log("You lose! Scissors beats Paper.")
        }
        else if(playerSelection == 'scissor' && computerSelection == 'rock'){
            computer ++;
            return message = console.log("You lose! Rock beats Scissors.")
        }
        else if(computerSelection == 'scissor' && playerSelection == 'rock'){
            you ++;
            return message = console.log("You win! Rock beats Scissors.")
        }
        else if(computerSelection == 'rock' && playerSelection == 'paper'){
            you ++;
            return message = console.log("You Win! Paper beats Scissors.")
        }
        else if(computerSelection == 'paper' && playerSelection == 'scissor'){
            you ++;
            return message = console.log("You Win! Scissors beats Paper.")
        }
    }
};

// loop function
function playRound(){
    for (let i = 1; i < 6; i++) {
    game()
    console.log(i);
    };
    if (i = 5)
    return winnerLoser()
};

// winner/loser display
function winnerLoser(){
if (you > computer){
    return console.log('You win the game!')
}
else{
    return console.log('You lose the game!')
}
}