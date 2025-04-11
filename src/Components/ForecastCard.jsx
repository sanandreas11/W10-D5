import { Carousel, Container } from "react-bootstrap"

function ForecastCard({ list, city }) {
  const dailyForecasts = list.filter((item) => item.dt_txt.includes("12:00:00"))

  return (
    <Container className="mt-4">
      <h3 className="text-center mb-3">Previsioni per {city}</h3>
      <Carousel slide={false} variant="dark" interval={null}>
        {dailyForecasts.slice(0, 5).map((weather, index) => {
          const icon = weather.weather[0].icon
          const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
          //data estrapolata da IA non capisco molto bene come funziona
          const date = new Date(weather.dt * 1000).toLocaleDateString("it-IT", {
            weekday: "long",
            day: "numeric",
            month: "short",
          })

          return (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center mb-4">
                <div className="text-center">
                  <img src={iconUrl} alt="weather icon" />
                  <h5>{date}</h5>
                  <p>
                    {Math.round(weather.main.temp - 273.15)}°C,{" "}
                    {weather.weather[0].description}
                  </p>
                </div>
              </div>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </Container>
  )
}

export default ForecastCard
