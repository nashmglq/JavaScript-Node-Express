const cells = document.querySelectorAll(".cell");
const statusTxt = document.getElementById("statusTxt");
const resetGame = document.getElementById("resetGame");

// dont use "let" if we want to change the GLOBAL VALUE

let options = ["", "", "", "", "", "", "", "", ""]; // This is where the X/O go
let running = false;
let userTurn = "X";

const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function initialGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked)); // forEach to take all cell, use event to add click and trigger the cellClicked()
  resetGame.addEventListener("click", restart);
  statusTxt.textContent = `${userTurn}'s turn`;
  running = true;
}

function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex"); // this(get the line of code in html) getAttribute its cellIndex value

  if (options[cellIndex] != "" || !running) {
    // if that index is not empty or not running  it will exit the program
    return; // if no return it will exit the certain function
    // that is why if we tried to click to an !empty it wont work, or when the code is not running
  }

  updateCell(this, cellIndex);
  winnerChecker(); //check each time we click
}

function updateCell(cell, index) {
  // takes the html attrbute(line) and the index where the X/O go
  options[index] = userTurn; // use this if we are pushing on a certain index with the value of the userTurn
  cell.textContent = userTurn; // push a value on that html line
}

function changePlayer() {
  userTurn = userTurn == "X" ? "O" : "X"; // if we add let here it will set a new variable for this function, if we wont it will change the global value
  statusTxt.textContent = `${userTurn}'s turn`; // change the status here, if we dont it will take the initial and initial is fixed to the original value
  // it will now be called each time
}

function winnerChecker() {
  let roundWon = false;

  for (let i = 0; i < win.length; i++) {
    // take win array => cell will check if they are equal
    // get all array Index
    const combination = win[i];
    const cellA = options[combination[0]]; // get options, ccheck the combination and the index to it, wont push anything just checking
    const cellB = options[combination[1]]; // it will base it on the INDEX, the win combination are INDEX
    const cellC = options[combination[2]];

    //got it, becasue in order to win its either the iteration has FULL OF VALUE NOW THIS WILL CHECK IF some are emtpy, if empty skip it and check the other iteration
    if (cellA == "" || cellB == "" || cellC == "") {
      continue; // if the some cells are empty CONTINUE (also means skip) (if remvoed IT WILL THINK THAT EMPTY equal to EMPTY IS GOOD)
      // this will help us to not EVALUATE EMPTY!
    }
    // if all have soemthing on a certain iteation ccheck if same value
    if (cellA === cellB && cellB === cellC) {
      // the index 0,1,2 must be equal value (in error : it is waiting for all the index to be full, and comapre only a and b)
      roundWon = true; // dont use let if we want to change the GLOBAL VALUE
      break; // break the loop and set the roundWon to true; (this is optional, but it looks better the for loop will end but this will end it faster)
    }
  }

  if (roundWon) {
    statusTxt.textContent = `${userTurn} WON`;
    running = false;
  } else if (!options.includes("")) {
    // check if options NOT include spaces
    statusTxt.textContent = "DRAW";
  } else {
    changePlayer(); // it will finsih the loop check the if condition and else if the conditions are not meant
  }
}

function restart() {
  running = true;
  userTurn = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  cells.forEach(cell => cell.textContent = "")
  statusTxt.textContent = `${userTurn}'s turn`
}

initialGame();
console.log(userTurn); // it is a fixed value, in the initialGame() we are calling a function which has a function to change the userVlaue that is why it kepts updating
// if we call the initalGmae it will call the cellClicked and inside of it, it will call the changePlayer
// it is recalling the initialGame => cellClicked (or gameWinner)=> and the change player
