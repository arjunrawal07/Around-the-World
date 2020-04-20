import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputLabel,
  Button,
} from "@material-ui/core";

const axios = require("axios").default;

class Create extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Earth",
      capital: "Washington",
      population: 123,
      currencies: ["Euro"],
      languages: ["French"],
    };
  }
  handleChange = (event) => {
    console.log(event.target.value);
    if (event.target.id == "name-input") {
      this.setState({
        name: event.target.value,
      });
    }
    if (event.target.id == "capital-input") {
      this.setState({
        capital: event.target.value,
      });
    }
    if (event.target.id == "population-input") {
      this.setState({
        population: event.target.value,
      });
    }
    if (event.target.id == "currencies-input") {
      this.setState({
        currencies: event.target.value.split(),
      });
    }
    if (event.target.id == "languages-input") {
      this.setState({
        languages: event.target.value.split(),
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { Name, Capital, Population, Currencies, Languages } = this.state;

    let baseURL = "https://countries-api-first.herokuapp.com/country";

    let localURL = "http://localhost:4000/country";

    const options = {
      method: "post",
      url: baseURL,
      data: {
        name: this.state.name,
        capital: this.state.capital,
        population: this.state.population,
        currencies: this.state.currencies,
        languages: this.state.languages,
      },
    };
    axios(options).then(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  render() {
    const { Name, Capital, Population, Currencies, Languages } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <FormControl>
          <InputLabel htmlFor="name-input">Country Name</InputLabel>
          <Input
            id="name-input"
            className="name-input"
            aria-describedby="my-helper-text"
            onChange={this.handleChange}
          />{" "}
          <FormControl>
            <InputLabel htmlFor="capital-input">Capital City</InputLabel>
            <Input
              id="capital-input"
              className="capital-input"
              aria-describedby="my-helper-text"
              onChange={this.handleChange}
            />{" "}
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="population-input">
              Country's Population
            </InputLabel>
            <Input
              id="population-input"
              className="population-input"
              aria-describedby="my-helper-text"
              onChange={this.handleChange}
            />{" "}
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="currency-input">Country's Currency</InputLabel>
            <Input
              id="currency-input"
              className="currencies-input"
              aria-describedby="my-helper-text"
              onChange={this.handleChange}
            />{" "}
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="languages-input">
              Country's Languages{" "}
            </InputLabel>
            <Input
              id="languages-input"
              className="languages-input"
              aria-describedby="my-helper-text"
              onChange={this.handleChange}
            />{" "}
          </FormControl>
          <Button type="submit" variant="contained">
            Create Country Profile
          </Button>
        </FormControl>
      </form>
    );
  }
}

export default Create;
