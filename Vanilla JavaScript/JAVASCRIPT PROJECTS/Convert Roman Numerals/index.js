const userNumber = document.getElementById("number");

const convertBtn = document.getElementById("convert-btn");

const display = document.getElementById("output");

convertBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let userValue = userNumber.value;


  if (userValue) {
    if (userValue >= 1 && userValue <= 3999) {
      let result = "";

      const romanNumerals = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" },
      ];

      // for (let i = 0; i < romanNumerals.length; i++) { // ex. value is 3000 the for loop will pass the first value or the index [0]
      //   while (userValue >= romanNumerals[i].value) {  //  check if the index[0] is >=
      //     result += romanNumerals[i].symbol;            // if it is execute this code, this will add each iteration to the result until the loop is finsih
      //     userValue -= romanNumerals[i].value;          // this will subtract the userValue to the value whic will cause the loop to use another index
      //   }
      // }

      //OHH I GET IT, IT WILL TRY EACH ITERATION. NOW IF THE VALUE OF THE ITEARTION IS GREATER THAN THE USERVALUE THIS WILL EXECUTE:

      // result += romanNumerals[i].symbol;
      // userValue -= romanNumerals[i].value

      // IF NOT THEN IT WILL GO TO THE NEXT ITERATION


      for(let i = 0; i < romanNumerals.length; i++ ){
        while(userValue >= romanNumerals[i].value){
          result += romanNumerals[i].symbol;
          userValue -= romanNumerals[i].value;
        }
      }

      display.textContent = result;
      display.style.display = "flex";
    } else if (userValue >= 4000) {
      display.textContent = "Please enter a number less than or equal to 3999";
      display.style.display = "flex";
    } else if (userValue < 1) {
      display.textContent = "Please enter a number greater than or equal to 1";
      display.style.display = "flex";
    }
  } else {
    display.textContent = "Please enter a valid number";

    display.style.display = "flex";
  }
});
