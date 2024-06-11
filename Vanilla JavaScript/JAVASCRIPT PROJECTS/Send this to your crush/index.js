const formUsername = document.querySelector(".formUsername");
const username = document.getElementById("username");
const imgK = document.getElementById("idlekuromi");
const news = document.getElementById("new");
const buttonChange = document.querySelector(".submit");
const quizDiv = document.querySelector(".quiz");
const quizDiv2 = document.querySelector(".quiz2");
const quizDiv3 = document.querySelector(".quiz3");

formUsername.addEventListener("submit", (event) => {
  event.preventDefault();

  const usernameValue = username.value; // We use value here so we can get the latest input.
  try {
    if (usernameValue) {
      imgK.src = "src/kuromiUsername.png"; //overwrites the initial state

      buttonChange.style.display = "none";
      const newButton = document.createElement("button");
      newButton.classList.add("submit");

      newButton.textContent = "Redirecting...";
      formUsername.appendChild(newButton);

      setTimeout(() => {
        formUsername.style.display = "none";
        quiz1(usernameValue);
      }, 1000);
    } else {
      imgK.src = "src/kuromi-idle.png";
      throw new Error("Please Enter A Username");
    }
  } catch (error) {
    news.textContent = "Please Enter A Username";
    imgK.src = "src/madDog.png";
  }
});

function quiz1(user) {
  if (formUsername.style.display === "none") {
    const greetings = document.createElement("h1");
    const question = document.createElement("h2");
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");

    question.classList.add("question");
    button1.classList.add("submit");
    button2.classList.add("submit");

    greetings.textContent = `Hello ${user}`;
    question.textContent = "Are you ready for your First Question?";
    button1.textContent = "Yes!";
    button2.textContent = "no.";

    quizDiv.appendChild(greetings);
    quizDiv.appendChild(question);
    quizDiv.style.display = "flex";

    const newDiv = document.createElement("div");
    newDiv.appendChild(button1);
    newDiv.appendChild(button2);
    quizDiv.appendChild(newDiv);

    button1.addEventListener("click", () => {
      quiz2(button1.textContent); // we can get the value using the button1.texcontntet
    });

    button2.addEventListener("click", () => {
      quiz2(button2.textContent);
    });
  }
}

function quiz2(answer) {
  if (answer === "Yes!") {
    quizDiv.style.display = "none";

    const question = document.createElement("h2");
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");

    question.classList.add("question");
    button1.classList.add("submit");
    button2.classList.add("submit");

    question.textContent = "Do you love me?";
    button1.textContent = "Yes!";
    button2.textContent = "no.";

    quizDiv2.appendChild(question);
    quizDiv2.style.display = "flex";

    const newDiv = document.createElement("div");
    newDiv.appendChild(button1);
    newDiv.appendChild(button2);
    quizDiv2.appendChild(newDiv);

    button1.addEventListener("click", () => {
      results(button1.textContent);
    });

    button2.addEventListener("mouseover", () => {
      button2.style.position = "absolute";
      const x = Math.floor(Math.random() * 100) + 1;
      const y = Math.floor(Math.random() * 100) + 1;
      const i = x;
      const j = y;
      button2.style.top = `${j}px`;
      button2.style.right = `${i}px`;
    });
  } else {
    quizDiv.style.display = "none";
    const greetings = document.createElement("h1");
    const backButton = document.createElement("button");
    const addImg = document.createElement("img");

    addImg.src = "src/kuromisad.jpg";
    greetings.textContent = "Aw oki";
    backButton.textContent = "Go back";

    addImg.classList.add("addImg");
    backButton.classList.add("submit");
    quizDiv2.appendChild(addImg);
    quizDiv2.appendChild(greetings);
    quizDiv2.appendChild(backButton);
    quizDiv2.style.display = "flex";

    backButton.addEventListener("click", () => {
      window.location.reload();
    });
  }
}

function results() {
  quizDiv2.style.display = "none";
  quizDiv3.style.display = "flex";

  const h1 = document.createElement("h1");
  const resultImg = document.createElement("img");
  const backButton = document.createElement("button");

  h1.textContent = "I love you too :>";

  resultImg.src = "src/result.gif";
  backButton.textContent = "Take quiz again";

  backButton.classList.add("submit");

  resultImg.classList.add("addImg");

  quizDiv3.appendChild(h1);

  quizDiv3.appendChild(resultImg);
  quizDiv3.appendChild(backButton);

  backButton.addEventListener("click", () => {
    window.location.reload();
  });
}
