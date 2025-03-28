let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
}
const drawGame = () => {
    msg.innerText = "Game was draw. play again.";
    msg.style.backgroundColor = "#081b31";

}
 const showWinner = (userwin,userChoice, compChoice) => {
    if (userwin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose!");
        msg.innerText = `You lost.your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
 };

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice  === "rock"){
            userWin = compChoice === "paper"? false:true;
        }else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false:true;
        }else {
            userWin = compChoice === "rock"? false:true;
        }
        showWinner(userWin ,userChoice, compChoice);
    }
};
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});