// 42af987528824841db9a144be6f1e0b4
//SO ASYNCH IS LIKE SAYING THIS FUNCTION WILL WAIT FOR THE API?

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const api = "42af987528824841db9a144be6f1e0b4";

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = cityInput.value;

  if (city) {
    try {
      const weatherData = await getWeatherData(city); //the weaherData will await for the API to find the value we input and return as a display
      displayWeatherInfo(weatherData); // display the data ex. display(value)...this will catch the return json
    } catch (error) {
      console.error(error);
      displayError(error); // pasa naten yung parameter to the function so yan na yung error
    }
  } else {
    displayError("Please enter a City");
  }
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
  const response = await fetch(apiUrl);
  console.log(response);
  if (!response.ok) {
    throw new Error("Failed to fetch API");
  } else {
    return response.json(); // so it is use to wait for the API call before returning anything..  this will also return a json format
  }
}

function displayWeatherInfo(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data; // reform to a better one
  card.textContent = "";
  card.style.display = "flex";

  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humiditDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  cityDisplay.textContent = city;
  tempDisplay.textContent = `${(temp - 273.15).toFixed(1)} ° C`;
  humiditDisplay.textContent = `Humidity: ${humidity}`;
  weatherEmoji.textContent = getWeatherEmoji(id);

  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humiditDisplay.classList.add("humidityDisplay");
  weatherEmoji.classList.add("weatherEmoji");

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humiditDisplay);
  card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return "⛈️";
    case weatherId >= 300 && weatherId < 400:
      return "🌧️";
    case weatherId >= 500 && weatherId < 600:
      return "🌦️";
    case weatherId >= 600 && weatherId < 700:
      return "❄️";
    case weatherId >= 700 && weatherId < 800:
      return "🌬️";
    case weatherId === 800:
      return "☀️";
  }
}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("error"); // this will add a class on the element

  card.textContent = ""; // if something printed i will reset it now
  // how it reset? (learn tomorrow) I think I know for the other part but this wont
  card.style.display = "flex";
  card.appendChild(errorDisplay); // appendChild() will add the new element on that class or div
}
