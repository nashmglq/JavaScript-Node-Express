function rollDice() {
    const submit = document.getElementById ("userSubmit");
    const diceResult = document.getElementById("diceResults");
    const diceImg = document.getElementById("diceImg");


    submit.onclick = function (){
        const userInput = document.getElementById("userInput").value;
        results = [];
        images = [];

        for(let i = 0; i < userInput; i++){
            value = Math.floor(Math.random() * 6) + 1;
            results.push(value);
            images.push(`<img src = "dice_images/${value}.png">`);
            
        }

        console.log(value)
        diceResult.textContent = `You rolled ${results.join(", ")}`;
        diceImg.innerHTML = images
        console.log(diceImg)
    }


}


rollDice()

// every increament of for loop is 1

// so if userInput = 2 {2, 2} kase everyone one ikot add one new number

// so if userInput = 1 {1(random input)}