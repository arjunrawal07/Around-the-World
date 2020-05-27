import React, { Component } from "react";
import "./Countries.css";
import { Route, Link } from "react-router-dom";

const axios = require("axios").default;

class Countries extends Component {
  constructor() {
    console.log("constructor");
    super();
    this.state = {
      countries: [],
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
    let baseURL = "https://countries-api-first.herokuapp.com/";
    axios
      .get(baseURL)
      .then((res) => {
        this.setState({ countries: res.data });
        console.log(this.state.countries);
        // console.log(this.state.countries[0].capital);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    let { countries } = this.state;
    let list = countries.map((country, i) => {
      return (
        <div className="Countries" key={i}>
          <p className="text">
            <Link
              to={"/countries/" + country.name}
              style={{ textDecoration: "none" }}
            >
              {country.name}
            </Link>
          </p>
        </div>
      );
    });
    return <div className="list">{list}</div>;
  }
}

export default Countries;
