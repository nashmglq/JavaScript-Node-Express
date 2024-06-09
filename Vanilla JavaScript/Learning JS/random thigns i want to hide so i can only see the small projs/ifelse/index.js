const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const renderElement = document.getElementById("renderElement");


mySubmit.onclick = function() {
    age = myText.value;

    if (age >= 18){
        renderElement.textContent = "You are authrozied to access this page";
    }

    else if (age < 18) {
        renderElement.textContent = "You are not authorized to access this page";
    }

    else if (age < 0) {
        renderElement.textContent = "You cannot implement less than 0";
    }

    else {
        renderElement.textContent = "INVALID";
    }
}