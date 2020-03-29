import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "7cad2d491fd135168c055823401f1ad8";

class App extends React.Component{

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    weather: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    
    if(city){
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      const data = await api_url.json()

      const sunset = data.sys.sunset
      const date = new Date()
      date.setTime(sunset)
      const sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        weather: data.weather[0].main,
        sunset: sunset_date,
        error: undefined
      })
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        weather: undefined,
        sunset: undefined,
        error: "Enter city name"
      })
    }
  }

  render(){
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7 form">
                <Form weatherMethod={this.gettingWeather} />
                <Weather
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  weather={this.state.weather}
                  sunset={this.state.sunset}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;