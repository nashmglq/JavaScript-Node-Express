const cells = document.querySelectorAll(".cell");
const statusTxt = document.getElementById("statusText");
const resetButton = document.getElementById("restartGame");

winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

const initialGame = () => {
  // when page load this will show
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  resetButton.addEventListener("click", restartGame);
  statusTxt.textContent = `${currentPlayer}'s turn`;
  running = true;
};

const cellClicked = function () {
  // "this" cannot be use in arrow function
  const cellIndex = this.getAttribute("cellIndex"); // "this" refers to the current object(a varibale) or HTML element in context. (<div cellIndex="0" class="cell"></div>)
  // getAttribute is not a keyword it is a way to get the attribute

  if (options[cellIndex] != "" || !running) {
    //  option is like saying this is what you have in your array,   option of what i have [the value of the cellIndex]
    return; // if it does not have anything to return it will exit the programm, now if you do not put that when you clicked it, it will still change
  }

  userInput(this, cellIndex);
  checkWinner();
};

const userInput = (cell, index) => {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
};

const changePlayer = () => {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusTxt.textContent = `${currentPlayer}'s turn`;
};

const checkWinner = () => {
  let roundWon = false;

  for (let i = 0; i < winningCombination.length; i++) {
    // winniong combintaiotn will get diagonal, row, and coloumn
    const condition = winningCombination[i]; // get the index in the array
    // condition is the index inside the array
    const cellA = options[condition[0]]; // this will get the first index according to the condition
    const cellB = options[condition[1]]; // this will get the second index according to the condition
    const cellC = options[condition[2]]; // this will get the third index according to the condition

    // SO BASICALLY THE OPTIONS [CONDITION[i]] WILL JUST find the index pass by the condition and winningCOmbination in the options
    console.log(`I: ${i}  Cell A: ${cellA} Cell B: ${cellB} Cell C: ${cellC}`); // 7<7 no that is why no more console.log for cellA cellB and cellC
    // it will loop on each winningCombination and check if it has an x on that index
    // if I put it on winningCOmbination[0] an x will show on the cellA

    if (cellA === "" || cellB === "" || cellC === "") {
      // check if something is still empty or check if it is full, if still empty proceed to the if (next)
      continue;
    }
    if (cellA == cellB && cellB == cellC) {
      // if equal value === won, also if some are empty it will go here and check if equal
      roundWon = true;
      break; // break means stop the iteration
    }
  }

  if (roundWon) {
    statusTxt.textContent = `${currentPlayer}' WON`;
    running = false;
  } else if (!options.includes("")) {
    // the options.include("") so we add ! means it does not include any spaces or empty (NO SPACE) (NOT options.include(""))
    statusTxt.textContent = "Draw";
  } else {
    changePlayer();
  }
};

const restartGame = () => {
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusTxt.textContent = `${currentPlayer}'s turn`
    cells.forEach(cell => cell.textContent = "")
    running = true;

    // Is it becuase of the let? we are letting it to be like that but we aint setting the new value?

    // YES, using let inside restartGame creates new variables that are local to that function and does not affect the outer variables.
    // Removing let allows you to modify the outer variables directly, which is why your second example works as expected.
};

initialGame();
