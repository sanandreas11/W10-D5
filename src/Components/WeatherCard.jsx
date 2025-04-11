import Card from "react-bootstrap/Card"

function WeatherCard(props) {
  const iconCode = props.value.weather[0].icon
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`
  return (
    <Card
      className="align-self-center "
      style={{ width: "10rem", height: "30rem" }}
    >
      <Card.Img
        variant="top"
        className="d-flex justify-content-center"
        src={iconUrl}
      />
      <Card.Body>
        <Card.Title>Weather in {props.value.name}</Card.Title>
        <Card.Text>
          Temperature: {Math.round(props.value.main.temp - 273.15)}°C
        </Card.Text>
        <Card.Text>Condition: {props.value.weather[0].description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default WeatherCard
