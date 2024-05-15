// start it will call the function with an interval of 10?
// stop it will use clearTimeout
// reset initalize to zero



const display = document.getElementById("time");
const startFunction = document.getElementById("start");
const resetFunction = document.getElementById("reset");
const stopFunction = document.getElementById("stop");
let timer = null;
let startTime = 0;
let elapseTime = 0;
let isRunning = false;


function start() {

    if(!isRunning){
        startTime = Date.now() - elapseTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }


}


function stop() {
    if(isRunning){
        clearInterval(timer)
        elapseTime = Date.now() - startTime; 
        isRunning = false  // if walang ganto mag run paden sstop lang ung display
        console.log(elapseTime)
    }
}




function reset() {
    if(isRunning) {
        clearInterval(timer);
        elapseTime = 0;
        isRunning = false
        console.log(elapseTime)
        display.textContent = "00: 00 : 00 : 00"
    }

    else  {
        clearInterval(timer);
        elapseTime = 0;
        isRunning = false
        console.log(elapseTime)
        display.textContent = "00: 00 : 00 : 00"
    }
}

function update() {
    const currentTime = Date.now();
    elapseTime = currentTime - startTime; 

    let hours = Math.floor(elapseTime / (1000 * 60 * 60));

    let minutes = Math.floor((elapseTime / (1000 * 60 )) % 60);

    let seconds = Math.floor((elapseTime / 1000 )% 60 );

    let ms = Math.floor ((elapseTime % 1000 )/ 10);

    let newHours = hours.toString().padStart(2,0)
    let newMinutes = minutes.toString().padStart(2,0)
    let newSeconds = seconds.toString().padStart(2,0)
    let newMs = ms.toString().padStart(2,0)

    display.textContent = `${newHours}: ${newMinutes}: ${newSeconds}: ${newMs}`

}



startFunction.onclick = start;
stopFunction.onclick = stop;
resetFunction.onclick = reset;


// lets do this again tomorrow pero dapat with laps na, for example makikita mo each laps every stop
