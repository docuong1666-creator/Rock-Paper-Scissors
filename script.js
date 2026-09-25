// 1.Write a function that randomly return "rock", "paper", "scissors".

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if ( randomNumber === 1 ) {
        return "rock";
    } else if ( randomNumber === 2 ) {
        return "paper";
    } else if ( randomNumber === 3 ) {
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

function playRound(humanChoice, computerChoice) {
    
    if ( humanChoice === computerChoice ) {
        console.log(`\n
            You choose ${humanChoice} \n
            Your opponent choose ${computerChoice} \n
            Draw`)
        console.log(`Your Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    } else if ( humanChoice === "rock" && computerChoice === "paper" ||
                humanChoice === "paper" && computerChoice === "scissors" ||
                humanChoice === "scissors" && computerChoice === "rock"
     ) {
        console.log(`\n
            You choose ${humanChoice} \n
            Your opponent choose ${computerChoice} \n
            YOU LOSE !`);
        computerScore += 1;
        console.log(`Your Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    } else if ( humanChoice === "rock" && computerChoice === "scissors" ||
                humanChoice === "paper" && computerChoice === "rock" ||
                humanChoice === "scissors" && computerChoice === "paper"
     ) {
        console.log(`\n
            You choose ${humanChoice} \n
            Your opponent choose ${computerChoice} \n
            YOU WIN !`)
        humanScore += 1;
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