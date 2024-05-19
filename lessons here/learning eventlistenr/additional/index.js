const key = document.getElementById("hideBtn");
const img = document.getElementById("img");



// initial state is from the DOM
// so if it wil go to the else statment
// now it is hidden it will meet the if statment if button is clicked

key.addEventListener("click", event => {



    if(img.style.visibility === "hidden") {
        img.style.visibility = "visible";
        key.textContent = "hide";

    }

    else {
        img.style.visibility = "hidden";
        key.textContent = "show";

    }
});



