let humanScore = 0;
let computerScore= 0;
let round = 0;

const scores = document.querySelector("#scores");
const gameInfo = document.querySelector("#gameInfo");
const playerChoice = document.querySelector("#playerChoice");
const computerChoice = document.querySelector("#computerChoice");
const roundResult = document.querySelector("#result");

function getComputerChoice(){
    // returns a value 0 - 100
    let x = Math.floor(Math.random()*100);
    // tried to split the odds evenly but its not 33.33 odds sad =(
    if(x >= 67){
        return "rock";
    }
    else if(x >= 34){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanInput(choice){
    let input = choice; 
    input = input.toLowerCase();
    while(true) {
        if(input === "rock"){
            return "rock";
        }
        else if(input == "paper"){
            return "paper";
        }
        else if(input === "scissors"){
            return "scissors";
        }
        // if bad input
        input = prompt("lets try that again, rock, paper, scissors?");
        input = input.toLowerCase();
    }

}

function playRound(humanInput, computerInput){
    // tie case
    if(humanInput === computerInput){
        round++;
        console.log(`you say: ${humanInput}, computer says: ${computerInput}.`);
        playerChoice.textContent = `You say: ${humanInput}`;
        computerChoice.textContent = `Computer says: ${computerInput}`;
        console.log("Results:");
        roundResult.textContent = `Result: Tie`;
        console.log("TIE lets try that again");
        return;
    }
    // all lose cases
    else if ((humanInput === "rock") && (computerInput ==="paper") || 
            (humanInput === "paper") && (computerInput ==="scissors") ||
            (humanInput === "scissors") && (computerInput ==="rock") 
            ){
        round++;
        computerScore++;
        console.log(`you say: ${humanInput}, computer says: ${computerInput}.`);
        playerChoice.textContent = `You say: ${humanInput}`;
        computerChoice.textContent = `Computer says: ${computerInput}`;
        console.log("Results:")
        console.log("LOSE")
        roundResult.textContent = `Result: Lose!`;
        console.log(`Score, You: ${humanScore}, Computer: ${computerScore}.`);
        scores.textContent = `Score: ${humanScore}, Computer Score: ${computerScore}`;
        return;
    }
    // all cases left is win
    else {
        round++;
        humanScore++;
        console.log(`you say: ${humanInput}, computer says: ${computerInput}.`);
        playerChoice.textContent = `You say: ${humanInput}`;
        computerChoice.textContent = `Computer says: ${computerInput}`;
        console.log("Results:")
        console.log("Win!")
        roundResult.textContent = `Result: Win!`;
        console.log(`Score, You: ${humanScore}, Computer: ${computerScore}.`);
        scores.textContent = `Score: ${humanScore}, Computer Score: ${computerScore}`;
        return;
    }

}

function playGame(){


    // while((humanScore < 5) && (computerScore < 5)){
    //     console.log(`Round: ${round}`);
    //     playRound(getHumanInput(),getComputerChoice());
    // }
    if(humanScore === 5){
        alert("oh yeah ez");
        alert("feel free to keep playing");
    }


    if(computerScore === 5){
        alert("you lost by chance its alright");
        alert("feel free to keep playing");
    }

}

// playGame();

const rBtn = document.querySelector("#rock");
const pBtn = document.querySelector("#paper");
const sBtn = document.querySelector("#scissors");


rBtn.addEventListener("click",()=>{
    playRound("rock",getComputerChoice());
    playGame();
});
pBtn.addEventListener("click",()=>{
    playRound("paper",getComputerChoice());
    playGame();
});
sBtn.addEventListener("click",()=>{
    playRound("scissors",getComputerChoice());
    playGame();
});
