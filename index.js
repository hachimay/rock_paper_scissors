
const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}
// console.log(getComputerChoice()) ** works


function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie";
    }
    else if( // in favor of player, therefore return "player"
        (playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "scissors" && computerSelection == "paper") || 
        (playerSelection == "paper" && computerSelection == "rock") 
    ){
        return "Player"; 
    }
    else {
        return "Computer"; 
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie"){
        return "It's a tie!" 
    }
    else if(result == "Player"){
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}


function getPlayerChoice(){
    let validatedInput = false; 
    while(validatedInput == false){ 
        const option = prompt("Choose either rock, paper, or scissors"); 
        if(option== null){ 
            continue;
        }
       
        const optionInLower = option.toLowerCase(); 
    
        if(choices.includes(optionInLower)){
            validatedInput = true; 
            return optionInLower; 
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;

    console.log("Welcome!") //if we want it to say this before each playRound.
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection)); 
  
        if (checkWinner(playerSelection, computerSelection) === "Player"){
            scorePlayer++; 
        } else if (checkWinner(playerSelection, computerSelection) === "Computer"){
            scoreComputer++; 
        }
    }

    console.log("Game Over")
    if(scorePlayer > scoreComputer){
        console.log("Player was the winner!");
    }
    else if (scorePlayer < scoreComputer){
        console.log("Computer was the winner!");
    }
    else {
        console.log("We have a tie!")
    }
}

game()
// const playerSelection = getPlayerChoice();
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));




