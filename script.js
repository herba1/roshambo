console.log("hello world!");

let humanScore = 0;
let computerScore= 0;

function getComputerChoice(){
    // returns a value 0 - 100
    let x = Math.floor(Math.random()*100);
    // tried to split the odds evenly but its not 33.33 odds sad =(
    if(x >= 67){
        return "Rock";
    }
    else if(x >= 34){
        return "Paper";
    }
    else{
        return "Scissors";
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
