function headTails() {
  const toss = document.getElementById("toss");
  const result = document.getElementById("result");
  const txtResult = document.getElementById("txtResult");

  toss.onclick = function(){
    choice = ["heads", "tails"];
    random = Math.floor(Math.random()*choice.length);
    answer = choice[random];

    result.innerHTML = `<img src = "heads_tails/${answer}.jpg">`;
    txtResult.innerHTML = `The coin has been toss : ${answer}`;

  }
}

headTails()
