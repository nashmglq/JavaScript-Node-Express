const min = 1; 
const max = 100;
const userInput = document.getElementById("userInput");
const userSubmit = document.getElementById("userSubmit");
const answer = document.getElementById("answer");
const random = Math.floor (Math.random() * (max-min + 1)) + min;
const userAnswer = Number(userInput.value);
const playAgain = document.getElementById("play_again");
const running = true;



userSubmit.onclick = function(){
const userAnswer = Number(userInput.value);
if (random === userAnswer){
    answer.textContent = `NICE YOU GUESS IT RIGHT USER: ${userAnswer} COMPUTER: ${random}`;
    playAgain.style.display = "block";

}

else{
    answer.textContent = `TRY AGAIN USER: ${userAnswer} COMPUTER: ${random}`;
    playAgain.onclick = function(){
        window.location.reload()
    }
    playAgain.style.display = "block";
}



}

