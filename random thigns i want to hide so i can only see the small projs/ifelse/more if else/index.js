const myCheckbox = document.getElementById("myCheckbox");
const visa = document.getElementById("visa");
const paypal = document.getElementById("paypal");
const gcash = document.getElementById("gcash");
const submit = document.getElementById("submit");
const payment = document.getElementById("payment");
const subscribe = document.getElementById("subscribe");

submit.onclick = function() {
    if (myCheckbox.checked) {
        subscribe.textContent = "Processing subscription";

        if(visa.checked) {
            payment.textContent = "VISA... SUCCESSFULLY SUBSCIRE"
        }

        else if (paypal.checked) {
            payment.textContent = "PAYPAL... SUCCESSFULLY SUBSCIRE"
        }

        else if (gcash.checked) {
            payment.textContent = "GCASH... SUCCESSFULLY SUBSCIRE"
            
        }



        else{
            payment.textContent = "Please choose a paymanet"
        }
    }


    else {
        payment.textContent = "YOU ARE NOT SUBSCRIBE"
    }
}