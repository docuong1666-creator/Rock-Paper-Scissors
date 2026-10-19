const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');
const resetBtn = document.createElement('button');

rockBtn.textContent = 'Rock';
paperBtn.textContent = 'Paper';
scissorsBtn.textContent = 'Scissors';
resetBtn.textContent ='RESET GAME';

document.body.append(rockBtn,paperBtn,scissorsBtn);

const buttons = document.querySelectorAll('button');

const div = document.createElement('div');
div.setAttribute('style', 'white-space: pre; text-align: center');
document.body.appendChild(div);


let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

//  game logic for a single round

function playRound(humanChoice) {
    
    let computerChoice = "";
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if ( randomNumber === 1 ) {
        computerChoice = "rock";
    } else if ( randomNumber === 2 ) {
        computerChoice = "paper";
    } else if ( randomNumber === 3 ) {
        computerChoice = "scissors";
    }
    
    if ( humanChoice === computerChoice ) {
        div.textContent += `\n
            You choose ${humanChoice} \n
            Your opponent choose ${computerChoice} \n
            DRAW! \n
            Your Score: ${humanScore} \n
            Computer Score: ${computerScore} \n\n\n`
    } else if ( humanChoice === "rock" && computerChoice === "paper" ||
                humanChoice === "paper" && computerChoice === "scissors" ||
                humanChoice === "scissors" && computerChoice === "rock"
     ) {
        computerScore += 1;
        div.textContent += `\n
            You choose ${humanChoice} \n
            Your opponent choose ${computerChoice} \n
            YOU LOSE! \n
            Your Score: ${humanScore} \n
            Computer Score: ${computerScore} \n\n\n`
    } else if ( humanChoice === "rock" && computerChoice === "scissors" ||
                humanChoice === "paper" && computerChoice === "rock" ||
                humanChoice === "scissors" && computerChoice === "paper"
     ) {
        humanScore += 1;
        div.textContent += `\n
            You choose ${humanChoice} \n
            Your opponent choose ${computerChoice} \n
            YOU WIN! \n
            Your Score: ${humanScore} \n
            Computer Score: ${computerScore} \n\n\n`
    } else {
        div.textContent += `\n
            You choose ${humanChoice} \n
            Your opponent choose ${computerChoice} \n
            INVALID! \n
            Your Score: ${humanScore} \n
            Computer Score: ${computerScore} \n\n\n`
    }
}


buttons.forEach( button => button.addEventListener('click', (event) => {
    let humanChoice = event.target.textContent.toLowerCase();
    
    if (humanScore < 5 && computerScore < 5) { 
        roundCount += 1;
        div.textContent += `Round: ${roundCount}`     
        playRound(humanChoice);    
    } else if (computerScore === 5) {
        div.textContent += `\n
            GAME END! \n
            YOU LOSE THE GAME \n` ;
        document.body.appendChild(resetBtn);
    } else if (humanScore === 5) {
        div.textContent += `\n
            GAME END! \n
            YOU WIN THE GAME \n`;
        document.body.appendChild(resetBtn);
    }
}))


resetBtn.addEventListener('click', function() {
    div.textContent = '';
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;
    resetBtn.remove();
})