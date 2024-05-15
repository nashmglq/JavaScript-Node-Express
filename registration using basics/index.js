const username = document.getElementById("usernameInput");
const email = document.getElementById("emailInput");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const warning = document.getElementById("warning");
const submit = document.getElementById("userSubmit");


submit.onclick = function() {
    if (username.value.length < 4){
        warning.textContent = "Username must be greater than 4";
    }


    else if (password1.value.length < 8) {
        warning.textContent = "password must be greater than 8";
    }   
    
    else if (password1.value !== password2.value ){
        warning.textContent = "password are not equal"
    }
}