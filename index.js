
function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}
// console.log(getComputerChoice()) 

function getPlayerChoice(){
    let validatedInput = false; //if the player doesn't input/does it wrong, it'll ask again.
    while(validatedInput == false){ //to do a loop while input is false. ie person mispelled or whatever.
        const choice = prompt("Choose either rock, paper, or scissors"); // these are the possible inputs.
        if(choice == null){ //meaning if input is empty, we'll continue asking.
            continue;
        }
        //to check if user gave us a valid input (rock, paper, or scissors)
        const choiceInLower = choice.toLowerCase(); //txt.toLowerCase() converts a string to lowercase.
        // now we want to check if the input was even from our choices. so we'll use includes() array.
        if(options.includes(choiceInLower)){
            validatedInput = true; //this would stop our loop.
            return choiceInLower; //and now we can change out our constPlayerSelection below from "rock"!!
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


