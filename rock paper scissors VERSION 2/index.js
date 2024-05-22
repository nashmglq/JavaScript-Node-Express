const robotAns = document.getElementById("robotAnswer");
const images = document.querySelectorAll(".myAmmo");
const userFinal = document.getElementById("userFinal");
const whoWon = document.getElementById("whoWon");
const robotScores = document.getElementById("robotScore");
const userPoints = document.getElementById("scoreUser");
const finalWinner = document.getElementById("finalWinner");
const restart = document.getElementById("restart");
const restartNo = document.getElementById("restartNo");
const troll = document.getElementById("troll");
let userScore = 0;
let robotScore = 0;
let username = window.prompt("Enter username");
let newUsername = checkUsername();

// TO RESET WE NEED TO 0 the scores as well as the DOM....

function playAgain() {
  userScore = 0;
  robotScore = 0;
  finalWinner.textContent = " ";
  finalWinner.textContent = " ";
  robotScores.textContent = " ";
  userPoints.textContent = " ";
  whoWon.textContent = " ";
  robotAns.innerHTML = " ";
  userFinal.innerHTML = " ";
  restart.style.visibility = "hidden";
  restartNo.style.visibility = "hidden";
  troll.style.visibility = "hidden";
}

function checkUsername() {
  if (username === null || username === " " || username === "") {
    let newUsername = "Guest";
    return newUsername;
  } else {
    let newUsername = username;
    return newUsername;
  }
}

function scoring(input, robotAnswer) {
  try {
    if (input === undefined && robotAnswer === undefined) {
      whoWon.textContent = " ";
    } else if (input === robotAnswer) {
      whoWon.textContent = "TIE!";
    } else if (input === "rock" && robotAnswer === "paper") {
      whoWon.textContent = "Robot won!";
      robotScore += 1;
      robotScores.textContent = `Robot score: ${robotScore}`;
    } else if (input === "rock" && robotAnswer === "scissors") {
      whoWon.textContent = `${newUsername} won!`;
      userScore += 1;
      userPoints.textContent = `${newUsername} score: ${userScore}`;
    } else if (input === "paper" && robotAnswer === "scissors") {
      whoWon.textContent = "Robot won!";
      robotScore += 1;
      robotScores.textContent = `Robot score: ${robotScore}`;
    } else if (input === "paper" && robotAnswer === "rock") {
      whoWon.textContent = `${newUsername} won!`;
      userScore += 1;
      userPoints.textContent = `${newUsername} score: ${userScore}`;
    } else if (input === "scissors" && robotAnswer === "paper") {
      whoWon.textContent = `${newUsername} won!`;
      userScore += 1;
      userPoints.textContent = `${newUsername} score: ${userScore}`;
    } else if (input === "scissors" && robotAnswer === "rock") {
      whoWon.textContent = "Robot won!";
      robotScore += 1;
      robotScores.textContent = `Robot score: ${robotScore}`;
    }
  } catch (error) {
    console.log(error);
  }

  if (userScore === 5) {
    finalWinner.textContent = `${newUsername} won the series!`;
    restart.style.visibility = "visible";
    restartNo.style.visibility = "visible";
  } else if (robotScore === 5) {
    finalWinner.textContent = "Robot won the series!";
    restart.style.visibility = "visible";
    restartNo.style.visibility = "visible";
  }
}

function myAim(input) {
  if (userScore < 5 && robotScore < 5) {
    // both need to be less than 5
    let user = input;

    if (user === undefined) {
      userFinal.textContent = "Please pick...";
    } else {
      userFinal.innerHTML = `<img src ="img/${user}.png">`;
    }

    const robot = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * robot.length);
    let robotAnswer = robot[random];
    robotAns.innerHTML = `<img src ="img/${robotAnswer}.png">`;
    console.log(userScore);
    scoring(input, robotAnswer);
  } else {
    return null;
  }
}

restartNo.addEventListener("mouseover", () => {
  if (restartNo.style.visibility === "visible") {
    let i = Math.floor(Math.random() * 500) + 1;
    let j = Math.floor(Math.random() * 500) + 1;
    troll.style.visibility = "visible";
    restartNo.style.top = `${j}px`;
    restartNo.style.left = `${i}px`;
  }
});

restart.onclick = playAgain;

scoring();

// MAGULO PERO WORKING

// LEARN SOMETHING NEW

// BASE ON THIS: The event listener code runs only once when the page loads.
// so I cannot chnage the vlaue bnecause it will read the inital state?

// answer troll part :
// OHH, so the first code checks the if statement everytime we use the eventListenr
// WHILIE THE SECOND CODE ONLY CHECK ONCE.. and thjat causes the visiblity to be check once?

// The event listener code runs only once when the page loads.
// SO THE INITIAL HIDDEN WILL BE NEEDED SO AS LONG AS HIDDEN IT WILL WORK
// SO the if statment wont read the visiblity of the other function because they are inside of the functions and WE cannot reach them?
// if (restartNo.style.visibility === "hidden") {
//   restartNo.addEventListener("mouseover", () => {
//     let i = Math.floor(Math.random() * 500) + 1;
//     let j = Math.floor(Math.random() * 500) + 1;
//     troll.style.visibility = "visible";
//     restartNo.style.top = `${j}px`;
//     restartNo.style.left = `${i}px`;
//   });
// }

// TO CLEAR IT ALL FOR THE EVENT LISTNER NA PART:

// SO TO CLEAR IT ALL THE CURENT CODE WORKS BECASUE EVERY TIME WE ADDEVENTLISTNER IT WILL CHECK THE NEW STATE OF THE VISIBILITY
// CURENT code: so it do trhis for the first code do the evnetlister CHECK THE VISIBILIT FRIST BEFORE MOVING (or excute the job)

// WHILE THE SECOND CODE ONLY CHECK IT ONCE WHERE IT WILL CHECK THE VISIBILITY OF THE STATE THAT IT SAW
// Second code: check the state or the current state 
// (which we cant change becayuse the one who is changin it is unacc3esable because of the barrier of the functions it is on) of the visiblity which is intiali hidden?

// THIS IS THE PROBLEM THE FOR EACH....
// I did this to try to apply what I learn but I think it is better to
// solve it on my way and find the easier way...

// images.forEach((img) => {
//   img.addEventListener("click", () => {
//     const robot = ["rock", "paper", "scissors"];
//     let random = Math.floor(Math.random() * robot.length);
//     let robotAnswer = robot[random];
//     robotAns.innerHTML = `<img src ="img/${robotAnswer}.png">`;
//     console.log(robotAnswer)
//   });
// });

// we can decalre the randomeriz on the outside part of the function
// but it will only generate once, it is because the function will call it once
// and if we tried to put it inside the function
// it will generate a new random everytime becuase we are calling the function each time we put a new value
