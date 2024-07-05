const cells = document.querySelectorAll(".cell");
const statusTxt = document.getElementById("statusTxt");
const resetGame = document.getElementById("resetGame");

let options = ["", "", "", "", "", "", "", "", ""];
let running = false;
let userTurn = "X";

win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function intializeGame() {
  // initial our game
  cells.forEach((cell) => cell.addEventListener("click", cellClicked)); // so when we click each cell it will trigger cellClicked
  resetGame.addEventListener("click", restart);
  statusTxt.textContent = `${userTurn}'s turn`;
  running = true;
}

function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex"); // this is the html attribute and the cellIndex of it

  if (options[cellIndex] != "" || !running) {
    // check if the options on that index is not empty or not running, if it is it will exit the programm
    // it wont run becuase globally it is false and even we use the !running it wont work because we are using the intializeGame() to run and note the cellCLicked()
    return;
  }

  console.log(cellIndex);
  console.log(this);

  cellUpdate(this, cellIndex);
  checkWinner()

}

function cellUpdate(cell, index) {
  options[index] = userTurn; // push it to the options array
  cell.textContent = userTurn;
}

function changePlayer() {
  userTurn = userTurn == "X" ? "O" : "X"; // it wont work with let , becuase it wont affect the global
  statusTxt.textContent = `${userTurn}'s turn`;
}


function checkWinner() {
  let wonRound = false;

  for(let i = 0; i < win.length; i++){
    const combination = win[i];
    const cellA = options[combination[0]]; // the option will check if X or O on that line
    const cellB = options[combination[1]];
    const cellC = options[combination[2]];

    if(cellA == "" || cellB == "" || cellC == ""){ // loop all cell
      continue;
    }

    if(cellA == cellB && cellB == cellC){
      wonRound = true
      break; // break the loop and go to the checker
    }
  }

  if(wonRound){ 
    statusTxt.textContent = `${userTurn} won`
    running = false;
  }else if (!options.includes("")) {
    statusTxt.textContent = "DRAW"
  }else{
    changePlayer()
  }

}

function restart() {
  // DO NOT ADD LET, it will only take effect for this function and it wont affect the global code
  options = ["", "", "", "", "", "", "", "", ""];
  running = true;
  userTurn = "X";
  cells.forEach((cell) => (cell.textContent = ""));
  statusTxt.textContent = `${userTurn}'s turn`;
}

intializeGame();


// TOM DO BOT AND CHOOSE IF X or O