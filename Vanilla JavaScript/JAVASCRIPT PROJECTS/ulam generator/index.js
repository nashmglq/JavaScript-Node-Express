const imageHolder = document.getElementById("imageHolder");
const ulamHolder = document.getElementById("ulamHolder");
const submit = document.getElementById("submit");


submit.onclick = function () {
    const userInput = document.getElementById("userInput").value;
    let newUserInput = Number(userInput);

    let image = [];
    let ulam = [];

    for (let i = 1; i <= newUserInput; i++){
        const ulamChoice = ["adobo", "karekare", "lechon", "sisig","tinola"];
        const randomizer = Math.floor(Math.random() * ulamChoice.length);

        let result = ulamChoice[randomizer]; //getting the index from randomizer;

        image.push(`<img src = "ulam/${result}.jpg">`)
        ulam.push(result)
    }

    imageHolder.innerHTML = image.join(" ");
    console.log(image)
    ulamHolder.textContent = ulam.join(", ");

}