import PropTypes from "prop-types";

export const WeatherDetails = ({
  icon,
  temp,
  city,
  country,
  lat,
  log,
  humidity,
  wind,
  humidityIcon,
  windIcon,
  iconStatus,
}) => {
  return (
    <div className="weather-container">
      <img
        className="weather-icon"
        src={icon}
        alt={`Weather icon for ${city}`}
      />
      <div className="status">{iconStatus}</div>

      <div className="temp">{temp}ºC</div>
      <div className="city">{city}</div>

      <div className="country">{country}</div>

      <div className="coords">
        <div className="lat">
          <span>Latitude</span>
          <span>{lat}</span>
        </div>
        <div className="log">
          <span>Longitude</span>
          <span>{log}</span>
        </div>
      </div>

      <div className="info-box">
        <div className="humidity">
          <img src={humidityIcon} alt="humidity" />
          <span>{humidity}%</span>
          <p>Humidity</p>
        </div>
        <div className="wind">
          <img src={windIcon} alt="wind" />
          <span>{wind} km/h</span>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
};

WeatherDetails.propTypes = {
  icon: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  log: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired,
  humidityIcon: PropTypes.string.isRequired,
  windIcon: PropTypes.string.isRequired,
};
