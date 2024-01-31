
function getComputerChoice(computerPlay){
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}
console.log(getComputerChoice())

function playRound(playerSelection, computerSelection){
    // const choices = ["Rock", "Paper", "Scissors"];
 
    // let result = "";

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
}

const computerSelection = getComputerChoice(); //required to define computerSelection
const playerSelection = "Rock"; //required to define playerSelection
console.log(playRound())
