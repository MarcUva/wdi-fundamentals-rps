playToFive();

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////




var computerMove = "";
var playerMove = "";
var winner = "";

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}



function getWinner(playerMove,computerMove) {
    if (playerMove === "rock") {
        if (computerMove === "rock") {}
        else if (computerMove === "paper") {
            winner = "computer";
        }
        else {
            winner = "player";
        }
    }
    
    

    else if (playerMove === "scissors") {
        if (computerMove === "scissors") {
            winner = "tie";
        }
        else if (computerMove === "rock") {
            winner = "computer";
        }
        else {
            winner = "player";
        }
    }
    
    
    
    
    
    
    else {
        if (computerMove === "paper") {
            winner = "tie";
        }
        else if (computerMove === "scissors") {
            winner = "computer";
        }
        else {
            winner = "player";
        }
    }
    return winner;
}

    
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove,computerMove);

        if (winner === "player") {
            console.log("Player chose " + playerMove + " and computer chose " + computerMove + ". Player wins this round.");
            playerWins++;
        }
        else if (winner === "computer") {
            console.log("Player chose " + playerMove + " and computer chose " + computerMove + ". Computer wins this round.");
            computerWins++;
        }
        else if (winner === "tie") {
            console.log("This round was a tie.");
        }

        console.log("The score is now " + playerWins + " to " + computerWins + ".");
    }
     if (playerWins > computerWins )  {
    console.log ("Player wins the set") ;
    if (computerWins > playerWins ) 
     console.log ("Computer wins the set") ;
    return [playerWins, computerWins];
     }
}



    
