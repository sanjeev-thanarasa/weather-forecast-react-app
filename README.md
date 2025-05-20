# 🌦️ Weather Forecast React App

A modern, responsive weather forecasting web app built with **React.js**, leveraging the [OpenWeatherMap API](https://openweathermap.org/api) to deliver real-time weather updates in a clean UI.

---

## ✨ Features

- 🔍 Search for current weather by **city name**
- 🌡️ Displays **temperature**, **weather condition**, **humidity**, **wind speed**
- 📍 Shows **country**, **latitude**, **longitude**
- 🖼️ Dynamic weather **icons** (e.g., clear sky, rain, thunderstorm)
- 💨 Smooth **CSS animations** and **responsive design**
- ⚠️ Handles **loading state** and **invalid city errors**
- 🌎 Country name mapping via [`country-data`](https://www.npmjs.com/package/country-data)

---

## 🖥️ Tech Stack

- **React.js**
- **OpenWeatherMap API**
- **CSS Animations**
- **country-data** npm package

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weather-forecast-react-app.git
   cd weather-forecast-react-app

2. **Install dependencies**
   ```bash
   npm install

3. **Add your OpenWeatherMap API key** <br>
In App.jsx, replace:
   ```bash
   let api_key = "your_openweathermap_api_key";

4. **Start the app**
   ```bash
   npm run dev

<br>

## 🖼️ Screenshots
<p align="center">
  <img src="https://github.com/user-attachments/assets/cf6bdb11-7ffd-4b0c-b126-344da578a7f9" width="400" height="400"/>
  <img src="https://github.com/user-attachments/assets/f1fa530f-2a08-4550-b679-dddef608409c" width="400" height="400"/>
</p>


<br>

## 📁 Project Structure
  ```bash
  ├── App.jsx
  ├── App.css
  ├── WeatherDetails.jsx
  ├── assets/
  │   └── weather-icons/
  │       └── [icon PNGs here]
  │   └── search.png
  │   └── humidity.png
  │   └── wind.png
  ├── public/
  ├── package.json
```

<br>

## 🙌 Credits

- **Weather Data**: [OpenWeatherMap](https://openweathermap.org/)
- **Country Info**: [`country-data`](https://www.npmjs.com/package/country-data)
- **Designed & Developed by**: [Sanjeev Thanarasa](https://github.com/your-github-username)


<br>

## 📄 License

MIT License

---
## 🌐 Live Demo

Check out the live app here: [weather-forecast-react-app.vercel.app](https://weather-forecast-react-app.vercel.app)

