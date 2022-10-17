
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
        return 'rock'
    }
    else if (num == 2){
        return 'scissor'
    }

};

let round = 1

function getPlayerChoice(){
   
    let rock = document.getElementById('rock')
    let paper = document.getElementById('paper')
    let scissor = document.getElementById('scissor')


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
    if(playerSelection == computerSelection){
        displayPlayRound(`Tie! You and the computer selected ${playerSelection}`)
    }
    else if(playerSelection == 'rock' && computerSelection == 'paper'){
        computer ++;
        displayPlayRound("You Lose! Paper beats Rock.")
    }
    else if(playerSelection == 'paper' && computerSelection == 'scissor'){
        computer ++;
        displayPlayRound("You Lose! Scissors beats Paper.")
    }
    else if(playerSelection == 'scissor' && computerSelection == 'rock'){
        computer ++;
        displayPlayRound("You Lose! Rock beats Scissors.")
    }
    else if(computerSelection == 'scissor' && playerSelection == 'rock'){
        you ++;
        displayPlayRound("You Win! Rock beats Scissors.")
    }
    else if(computerSelection == 'rock' && playerSelection == 'paper'){
        you ++;
        displayPlayRound("You Win! Paper beats Rock.")
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
    if (round <= 5){
        const rounds = document.querySelector('#rounds');
        rounds.textContent = `${round}`;
    }
    else{
        winnerLoser(you,computer);
    }
};



// winner/loser declarer
function winnerLoser(you, computer){
if (you > computer){
    displayWinnerLoser('You win the game! Try again?')
}   
else{
    displayWinnerLoser('You lose the game! Try again?')
}
};

function displayWinnerLoser(message){
    alert(message);
    roundCount(round = 1);
    you = 0;
    computer = 0;
};
