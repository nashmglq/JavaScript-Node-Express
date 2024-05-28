const api = "42af987528824841db9a144be6f1e0b4";

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

// using eventListner with form div (it is better with submit than onclick)

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // prevent the default behavior (which is the reloading of the form)
  const city = cityInput.value;
  try {
    if (city) {
      const weatherData = await getWeatherData(city); //use await becuase we are waiting for an API
      displayWeatherInfo(weatherData);
      console.log(weatherData);
    } else {
      errorDisplay("PLEASE ENTER A CITY"); // passing a new message so this one will render if no city
    }
  } catch (error) {
    errorDisplay(error); // while this one will catch the erro from the getWeatherData function throw New Error
  }
});

async function getWeatherData(city) {
  // asynch wait
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
  const response = await fetch(apiUrl); // WAIT FOR THE API URL TO RESPONSE BEFORE RETURNING AN OBJECT (NETWORK)
  // await helps asynch to wait by pausing

  if (!response.ok) {
    throw new Error("FAILED TO FETCH");
  } else {
    return response.json(); // convert the response var to a json
  }
}

function displayWeatherInfo(data) {
  const {
    name: city,
    sys: {country},
    main: { temp, humidity },
    weather: [{ id, description }],
  } = data;

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humiDisplay = document.createElement("p");
  const descriptionDisplay = document.createElement("p");
  const weatherEmojiDisplay = document.createElement("p");

  cityDisplay.textContent = `${city}, ${country}`;
  tempDisplay.textContent = `${(temp - 273.15).toFixed(1)} ° C`;
  humiDisplay.textContent = humidity;
  descriptionDisplay.textContent = description;
  weatherEmojiDisplay.textContent = displayEmoji(id);

  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humiDisplay.classList.add("humidityDisplay");
  descriptionDisplay.classList.add("descriptionDisplay");
  weatherEmojiDisplay.classList.add("weatherEmoji");

  card.textContent = "";
  card.style.display = "flex"; // it will reset then show the flex and append all

  // remember code are being read downward
  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humiDisplay);
  card.appendChild(descriptionDisplay);
  card.appendChild(weatherEmojiDisplay);
}

function displayEmoji(weatherId) {
    switch (true) {
      case weatherId >= 200 && weatherId < 300:
        return "⛈️";
        break;
      case weatherId >= 300 && weatherId < 400:
        return "🌧️";
        break;
      case weatherId >= 500 && weatherId < 600:
        return "🌦️";
        break;
      case weatherId >= 600 && weatherId < 700:
        return "❄️";
        break;
      case weatherId >= 700 && weatherId < 800:
        return "🌬️";
        break;
      case weatherId === 800:
        return "☀️";
        break;
      case weatherId >= 801 && weatherId <= 810:
        return "☁️";
        break;
      default:
        return "❓";
    }
  }
  

function errorDisplay(message) {
  const errorMessageDisplay = document.createElement("p");
  errorMessageDisplay.textContent = message;
  errorMessageDisplay.classList.add("error");

  card.textContent = ""; // clear the prev
  card.style.display = "flex"; // display a new div
  card.appendChild(errorMessageDisplay); //parent adopt the new element "p"
}

//OHH SO ASYNCH IS LIKE A FRIEND WHO IS UNPATIANET AND AWAIT IS A FRIEND DISTRACTING ASYNCH TO WAIT FOR IT

// async is like : Aight I'll be waiting for this network API
// await: chill bro wait for a sec I be fetching that API

// so await fetch means fetch APIURL and i will tell asynch to wait
// so await for the fetch before calling a new one

// so if i will fetch the api name of a pokemon the asynch function wont call a new one unless the name was fetch and the user input a new name

//ohh so it is because we are returning an API in a form of a  json the eventListners still needs to wait for the API so we use await
//so when we call an api make sure to use AWAIT AND ASYNCH
