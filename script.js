let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const userScorePara = document.querySelector("#user")
const compScorePara = document.querySelector("#Computer")

const genComputerChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("game was draw");
    message.innerText = "Game was draw, Play again";
    message.style.backgroundColor = "darkolivegreen";

}

const showWinner = (userWin, userChoice, computerChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win");
        message.innerText = `You Win ! Your ${userChoice} beats ${computerChoice}`;
        message.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You loose");
        message.innerText = `You loose. ${computerChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";

    }
}

const playGmae = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate computer choice -> modular
    const computerChoice = genComputerChoice();
    console.log("computer choice =", computerChoice);

    if(userChoice === computerChoice){
        drawGame();

    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
           userWin = computerChoice === "paper"? false: true;

        }else if(userChoice === "paper"){
            //rock, scissors
            userWin = computerChoice === "scissors"? false: true;
        }else{
            //rock, paper
            userWin = computerChoice ==="rock"? false: true;
        }
        showWinner(userWin, userChoice, computerChoice);

    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGmae(userChoice);
    });
});