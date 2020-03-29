import React from "react";

const Weather = props => (
    <div className="infoWeath">
        {props.city &&
        <div>
            <p>Location: {props.city}, {props.country}</p>
            <p>Weather: {props.weather}</p>
            <p>Temprature: {props.temp}</p>
            <p>Sunset: {props.sunset}</p>
        </div>
        }
        <p className="error">{props.error}</p>
    </div>
)

export default Weather;