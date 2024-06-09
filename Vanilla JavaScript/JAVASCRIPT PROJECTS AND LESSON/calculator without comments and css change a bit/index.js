const display = document.getElementById("display");




function userInput(user) {
    display.value += user;
}

function clearDisplay(){
    display.value = " ";
}


function calculate () {
    try {
    display.value = eval(display.value)}

    catch (error){
        display.value = error;
    }
}


function backspaceDisplay() {
    display.value = display.value.slice(0,-1)
}