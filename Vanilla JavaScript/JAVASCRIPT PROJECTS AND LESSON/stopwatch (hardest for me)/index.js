const displayTimer = document.getElementById("timerDisplay");
const displayLaps = document.getElementById("displayLap");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let startTime = 0;
let elapseTime = 0;
let isRunning = false;

function start() {
  // check if the timer is running if true it will run the code
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapseTime;
    // start time to know when it started it is a checkpoint
    // example Date = 2 elapse = 0 so 2 - 0, starTime will be 2
    setInterval(update, 10);
  }
}

function stop() {
  isRunning = false;
  elapseTime = Date.now() - startTime;

  // asume time has passed so the date will be 4 - the starttime(2) = 2 meaniung 2 seconds after the start time
}

function reset() {
  isRunning = false;
  elapseTime = 0;
  displayTimer.textContent = "00: 00: 00: 00";
}

function update() {
  if (isRunning) {
    const newDate = Date.now();
    elapseTime = Date.now() - startTime;
    const hours = Math.floor(elapseTime / (60 * 60 * 1000));
    const minutes = Math.floor((elapseTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapseTime / 1000) % 60);
    const ms = Math.floor((elapseTime % 1000) / 10);

    // on ms check if the elapse time is % 1000 if it is return 0
    // if not return the orignal
    // the return will be devided to /10 to only show 2 decmial

    const newHours = hours.toString().padStart(2, 0);
    const newMin = minutes.toString().padStart(2, 0);
    const newSec = seconds.toString().padStart(2, 0);
    const newMs = ms.toString().padStart(2, 0);

    displayTimer.textContent = `${newHours}: ${newMin}: ${newSec}: ${newMs}`;
  }
}


startBtn.onclick = start;
stopBtn.onclick = stop;
resetBtn.onclick = reset;






// ADDITIONAL LOGIC FOR U :>>>>>

// so if i start at 2

// i stop at 10  I have 8 as elapse time?

// now if I want to start again after stopping it for 4 seconds

// my date.now will be 14 and subtracting that to the elpasetim which is 8 then I will have

// 6 seconds of the display? yes or no?
