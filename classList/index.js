let myButton = document.querySelectorAll(".myButton");


// myButton.addEventListener("mouseover", event => {
//     event.target.classList.add("hover")
// })

// myButton.addEventListener("mouseout", event => {
//     event.target.classList.remove("hover")
// })

// myButton.classList.add("disable")

// myButton.addEventListener("click", event => {

//     if(event.target.classList.contains("disable")){
//         event.target.classList.replace("disable", "enabled")
//     }

//     else {
//         event.target.classList.replace("enabled", "disable")
//     }
// })

myButton.forEach(button => {
    button.classList.add("enabled")
    })


myButton.forEach(button => {
    button.addEventListener("click", event => {
        event.target.classList.replace("enabled", "disbale")
    })
} )


