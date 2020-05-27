import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="home">
        <div className="title">
          <h1>Around the World... </h1>
          <p className="subheading">In A Few Keystrokes!</p>
        </div>
        <div className="mainPhoto"></div>
      </div>
    );
  }
}

export default Home;
