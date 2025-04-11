import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { useState } from "react"
import Header from "./components/Header.jsx"
import WeatherCard from "./Components/WeatherCard.jsx"
import ForecastCard from "./Components/ForecastCard.jsx"

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [forecastData, setForecastData] = useState(null)

  const handleWeatherSearch = ({ weatherData, forecastData }) => {
    setWeatherData(weatherData)
    setForecastData(forecastData)
  }

  return (
    <>
      <header>
        <Header onSearch={handleWeatherSearch} />
      </header>
      <main className="d-flex justify-content-center align-items-center min-vh-100 flex-column">
        {weatherData ? (
          <>
            <WeatherCard value={weatherData} />
            {forecastData && (
              <ForecastCard
                list={forecastData.list}
                city={forecastData.city.name}
              />
            )}
          </>
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center text-center">
            <h1 className="my-3">Benvenuti nella nostra app di meteo!</h1>
            <img src="https://placebear.com/500/500" alt="welcome image" />
            <p className="mt-2">
              In the loving memory of Orfisso
              <br />
              Hidden but never forgotten
            </p>
          </div>
        )}
      </main>
    </>
  )
}

export default App
