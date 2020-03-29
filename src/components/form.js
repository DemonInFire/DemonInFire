import React from "react";

const Form = props => (
    <form onSubmit={props.weatherMethod}>
        <input type="text" name="city" placeholder="Enter your city"/>
        <button>Get info</button>
    </form>
)

export default Form;