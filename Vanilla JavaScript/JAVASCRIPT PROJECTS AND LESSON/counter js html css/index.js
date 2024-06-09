const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");
const countLabel = document.getElementById("counterLabel");
let count = 0;


const yes = document.getElementById("yes");
const no = document.getElementById("no");
const tanginamo = document.getElementById("tanginamo");


increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}


resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}


no.onclick = function () {
    tanginamo.textContent = ":<";
}

yes.onclick = function () {
    tanginamo.textContent = " hehe same :>";
}
