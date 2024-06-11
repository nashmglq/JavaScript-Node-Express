// When the page loads, userInput is 0 because it's not set yet. Moving it inside 
// the onclick function ensures it gets the current user input each time the button is clicked.
// SO IF node is outside it will give zero, if inside it will update the new value each time we
// TRIGGER or CLICK the button because it will call the fuction..



const imageHolder = document.getElementById("imageholder");
const numberHolder = document.getElementById("numberholder");
const submit = document.getElementById ("submit");
const total = document.getElementById ("total");



submit.onclick = function (){
    const userInput = document.getElementById("userInput").value;
    let newUserInput = Number(userInput);
    let setofImage = []
    let setofNumber = []


    for(i = 1; i <= newUserInput; i++){
        const randomDice = [1,2,3,4,5,6];
        const random = Math.floor(Math.random() * randomDice.length);
        // randomDice[index] this means that the random variable will give an index
        // ranging to the randomDice only
        let result = randomDice[random];
        
        setofImage.push(`<img src = "dice_images/${result}.png">`)
        setofNumber.push(result)

    }

    let newSetofNumber = setofNumber.join("+")
    let evalNewValue = eval(newSetofNumber);

    imageHolder.innerHTML = setofImage.join("")
    numberHolder.textContent = setofNumber.join(",")
    total.textContent = `Total Roll ${evalNewValue}`;


}