// 1.Write a function that randomly return "rock", "paper", "scissors".
// 1.1 Declare a variable computerChoice
// 1.2 Assign computerChoice random from 3 number
// 1.3 Use If...else to return "rock", "paper", "scissors" with
// each number
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if ( computerChoice === 1 ) {
        return "rock";
    } else if ( computerChoice === 2 ) {
        return "paper";
    } else if ( computerChoice === 3 ) {
        return "scissors";
    } else {
        return "WOW, Something is wrong, I don't know";
    }
}

// 2.Write a fucntion that take user's choice and return it.
// 2.1 Create a new function name getHumanChoice
// 2.2 getHumanChoice will return one of the valid choice 
// base on what the user input
// 2.2.1 Use Prompt to get the user input

function getHumanChoice() {
    let humanChoice = prompt("What is your choice ? rock ? paper ? scissors", "");
    return humanChoice.toLowerCase();
}

// 3.Write 2 variables to keep track of the players score.
let humanScore = 0;
let computerScore = 0;

// 4.Wrtie the logic to play a single round
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
    }
}




// 5. Write the logic to play the entire game.
// The game has 5 rounds
// The score is keep track each round

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