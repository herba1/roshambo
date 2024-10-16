console.log("hello world!");

let humanScore = 0;
let computerScore= 0;

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

function getHumanInput(){
    let input = prompt("Rock, Paper, Scissors?");
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
        console.log(`you say: ${humanInput}, computer says: ${computerInput}.`);
        console.log("Results:");
        console.log("TIE lets try that again");
        return;
    }
    // all lose cases
    else if ((humanInput === "rock") && (computerInput ==="paper") || 
            (humanInput === "paper") && (computerInput ==="scissors") ||
            (humanInput === "scissors") && (computerInput ==="rock") 
            ){
        computerScore++;
        console.log(`you say: ${humanInput}, computer says: ${computerInput}.`);
        console.log("Results:")
        console.log("LOSE")
        console.log(`Score, You: ${humanScore}, Computer: ${computerScore}.`);
        return;
    }
    // all cases left is win
    else {
        humanScore++;
        console.log(`you say: ${humanInput}, computer says: ${computerInput}.`);
        console.log("Results:")
        console.log("Win!")
        console.log(`Score, You: ${humanScore}, Computer: ${computerScore}.`);
        return;
    }

}

playRound(getHumanInput(),getComputerChoice());
