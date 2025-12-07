const choices = ["rock", "paper", "scissors"]; 
const playerDisplay = document.getElementById("playerdisplay"); 
const computerDisplay = document.getElementById("computerdisplay");
const resultDisplay = document.getElementById("resultdisplay");
const playerScoreEl = document.getElementById("playerscore");
const computerScoreEl = document.getElementById("computerscore");

let playerScore = 0;
let computerScore = 0; 

function playgame(input) {
    
    const playerChoice = input.toLowerCase();
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";
    if (playerChoice === computerChoice) {
        result = "IT IS A TIE";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
                break; 
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
                break;
        }
    }
    
    updateScore(result);


    playerDisplay.textContent = `PLAYER: ${playerChoice.toUpperCase()}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice.toUpperCase()}`; // Used the correct variable: computerChoice
    resultDisplay.textContent = result;
}

// 4. Function to update the score display based on the result
function updateScore(result) {
    if (result === "YOU WIN") {
        playerScore++;
        // Update the display element (assuming playerscore element shows the score)
        playerScoreEl.textContent = `Your Score: ${playerScore}`;
        resultDisplay.style.color = 'green';
    } else if (result === "YOU LOSE") {
        computerScore++;
        computerScoreEl.textContent = `Computer Score: ${computerScore}`;
        resultDisplay.style.color = 'red';
    } else {
        resultDisplay.style.color = '#007bff';
    }
}