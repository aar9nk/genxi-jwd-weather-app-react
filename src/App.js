import Card from "./Card";
import { useState } from "react";

const createAPI = (query) => `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&units=metric`;

const emojis = {
  "01d": "☀️",
  "02d": "⛅️",
  "03d": "☁️",
  "04d": "☁️",
  "09d": "🌧",
  "10d": "🌦",
  "11d": "⛈",
  "13d": "❄️",
  "50d": "💨",
  "01n": "☀️",
  "02n": "⛅️",
  "03n": "☁️",
  "04n": "☁️",
  "09n": "🌧",
  "10n": "🌦",
  "11n": "⛈",
  "13n": "❄️",
  "50n": "💨",
};

const App = () => {
  // Set appId in a file called .env in the root folder for the app. Add this to .gitignore

  const [input, setInput] = useState("");
  const [weather, setWeather] = useState("");

  // emojis object used to find the right emoji from the icon code sent from the api
  


  const handleSubmit = async (event) => {
    // get the city from the input field
    event.preventDefault();
    const city = input;
    try {
      let response = await fetch(createAPI(city))
      .then((response) => response.json());
      const name = response.name;
      const emoji = emojis[response.weather[0].icon];
      const temp = response.main.temp;
      const feelsLike = response.main.feels_like;
      const description = response.weather[0].description;

      setWeather({
        name: name,
        emoji: emoji,
        temp: temp,
        feelsLike: feelsLike,
        description: description,
      });
      setInput("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container">
      <div className="row mt-5 justify-content-center">
        <div className="col-md-8 col-lg-6">
          <h1 className="mb-3 text-center">What's the Weather</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="row text-center justify-content-space-around">
              <div className="col">
                <label htmlFor="city-input">In</label>
              </div>
              <div className="col">
                <input
                  id="city-input"
                  className="form-control"
                  type="text"
                  value={input}
                  onInput={(e) => setInput(e.target.value)}
                />
              </div>
              <div className="col">
                <button
                  id="go-button"
                  className="btn btn-primary"
                  type="submit"
                >
                  Go!
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row mt-3 justify-content-center">
        <div id="weather-container" className="col-md-8 col-lg-6">
          {/* Render the component conditionally if there is data in the weather state */}
          {weather && <Card weather={weather} />}
        </div>
      </div>
    </div>
  );
};

export default App;
