
function getComputerChoice(computerPlay){
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}
console.log(getComputerChoice())


function playRound(playerSelection, computerSelection){
    const choices = ["Rock", "Paper", "Scissors"];
    return "";

    if (playerSelection === computerSelection){
        return "It's a tie!";

    }else {
        
        switch (choices){
            case "Rock": (computerSelection === "Scissors") ? "You win! Rock beats scissors." : "You lose! Paper beats rock.";
            break;
            case "Paper": (computerSelection === "Rock") ? "You win! Paper beats rock." : "You lose! Scissors beats paper.";
            break;
            case "Scissors": (computerSelection === "Paper") ? "You win! Scissors beats paper." : "You lose! Rock beats scissors.";
            break;
        }
    }
}

const computerSelection = getComputerChoice();
const playerSelection = "Rock";
console.log(playerSelection, computerSelection);
