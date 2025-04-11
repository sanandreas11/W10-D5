import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Form from "react-bootstrap/Form"
import { useState } from "react"
import { Button } from "react-bootstrap"

function Header() {
  const [searchBar, setSearchBar] = useState("")

  const fetchData = (e) => {
    e.preventDefault()
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchBar}&appid=dfd3e5d26d10e7e6a282ca06676def7a`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella fetch")
        }
        return response.json()
      })
      .then((data) => {
        console.log("Dati meteo:", data)
      })
      .catch((error) => {
        console.error("Errore:", error)
      })
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-warning">
      <Container className="d-sm-flex flex-sm-column justify-content-center flex-lg-row justify-content-lg-between">
        <Navbar.Brand className="d-flex align-items-center" href="#home">
          <img className="w-25" src="../public/logo.png" alt="logo" />
          <h2>Il Meteo</h2>
        </Navbar.Brand>
        <Form className="d-flex flex-column flex-lg-row">
          <Form.Group controlId="cityInput">
            <Form.Control
              type="search"
              placeholder="Search for a city"
              value={searchBar}
              onChange={(e) => setSearchBar(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="success"
            className="mt-2 mt-lg-0 ms-lg-2"
            onClick={fetchData}
          >
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  )
}

export default Header
