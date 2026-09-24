// 1.Write a function that randomly return "rock", "paper", "scissors".

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if ( computerChoice === 1 ) {
        return "rock";
    } else if ( computerChoice === 2 ) {
        return "paper";
    } else if ( computerChoice === 3 ) {
        return "scissors";
    }
}

// 2.Write a fucntion that take user's choice and return it as lowerCase.

function getHumanChoice() {
    let humanChoice = prompt("What is your choice ? rock ? paper ? scissors", "");
    return humanChoice.toLowerCase();
}

// 3.Write 2 variables to keep track of the players score.
let humanScore = 0;
let computerScore = 0;

// 4.Write the game logic for a single round
//  4.1 Write a function that take the computer and player choice
//      as arguments
//  4.2 Play a single round
//  4.3 Increment the round winner's score
//  4.4 Log a winner announcement

function playRound(humanChoice, computerChoice) {
    
    if ( humanChoice === "rock" && computerChoice === "rock" ) {
        console.log(`\n
            You choose ${humanChoice} \n
            Your opponent choose ${computerChoice} \n
            Draw`)
        console.log(`Your Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    } else if ( humanChoice === "rock" && computerChoice === "paper" ) {
        console.log(`\n
            You choose ${humanChoice} \n
            Your opponent choose ${computerChoice} \n
            YOU LOSE !`);
        computerScore += 1;
        console.log(`Your Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    } else if ( humanChoice === "rock" && computerChoice === "scissors" ) {
        console.log(`\n
            You choose ${humanChoice} \n
            Your opponent choose ${computerChoice} \n
            YOU WIN !`)
        humanScore += 1;
        console.log(`Your Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    } else if ( humanChoice === "paper" && computerChoice === "rock" ) {
        console.log(`\n
            You choose ${humanChoice} \n
            Your opponent choose ${computerChoice} \n
            YOU WIN !`)
        humanScore += 1;
        console.log(`Your Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    } else if ( humanChoice === "paper" && computerChoice === "paper" ) {
        console.log(`\n
            You choose ${humanChoice} \n
            Your opponent choose ${computerChoice} \n
            Draw`)
        console.log(`Your Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    } else if ( humanChoice === "paper" && computerChoice === "scissors" ) {
        console.log(`\n
            You choose ${humanChoice} \n
            Your opponent choose ${computerChoice} \n
            YOU LOSE!`)
        computerScore += 1;
        console.log(`Your Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    } else if ( humanChoice === "scissors" && computerChoice === "rock" ) {
        console.log(`\n
            You choose ${humanChoice} \n
            Your opponent choose ${computerChoice} \n
            YOU LOSE!`)
        computerScore += 1;
        console.log(`Your Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    } else if ( humanChoice === "scissors" && computerChoice === "paper" ) {
        console.log(`\n
            You choose ${humanChoice} \n
            Your opponent choose ${computerChoice} \n
            YOU WIN!`)
        humanScore += 1;
        console.log(`Your Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    } else if ( humanChoice === "scissors" && computerChoice === "scissors" ) {
        console.log(`\n
            You choose ${humanChoice} \n
            Your opponent choose ${computerChoice} \n
            Draw`)
        console.log(`Your Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    } else {
        console.log(`\n
            You choose ${humanChoice} \n
            Your opponent choose ${computerChoice} \n
            INVALID!`)
        console.log(`Your Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }
}


// 5. Write the logic to play the entire game ( 5 rounds ).

function playGame() {
    
    for ( let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`\n
            YOU WIN THE GAME \n`);
    } else if (humanScore < computerScore) {
        console.log(`\n
            YOU LOSE THE GAME \n`);
    } else if (humanScore === computerScore) {
        console.log(`\n
            THE GAME IS A DRAW \n`);
    }
}

playGame();