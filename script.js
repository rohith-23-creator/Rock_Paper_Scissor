// Getting the required elements from the DOM .
const scoreBoard = document.getElementById("scoreBoard");
const output = document.getElementById("output");
const choiceBtn = document.querySelectorAll(".btn-enter");
const btn = document.querySelector(".enter");
const score = {
    player : 0,
    computer : 0
}

// To show the game screen
btn.addEventListener("click", showGameScreen)

function showGameScreen(e){
    e.preventDefault();

    const welcomeScreen = document.getElementById("welcome");

    welcomeScreen.classList.add("fadeOut");

    const matchScreen = document.getElementById("match");

    matchScreen.classList.add("fadeIn")
}

// getting all the choices for the player
const choices = document.querySelectorAll(".choices");
choices.forEach((choice => {
    choice.addEventListener("click" , start)
}))

// Function to start the game
function start(e){
    if(e.target.classList.contains("btn-enter")){
        const playerChoice = e.target.id;
        const computerChoice = getcomputerChoice()
        const winner =  selectWinner(playerChoice , computerChoice);
        declareWinner(winner, computerChoice)

    }

}

// Function to get the computer choice (random Choice)
function getcomputerChoice(){
    const getRand = Math.floor(Math.random()*3);
    if(getRand === 0){
       return "rock";
    }else if (getRand === 1){
        return "paper";
    }else if (getRand === 2){
        return "scissor";
    }
}

//Selecting the winner by comparing the ComputerChoice and PlayerChoice  
function selectWinner(playerChoice , computerChoice){
    if(playerChoice === computerChoice){
        return "Tie"
    }else if(playerChoice === "rock"){
            if(computerChoice === "paper"){
               return "Computer"
            }else{
               return "Player"
            }
    }else if(playerChoice === "paper"){
            if(computerChoice === "rock"){
                return "Player"
            }else{
                return "Computer"

            }
    }else if(playerChoice === "scissor"){
        if(computerChoice === "paper"){
            return "Player"
        }else{
            return "Computer"

        }
}
}

// Declaring the selected choice as the winner
function declareWinner(winner, computerChoice){
    if(winner === "Player"){
        score.player++
        output.innerHTML= `<h2>You Win! Computer Chose ${computerChoice}</h2>`
    }else if (winner ==="Computer"){
        score.computer++
        output.innerHTML= `<h2>You Lose! Computer Chose ${computerChoice}</h2>`
    }else{
        output.innerHTML= `<h2>Its a Tie! Computer also Chose ${computerChoice}</h2>`

    }

    scoreBoard.innerHTML = ` <h2>Player : ${score.player}</h2>
    <h2>Computer : ${score.computer}</h2>`

    if(score.player === 20 && score.computer != 20){
        document.body.innerHTML = `<div class= "endStatement">
            <h1>Game Over!!</h1>
            <h2 class = "textGreen">Congrats you won!!</h2>
            <small>Refresh the page to restart</small>
        </div>`
    }else if(score.player != 20 && score.computer === 20){
        document.body.innerHTML = `<div class= "endStatement">
            <h1>Game Over!!</h1>
            <h2 class = "textRed">Sorry! You Lost!!</h2>
            <small>(Refresh the page to restart)</small>
        </div>`
    }
}
