const min = 1;
const max = 100;
const initial = 0;
const resetBtn = document.getElementById("resetBtn1");

let randomNum = Math.floor (Math.random() * (max-min)) + min;


document.getElementById ("newNum").onclick = function () {
    document.getElementById ("randomNum1").textContent = randomNum;
    console.log(randomNum)
}


resetBtn.onclick = function () {
    window.location.reload()
}