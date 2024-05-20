const myButton = document.getElementById("myButton");
const img = document.getElementById("moveH1");
const myButtonNo = document.getElementById("myButtonNo");
const imgMove = document.getElementById("imgMove");

// this is the easiest way to do this for me
// using randomizer raging 1 to 499 px
// why deos it go down and right even though we dont have negative?
// it is because it reset the px


imgMove.style.visibility = "hidden";
moveH1.style.visibility = "hidden";
moveH1.style.position = "absolute";


myButton.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * 500);
  const y = Math.floor(Math.random() * 500);

  myButton.style.top = `${y}px`;
  myButton.style.left = `${x}px`;
  console.log(x);
  console.log(y);
});

myButtonNo.addEventListener("click", () => {

  imgMove.style.visibility = "visible";
  moveH1.style.visibility = "visible";
  myButton.style.visibility = "hidden";
  myButtonNo.style.visibility = "hidden";
});



// THIS WILL ALSO WORK, SAME CONCEPT THE ONLY PROBLEM IS THAT IF CONTINUE TO THE LEFT OR RIGHT OR TOP OR BOTTOM
// THE BUTTON CANNOT BE ACCESS ANYMORE so the above one is better...

// const myButton = document.getElementById("myButton")

// let x = 0;
// let y = 0;

// myButton.addEventListener("mouseover", () => {
//   randomPositionX = [-100, 100];
//   randomPositionY = [-100, 100];

//   randomX = Math.floor(Math.random() * randomPositionX.length);
//   randomY = Math.floor(Math.random() * randomPositionY.length);

//   randomResultX = randomPositionX[randomX];

//   randomResultY = randomPositionY[randomY];

//   x += randomResultX;
//   y += randomResultY;

//   myButton.style.top = `${y}px`;
//   myButton.style.left = `${x}px`

// })
