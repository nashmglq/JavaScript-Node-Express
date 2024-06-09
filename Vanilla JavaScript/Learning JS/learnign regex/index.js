const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

// const checker = /\d{10}/g;

const checker = /^(1)?[ -]?(?:\(\d{3}\)|\d{3})[ -]?\d{3}[ -]?\d{4}$/;


//oke now I get it, I added the )?, which validatae this (123 123 1231 if I just us the non-capturing it will Invalid

//what i did, i use non capturing ?: before the open parenthesis "\(" and close it as normal ")" and use OR to inside the group

//regEx is killing me, earlier it wont work, not it is working :>>><><><><

//regEx so it is like saying you are not grouping this, instead you are checking if the input is group with ()


checkBtn.addEventListener("click", event => {
  event.preventDefault();

  let userValue = userInput.value;

  if(userValue){
    if(checker.test(userValue)){
      resultsDiv.textContent = `Valid US number: ${userValue}`
    }else{
            resultsDiv.textContent = `Invalid US number: ${userValue}`
    }

  }
  else{
    window.alert("Please provide a phone number")
  }
})

clearBtn.addEventListener("click",() => {
  resultsDiv.innerHTML = "";
});