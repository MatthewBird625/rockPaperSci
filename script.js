const choices = ["rock", "scissors", "paper"];
let computerSelection;
let playerSelection;


function computerPlay() {
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function playerPlay() {
    let choice;
    while (true) {
        // choice = prompt("rock, paper or scissors?");
        choice ="rock";
        if (choices.includes(choice.toLowerCase()))
            return choice;
        else {
            // alert("not a valid choice!");
        }
    }
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection == playerSelection)
        return "tie"

    if (computerSelection == "rock") {
        if (playerSelection == "scissors")
            return "lose";
        else return "win";
    }
    if (computerSelection == "scissors") {
        if (playerSelection == "paper")
            return "lose";
        else return "win";
    }
    if (computerSelection == "paper") {
        if (playerSelection == "rock")
            return "lose";
        else return "win";
    }

}

function getChoices() {
    computerSelection = computerPlay();
    playerSelection = playerPlay();

}

//play the game:
function playGame() {
    for (let i = 0; i < 5; i++) {
        getChoices();
        console.log("computer: " + computerSelection + " player: " + playerSelection);
        console.log(playRound(computerSelection, playerSelection));
    
    }
}
playGame();
