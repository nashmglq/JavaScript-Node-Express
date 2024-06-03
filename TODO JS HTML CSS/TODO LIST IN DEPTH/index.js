const form = document.querySelector(".login");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const errorDisplay =document.getElementById("error")


form.addEventListener("submit", (event) => {
    event.preventDefault()

    const userV = username.value;
    const passV = password.value;

    try{
    if (userV && passV.length >= 8) {
        window.location.href = "/todo.html";
    }

    else{
        throw new Error("Please input password and username properly")
    }
}catch(error){
    errorDisplay.textContent = error;
    
}
})