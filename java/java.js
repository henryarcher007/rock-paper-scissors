
getPlayerChoice();

function getComputerChoice(){
        
    let num = 0;

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

};

function getPlayerChoice(){
   
    let rock = document.getElementById('rock')
    let paper = document.getElementById('paper')
    let scissor = document.getElementById('scissor')
    let round = 1


    rock.addEventListener('click', () =>{
        playRound("rock", getComputerChoice() )
        roundCount(round ++);
    });

    paper.addEventListener('click', () =>{
        playRound("paper", getComputerChoice())
        roundCount(round ++);
    });
    
    scissor.addEventListener('click', () =>{
        playRound("scissor", getComputerChoice())
        roundCount(round ++);
    });
}

let you = 0
let computer = 0

function playRound(playerSelection, computerSelection){
    let message = 0
    if(playerSelection == computerSelection){
        displayPlayRound(`Tie! You and the computer selected ${playerSelection}`)
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper'){
        computer ++;
        displayPlayRound("You lose! Paper beats Rock.")
    }
    else if(playerSelection == 'paper' && computerSelection == 'scissor'){
        computer ++;
        displayPlayRound("You lose! Scissors beats Paper.")
    }
    else if(playerSelection == 'scissor' && computerSelection == 'rock'){
        computer ++;
        displayPlayRound("You lose! Rock beats Scissors.")
    }
    else if(computerSelection == 'scissor' && playerSelection == 'rock'){
        you ++;
        displayPlayRound("You win! Rock beats Scissors.")
    }
    else if(computerSelection == 'rock' && playerSelection == 'paper'){
        you ++;
        displayPlayRound("You Win! Paper beats Scissors.")
    }
    else if(computerSelection == 'paper' && playerSelection == 'scissor'){
        you ++;
        displayPlayRound("You Win! Scissors beats Paper.")
    }
    
};

function displayPlayRound(message){
    const statement = document.querySelector('#statement')
    statement.textContent = message
}


function roundCount(round){
    displayRound();
    
    if (round >= 5){
        console.log("GAME OVER")
        winnerLoser(you, computer)
    }
    function displayRound(){
        if (round < 6){
            const rounds = document.querySelector('#rounds');
            rounds.textContent = `Round ${round};`
        }
    };
}



// winner/loser declarer
function winnerLoser(you, computer){
if (you > computer){
    return console.log('You win the game!')
}   
else{
    return console.log('You lose the game!')
}
};