
function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}
// console.log(getComputerChoice()) 

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


function playRound(playerSelection, computerSelection){
    let result = "";

    if (playerSelection === computerSelection){
        result = "It's a tie!";
    }
    else {
        switch (playerSelection){
            case "Rock": 
            result = (computerSelection === "Scissors") ? "You win! Rock beats scissors." : "You lose! Paper beats rock."
            break;
            case "Paper":
            result = (computerSelection === "Rock") ? "You win! Paper beats rock." : "You lose! Scissors beats paper."
            break;
            case "Scissors": 
            result = (computerSelection === "Paper") ? "You win! Scissors beats paper." : "You lose! Rock beats scissors."
            break;
        }
    }
    return result;
}


const computerSelection = getComputerChoice(); 
const playerSelection = getPlayerChoice();
console.log(playRound(playerSelection, computerSelection))


//Write a new function called playGame(). Use the previous function inside of this one
//to play a five round game that keeps score and reports a winner or loser at the end.


