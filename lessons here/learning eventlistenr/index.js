const key = document.getElementById("box")


const moveAmount = 10;

let x =0;
let y =0;

document.addEventListener("keydown", event => {
    console.log(event.key)
    if(event.key.startsWith("Arrow")){
        
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;

        }

        key.style.top = `${y}px`;
        key.style.left = `${x}px`;
    }
})