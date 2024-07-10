// use random for dealer, 2 cards (values) and only show the first one
// user can have unli, as long as it wont pass 21
const dealerText = document.getElementById("dealerText");
const userText = document.getElementById("userText");
const whoWon = document.getElementById("winOrloss");
const newDiv = document.querySelector(".newDiv")
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let dealersCard = [];
let usersCard = [];
let gameOver = false;


function initialValueDealer() {
  const random = Math.floor(Math.random() * cards.length);
  const random2 = Math.floor(Math.random() * cards.length);
  let dealerFirst = cards[random];
  let dealerSecond = cards[random2];
  dealersCard.push(dealerFirst, dealerSecond);
  // use map(wont change the original), array (value at that index), so if 0 return the value if not return X
  dealerText.textContent = dealersCard.map((array, index) => index === 0 ? array : "X");


  // for (let i = 0; i < dealersCard.length; i++ ){
  //   let id = dealersCard[i];

  //   images.push(`<img src = "cardImg/${id}.png">`)
    
  // }

  // dealerText.innerHTML = images;


}

function initialValueUser() {
  const random = Math.floor(Math.random() * cards.length);
  const random2 = Math.floor(Math.random() * cards.length);
  let userFirst = cards[random];
  let userSecond = cards[random2];
  usersCard.push(userFirst, userSecond);
  userText.textContent = usersCard;
}

function dealerCardAdd() {
  const totalnew = dealersCard.reduce((sum, next) => sum + next, 0);


  console.log(totalnew)

  if(totalnew < 10) {
    const random = Math.floor(Math.random() * cards.length);
    let dealerAdd = cards[random];

    dealersCard.push(dealerAdd)

    dealerText.textContent = dealersCard.map((array, index) => index === 0 ? array : "X");

  }

}

function hitme() {
  if (gameOver === true) { // set to true when game is over and return (exit)
    return;
  }

  const random = Math.floor(Math.random() * cards.length);
  let userRandom = cards[random];
  console.log(userRandom);
  usersCard.push(userRandom);
  userText.textContent = usersCard;

  const evaluser = usersCard.join("+");
  let totalUser = eval(evaluser);
  dealerCardAdd()
  if (totalUser > 21) {
    dealerText.textContent = dealersCard;
    whoWon.textContent = "BUST";
    gameOver = true;
    restart()
  }
}

function stand() {
  // const evaluser = usersCard.join("+");
  // const evaldealer = dealersCard.join("+");
  // let totalDealer = eval(evaldealer);  Do not use EVAL, it is better to use reduce
  // let totalUser = eval(evaluser); Do not use EVAL, it is better to use reduce

  if (gameOver === true) {  // set to true when game is over and return (exit)
    return;
  }

  const totalUser = usersCard.reduce((total, next) => total + next, 0);
  const totalDealer = dealersCard.reduce((total, next) => total + next, 0);

  console.log(totalUser);


  if (totalUser === totalDealer) {
    dealerText.textContent = dealersCard;
    whoWon.textContent = "Draw";
    gameOver = true;
    restart()
  }

  if (totalUser < totalDealer) {
    dealerText.textContent = dealersCard;
    whoWon.textContent = "You Loss";
    gameOver = true;
    restart()
  }

  if (totalUser > totalDealer) {
    dealerText.textContent = dealersCard;
    whoWon.textContent = "You won";
    gameOver = true;
    restart()
  }
}

function restart(){
  const restartButton = document.createElement("button");
  restartButton.textContent = "Play Again?"
  newDiv.appendChild(restartButton)


  restartButton.onclick = () => { window.location.reload()} // onclick = function
  
}



initialValueUser();
initialValueDealer();
