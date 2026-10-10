let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector(".msg");

const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#computer-score");

// generte the computer selection 
const gencompchoice = () =>{
    const option = ["rock" , "paper" , "scissors"];
    const randId = Math.floor(Math.random()*3);

    return option[randId];
}

// if both the user and computer choice are same 

const drawgame = () => {
    msg.innerText = "Its a Draw! ";
    msg.style.backgroundColor = "#081b31";   
}

// Displaying the result or show who win 

const showWinner = (userWin , userchoice , compChoice) => {
    if(userWin) {
        userscore++;
        userscorePara.innerText = userscore;
        msg.innerText = `You win! your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        computerscore++;
        compscorePara.innerText = computerscore;
        msg.innerText = `You lose! ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

// playing the game so all over the result whose win whose loss

const playgame = (userchoice) => {
    const compChoice = gencompchoice();

    if(userchoice ===  compChoice) {
        drawgame();
    }
    else {
        let userWin = true;
        if(userchoice === "rock") {
            // scissors , paper 
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userchoice === "paper") {
            // paper  , rock
           userWin = compChoice === "scissors" ? false : true;
        }

        else {
            // rock   , paper 
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin , userchoice , compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
});