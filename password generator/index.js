// user for loop to generate depending on how much character the user wants
// I use array to pass multiple char

function generator() {
  const generate = document.getElementById("generate");
  const result = document.getElementById("result");

  generate.onclick = function () {
    let password = [];
    const amount = document.getElementById("amount").value;
    let amountChar = Number(amount);
    console.log(amountChar);
    for (let i = 1; i <= amountChar; i++) {
      alphabet = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "!",
        "@",
        "#",
        "$",
        "%",
        "^",
        "&",
        "*",
        "(",
        ")",
        "-",
        "_",
        "+",
        "=",
        "{",
        "}",
        "[",
        "]",
        "|",
        ":",
        ";",
        "'",
        '"',
        "<",
        ">",
        ",",
        ".",
        "?",
        "/",
        "~",
      ];

      random = Math.floor(Math.random() * alphabet.length);

      password.push(alphabet[random]);


      result.textContent = password.join("");
    }
  };
}

generator();
