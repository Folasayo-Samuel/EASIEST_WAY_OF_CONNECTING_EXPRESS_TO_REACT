import React, { Component } from "react";
import axios from "axios";

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      weather: "Not yet gotten",
    };
  }

  handleButtonClick = () => {
    axios.get("/getWeather").then((response) => {
      this.setState({
        weather: response.data.temp_c,
      });
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>
          Get weather in New York
        </button>
        <h1>The weather in New York is: {this.state.weather}</h1>
      </div>
    );
  }
}

export default Weather;

// "proxy": {
//     "/api": {
//       "target": "https://localhost:5000/",
//       "secure": false
//     }
//   },
