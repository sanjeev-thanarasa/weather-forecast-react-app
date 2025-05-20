import "./App.css";
import { WeatherDetails } from "./WeatherDetails.jsx";

import { countries } from "country-data";

// Import Images
import clearSky from "./assets/weather-icons/clear-sky.png";
import fewClouds from "./assets/weather-icons/few-clouds.png";
import scatteredClouds from "./assets/weather-icons/scattered-clouds.png";
import brokenClouds from "./assets/weather-icons/broken-clouds.png";
import showerRain from "./assets/weather-icons/shower-rain.png";
import rainIcon from "./assets/weather-icons/rainIcon.png";
import thunderstorm from "./assets/weather-icons/thunderstorm.png";
import snowIcon from "./assets/weather-icons/snowIcon.png";
import mistIcon from "./assets/weather-icons/mistIcon.png";

import searchIcon from "./assets/search.png";
import windIcon from "./assets/wind.png";
import humidityIcon from "./assets/humidity.png";
import { useEffect, useState } from "react";

function App() {
  let api_key = "c6c0db5bfeb3f35cd7a25c88cf2173ac";

  const [text, setText] = useState("colombo");

  const [iconStatus, setIconStatus] = useState("Clear");
  const [icon, setIcon] = useState(clearSky);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);

  const [humidity, setHumidity] = useState(0);
  const [wind, setwind] = useState(0);

  const [error, setError] = useState(null);

  const [cityNotFound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const weatherIconMap = {
    "01d": clearSky,
    "01n": clearSky,

    "02d": fewClouds,
    "02n": fewClouds,

    "03d": scatteredClouds,
    "03n": scatteredClouds,

    "04d": brokenClouds,
    "04n": brokenClouds,

    "09d": showerRain,
    "09n": showerRain,

    "10d": rainIcon,
    "10n": rainIcon,

    "11d": thunderstorm,
    "11n": thunderstorm,

    "13d": snowIcon,
    "13n": snowIcon,

    "50d": mistIcon,
    "50n": mistIcon,
  };

  const weatherIconStatusMap = {
    "01d": "Clear Sky",
    "01n": "Clear Sky",

    "02d": "few Clouds",
    "02n": "few Clouds",

    "03d": "scattered Clouds",
    "03n": "scattered Clouds",

    "04d": "broken Clouds",
    "04n": "broken Clouds",

    "09d": "shower Rain",
    "09n": "shower Rain",

    "10d": "rain",
    "10n": "rain",

    "11d": "Thunderstorm",
    "11n": "Thunderstorm",

    "13d": "snow",
    "13n": "snow",

    "50d": "mist",
    "50n": "mist",
  };
  const search = async () => {
    setLoading(true);

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text.toLowerCase()}&appid=${api_key}&units=Metric`;

    try {
      let res = await fetch(url);
      let data = await res.json();
      // console.log(data);
      if (data.cod === "404") {
        console.error("City Not Found");
        setError("City not found");
        setCityNotFound(true);
        setLoading(false);
        return;
      }

      setHumidity(data.main.humidity);
      setwind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);

      setLat(data.coord.lat);
      setLog(data.coord.lon);
      const weatherIconCode = data.weather[0].icon;
      setIcon(weatherIconMap[weatherIconCode] || clearSky);
      setIconStatus(weatherIconStatusMap[weatherIconCode] || " ");
      setCityNotFound(false);
    } catch (error) {
      console.error("An error occurred: ", error.message);
      setError("An error occurred while fetching weather data. ");
    } finally {
      setLoading(false);
    }
  };

  const handleCity = (e) => {
    setText(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (text !== "") {
        search();
      } else {
        setCityNotFound(true);
      }
    }
  };
  const handleOnClick = () => {
    if (text !== "") {
      search();
    } else {
      setCityNotFound(true);
    }
  };

  useEffect(function () {
    search();
  }, []);

  return (
    <>
      <div className="column">
        <div className="container">
          <div className="search-box">
            <input
              type="text"
              className="cityInput"
              placeholder="Search City"
              onChange={handleCity}
              onKeyDown={handleKeyDown}
              value={text}
            />

            <button onClick={handleOnClick}>
              <img src={searchIcon} alt="Search" />
            </button>
          </div>

          {!loading && !cityNotFound && (
            <WeatherDetails
              icon={icon}
              temp={temp}
              city={city}
              country={countries[country].name}
              lat={lat}
              log={log}
              humidity={humidity}
              wind={wind}
              error={error}
              humidityIcon={humidityIcon}
              windIcon={windIcon}
              iconStatus={iconStatus}
            />
          )}

          {loading && <div className="loading-spinner"></div>}
          {/* {error && <div className="error-message">{error}</div>} */}
          {cityNotFound && <div className="city-not-found">City not found</div>}

          <div className="footer">
            Designed by{" "}
            <a href="https://sanjeev-thanarasa.github.io/my-portfolio/">
              SANJEEV THANARASA
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
