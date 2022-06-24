const choices = ["rock", "scissors", "paper"];
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let freeze = false;


function computerPlay() {
    var computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
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



function updateScores(result){
    let winStatus = document.getElementById("winStatus");
    let playerDisplay = document.getElementById("playerScore");
    let computerDisplay = document.getElementById("computerScore");
    if(result== "tie"){
        winStatus.innerText= "tie!";
        return;
    }
    if(result == "lose"){
        winStatus.innerText= "lose";
        computerScore++;
        computerDisplay.innerText = "computer score: " + computerScore;
    }
    if(result == "win"){
        playerScore++;
        playerDisplay.innerText = "player score: " + playerScore;
    }

}

function updateImages(computerChoice, choice){
    let playerImage = document.getElementById("playerImage");
    let computerImage= document.getElementById("computerImage");
    playerImage.src = `../rockPaperSci/img/${choice}.jpg`;
    computerImage.src=`../rockPaperSci/img/${computerChoice}.jpg`;
 
}

function playGame(e) {
    if(freeze == true)
        return;
        let round;
        let choice;
        let computerChoice = computerPlay();
        let elements = e.composedPath();
        elements.forEach(element => {
            if(element.id == "rock" || element.id == "paper" || element.id == "scissors")
                choice = element.id;
        });
        round = playRound(computerChoice, choice);
        updateImages(computerChoice, choice);
        updateScores(round);
        
    
}

const playerChoices = document.querySelectorAll('.card');
playerChoices.forEach(playerChoice => playerChoice.addEventListener('click', playGame));
