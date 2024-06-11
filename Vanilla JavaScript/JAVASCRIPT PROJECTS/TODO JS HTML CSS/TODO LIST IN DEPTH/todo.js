const todoForm = document.querySelector(".todo");
const todoInput = document.getElementById("todoinput");
const listOfwhat = document.querySelector(".listOfwhat");
const deleteDiv = document.querySelector(".deleteDiv");

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const valueP = todoInput.value;

  if (valueP) {
    const newPar = document.createElement("p");
    const checkBox = document.createElement("input");
    const newDiv = document.createElement("div");
    checkBox.type = "checkbox";
    newPar.textContent = valueP;

    checkBox.classList.add("check");
    newDiv.classList.add("newDiv");
    newDiv.appendChild(checkBox);
    newDiv.appendChild(newPar);

    listOfwhat.appendChild(newDiv);

    todoInput.value = null; // reset the actual value, the valueP just holds the prev value.

    deleteButton();
  }
});

function deleteButton() {
  const newButton = document.createElement("button");
  newButton.classList.add("buttonD");
  newButton.textContent = "Delete";
  // const getAllCheck = document.querySelectorAll(".check"); // get all the classList with .check  if we put it here it will only get the .check when the deleteButton() was called so it will only call the first one

  if (listOfwhat.textContent.trim().length > 0) {
    // check if textContent of listOfwhat div is > 0
    if (deleteDiv.textContent.trim().length < 1) {
      // check if deleteDiv textContnte(charfields) < 1
      deleteDiv.appendChild(newButton);

      newButton.onclick = function () {
        const getAllCheck = document.querySelectorAll(".check");
        // Positioning is one of the key on this code, we need to position the getAllcheck here. So each time the newButton was click it will get the new elements with .check
        // SO WHEN WE CLICK the delete, it will first get all the .check ON OUR DOM.
        // SO NOW IT WILL DELETE ALL CHECKED BECUASE WE ARE READING ALL THE .CHECK EACH TIME WE PRESS DELETE
        getAllCheck.forEach((representCheck) => {
          // representCheck will represent EACH getAllCheck classlist or .check classlist
          if (representCheck.checked) {
            const removeDiv = representCheck.parentElement; // get the parentDiv or the div where it is.
            listOfwhat.removeChild(removeDiv); // if we use the newDiv parameter, it will only get the latest div
          }
        });

        if (listOfwhat.textContent.trim().length === 0) {
          // PUT IT HERE, so each time we delete it will update the length
          // if we put it outside it wont read it, and even though we call it using the eventLisnter it will never become 0
          // it is because if add a new input the textContent will never be equal to zero
          deleteDiv.removeChild(newButton); // use removeChild if we use remove it will entriel remove the newButton and we cannot add it again or append,becuase it will remove the memory of the dom that it has the newelemnt BUTTON
        }
      };
    }
  }
}
