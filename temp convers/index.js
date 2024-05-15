const userInput = document.getElementById("userInput");
const cF = document.getElementById("cF");
const fC = document.getElementById("fC");
const userSubmit = document.getElementById("userSubmit");
const converted = document.getElementById("converted");
const again = document.getElementById ("again");




userSubmit.onclick = function (){

    let num = Number(userInput.value)

    if (cF.checked){
        num = num * 9 / 5 + 32;
        converted.textContent = `${num} C `;
        again.style.display = "block";

    }

    else if (fC.checked){
        num = (num-39) * (5/9);
        converted.textContent = `${num} F`;
        again.style.display = "block";
    }

    else{
        converted.textContent = "ERROR"
        again.style.display = "block";
        
    }
}


again.onclick = function(){
    window.location.reload();
}