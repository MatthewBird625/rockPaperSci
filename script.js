const choices = ["rock", "scissors", "paper"];
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let freeze = false;


function computerRandomChoice() {
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

function gameResult(result){
    let winStatus = document.getElementById("winStatus");
    let playerImage = document.getElementById("playerImage");
    let computerImage= document.getElementById("computerImage");
    freeze = true;
    toggleButton();
    if(result == "win"){
        winStatus.innerText = "You beat\n\nthe computer!";
        computerImage.src = "../rockPaperSci/img/happyRock.jpg"
        playerImage.src = "../rockPaperSci/img/happyRock.jpg"
    }
    else{
        winStatus.innerText = "You lost!\n\nDwayne...\n\nis sad :(";
        computerImage.src = "../rockPaperSci/img/sadRock.jpg"
        playerImage.src = "../rockPaperSci/img/sadRock.jpg"
        
    }
    

}

function updateScores(result){
    let winStatus = document.getElementById("winStatus");
    let playerDisplay = document.getElementById("playerScore");
    let computerDisplay = document.getElementById("computerScore");
    if(result== "tie"){
        winStatus.innerText= "Tie!";
        return;
    }
    if(result == "lose"){
        winStatus.innerText= "Loses to:";
        computerScore++;
        computerDisplay.innerText = "Computer score: " + computerScore;
        if(computerScore == 5)
            gameResult("lose");
    }
    if(result == "win"){
        playerScore++;
        winStatus.innerText= "Beats: ";
        playerDisplay.innerText = "Player score: " + playerScore;
        if(playerScore == 5)
            gameResult("win");
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
        let computerChoice = computerRandomChoice();
        let elements = e.composedPath();
        elements.forEach(element => {
            if(element.id == "rock" || element.id == "paper" || element.id == "scissors")
                choice = element.id;
        });
        round = playRound(computerChoice, choice);
        updateImages(computerChoice, choice);
        updateScores(round);
        
    
}

function toggleButton() {
    var button = document.getElementById("restartButton");
    if (button.style.display === "none") {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }

  function restartGame(){
    playerScore = 0;
    computerScore = 0; 
    let playerImage = document.getElementById("playerImage");
    let computerImage= document.getElementById("computerImage");
    let winStatus = document.getElementById("winStatus");
    let playerDisplay = document.getElementById("playerScore");
    let computerDisplay = document.getElementById("computerScore");
    playerImage.src = `../rockPaperSci/img/question.png`;
    computerImage.src=`../rockPaperSci/img/question.png`;
    winStatus.innerText ="";
    playerDisplay.innerText = "player score: 0"
    computerDisplay.innerText= "Computer score: 0"
    toggleButton();
    freeze= false;
  }

toggleButton();
const playerChoices = document.querySelectorAll('.card');
const restartButton = document.getElementById('restartButton');
playerChoices.forEach(playerChoice => playerChoice.addEventListener('click', playGame));
restartButton.addEventListener('click',restartGame);
