const todoForm = document.querySelector(".todo");
const userInput = document.getElementById("todoinput");
const listOfwhat = document.querySelector(".listOfwhat");
const errorP = document.getElementById("errorP");
const deleteDiv = document.querySelector(".deleteDiv");

todoForm.addEventListener("submit", (event) => {
  event.preventDefault(); // use event, todoForm is to access its PROPERTY
  const valueInput = userInput.value;
  if (valueInput) {
    const valueP = document.createElement("p");
    const checkBox = document.createElement("input");
    const newDiv = document.createElement("div");

    checkBox.type = "checkbox";
    valueP.textContent = valueInput;
    newDiv.classList.add("newDiv");
    checkBox.classList.add("check");

    newDiv.appendChild(checkBox);
    newDiv.appendChild(valueP);

    listOfwhat.appendChild(newDiv);

    userInput.value = "";
    errorP.textContent = "";
    deleteButton(newDiv);
  }
});

function deleteButton(newDiv) {
  const newbutton = document.createElement("button");
  if (listOfwhat.textContent.trim().length > 0) {
    newbutton.classList.add("buttonD");
    newbutton.textContent = "Delete";

    if (deleteDiv.textContent.trim().length < 1) {
      deleteDiv.appendChild(newbutton);

      newbutton.onclick = function () {
        const getCheck = document.querySelectorAll(".check"); //I get it know becuase if we put it on start, it wont check what is check when we onclick, what will happen is it will only check on what was pass when we use the eventListner (above)
        console.log("qweee");
        getCheck.forEach((check) => { //getCheck will select and return all elements in the document that have the class .check
          if (check.checked) {        // and check parameter will represent each .check one by one 
            const goodDiv = check.parentElement; //it show the div with an class of newDiv, is that means we are calling the div of where the .check is? YES.
            listOfwhat.removeChild(goodDiv); // found the problem, if we pass the newDiv it will only get the latest newDiv.

            console.log(goodDiv)
          }
        });

        if (listOfwhat.textContent.trim().length === 0) {
          // Why put here? so we can check the lenght each time we delete, if we put it outside it will check it after we input a new value which wont remove it because there is a new
          // textContent, if we put it here it will make a new count every delete because it will count it.
          newbutton.remove();
        }
      };
    }
  }
}
