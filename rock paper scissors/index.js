function robot (userChoice) {
    choices = ["rock", "paper", "scissors"];
    random = Math.floor(Math.random() * choices.length); 

    //if you choose to put 2 it will only print rock to paper because the 2 will not be hit
    // that is why we put 3 or choices.length because the counting is 0 1 2 and it wont hit 3

    const sagotComputer = document.getElementById("sagotComputer");
    ai = choices[random];
    sagotComputer.innerHTML =`Robot answer: <br/> <img src = "items/${ai}.png">`;
    console.log(choices.length)
    return ai

}


function user () {
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");
    const sagotUser = document.getElementById("sagotUser");
    const result = document.getElementById("result");
    let finalSagot;

    rock.onclick = function (){
        const rock = document.getElementById("rock").value;
        let rockV = rock;
        finalSagot = rockV;
        sagotUser.innerHTML = `Your answer: <br/> <img src = "items/${finalSagot}.png">`;
        robot();
        computer = robot()

        console.log(computer)

        if (finalSagot === computer){
            result.textContent = "TIE"
        }

        else if ( finalSagot && computer === "paper"){
            result.textContent = "YOU LOST"
        }

        else if ( finalSagot && computer === "scissors"){
            result.textContent = "YOU WON!"
        }


    }


    paper.onclick = function (){
        const paper = document.getElementById("paper").value;
        let paperV = paper;
        finalSagot = paperV;
        sagotUser.innerHTML = `Your answer: <br/> <img src = "items/${finalSagot}.png">`;
        robot();
        computer = robot()

        console.log(computer)

        if (finalSagot === computer){
            result.textContent = "TIE"
        }

        else if ( finalSagot && computer === "scissors"){
            result.textContent = "YOU LOST"
        }

        else if ( finalSagot && computer === "rock"){
            result.textContent = "YOU WON!"
        }


    }


    scissors.onclick = function (){
        const scissors = document.getElementById("scissors").value;
        let scissorsV = scissors;
        finalSagot = scissorsV;
        sagotUser.innerHTML = `Your answer: <br/> <img src = "items/${finalSagot}.png">`;
        robot();
        computer = robot()

        console.log(computer)



        if (finalSagot === computer){
            result.textContent = "TIE"
        }

        else if ( finalSagot && computer === "rock"){
            result.textContent = "YOU LOST"
        }

        else if ( finalSagot && computer === "paper"){
            result.textContent = "YOU WON!"
        }

        
        
    }

}


user()

