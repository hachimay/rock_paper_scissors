
//Your game is going to play against the computer, so begin with a function called 
//getComputerChoice that will randomly return either 'Rock', 'Paper', or 'Scissors'.
//We'll use this function in the game to make the computers play.
//Check with console to make sure it works.


function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}
// console.log(getComputerChoice()) 


//Write a function that plays as single round of Rock Paper Scissors. The function
//should take two parameters- the playerSelection and computerSelection- and then
//return a string that declares the winner or tie of the round.
//Use console to see the results.


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

let computerScore = 0;
let playerScore = 0;
for (let i = 0; i < 5; i++) {
    const playerSelection = "Rock";
    const computerSelection = getComputerChoice();
    console.log(playRound("Rock", getComputerChoice()));
    }
    console.log({results: {
        computerScore,
        playerScore
    }})


// const computerSelection = getComputerChoice(); //create a variable to store computer's choice
// const playerSelection = "Rock"; //create a variable to store player's choice (rock for now)
// console.log(playRound(playerSelection, computerSelection))


//Write a new function called playGame(). Use the previous function inside of this one
//to play a five round game that keeps score and reports a winner or loser at the end.

// function game() {
    //play game 5 times
    // for (let i = 0; i < 5; i++) {
        // const playerSelection = "Rock";
        // const computerSelection = getComputerChoice();
        // call playround function, passing into newly returned values

    // console.log(playRound("Rock", getComputerChoice()));
    // }
// }

