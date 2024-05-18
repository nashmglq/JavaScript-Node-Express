const display = document.getElementById("display");
// for display use .value not .txtcontent becuase we use <input>
// so before creating this i was thinking the hardest way 
// it is to num1 + num2  -_- but after looking for other code I saw the eval Keyword
// I already saw a youtube short video about this but using python..


function userInput(input) {
    display.value += input;
}


function clearDisplay () {
    display.value = " ";
}


function calculateResult() {
    try{
    display.value = eval (display.value)}

    catch(error) {
        display.value = error;
    }

}


function backspace(){
    display.value = display.value.slice(0,-1);
}






