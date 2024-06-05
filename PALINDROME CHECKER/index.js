const txtInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");



checkBtn.addEventListener("click", event => {
  event.preventDefault()
  let txtValue = txtInput.value.toLowerCase();

  if (txtValue) {
    let splitValue = txtValue.split("");
    let reverseValue = splitValue.reverse();
    let joinReverse = reverseValue.join("");

    let removeSpace = txtValue.replace(/\s/g, "")
    let removeSpaceR = joinReverse.replace(/\s/g, "")
    let removeCharac = removeSpace.replace(/[,._()_:\/\\-]/g, "")
    let removeCharacR = removeSpaceR.replace(/[,._()_:\/\\-]/g, "")

    if (removeCharac === removeCharacR) {
      resultDiv.textContent = `${txtValue} is a palindrome`;
      txtInput.value = ""

    }

    else {
      resultDiv.textContent = `${txtValue} is not a palindrome`;
      txtInput.value = ""

      console.log(removeCharac);
      console.log(removeCharacR)
    }



  } else {
    window.alert("Please input a value")
  }
})
