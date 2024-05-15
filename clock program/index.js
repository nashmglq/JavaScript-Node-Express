function clockProg () {
    const returnTime = document.getElementById("clock")
    const dateNow = new Date();
    const hours = dateNow.getHours();
    const mins = dateNow.getMinutes().toString().padStart(2,0);
    const seconds = dateNow.getSeconds().toString().padStart(2,0);
    const amPm = hours <=12 ? "AM" : "PM";
    const newhours = hours % 12 === 0? 12 :hours % 12; 
    const latest = newhours.toString().padStart(2,0)
    


    const returnState = `${latest}: ${mins} : ${seconds} ${amPm}`

    returnTime.textContent = returnState
    console.log(returnState)
}

clockProg()
setInterval(clockProg, 1000)