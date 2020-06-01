import React from "react";
import "./Profile.css";
import { List, Button } from "@material-ui/core";
import { FormControl, Input, InputLabel } from "@material-ui/core";
const axios = require("axios").default;
let baseURL = "https://countries-api-first.herokuapp.com/countries/";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      capital: "",
      population: 0,
      currencies: "",
      languages: "",
    };
  }
  componentDidMount() {
    console.log("componentDidMount");
    const name = this.props.match.params.name;
    const profileURL = `${baseURL}${name}`;
    console.log(profileURL);

    axios
      .get(profileURL)
      .then((res) => {
        let newProfile = res.data.map((profile) => ({
          name: `${profile.name}`,
          capital: `${profile.capital}`,
          population: `${profile.population}`,
          currencies: [`${profile.currencies[0]}`],
          languages: [`${profile.languages}`],
        }));
        this.props.setProfile(newProfile);
        console.log(newProfile);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleChange = (event) => {
    if (event.target.id == "capital-input") {
      this.setState({
        capital: event.target.value,
      });
    }
  };
  deleteData = () => {
    const name = this.props.match.params.name;
    const profileURL = `${baseURL}${name}`;
    axios
      .delete(profileURL)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  updateData = (event) => {
    const name = this.props.match.params.name;
    const profileURL = `${baseURL}${name}`;
    axios
      .put(profileURL, {
        capital: this.state.capital,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    console.log(this.props);
    let dashboard = this.props.profiles.map((profile, i) => {
      return (
        <div className="profilePage">
          <div className="box" key={i}>
            <ul>
              <h1>Name: {profile.name}</h1>
              <p>
                <span>Capital: </span>
                {profile.capital}
              </p>
              <p>
                <span>Population: </span>
                {profile.population}
              </p>
              <span>Currency: </span> <br />
              <ul>
                <li> Name: {profile.currencies[0]}</li>
              </ul>
              <br></br>
              <span>Languages: </span>
              <ul>
                <li>{profile.languages}</li>
              </ul>
            </ul>
            <div className="deleteButton">
              <Button
                className="delete"
                type="submit"
                variant="contained"
                onClick={this.deleteData}
                color="secondary"
                position="center"
                margin="10px"
              >
                DELETE Country Profile
              </Button>
            </div>
          </div>
          <div className="update">
            <form onSubmit={this.updateData}>
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
                  <InputLabel htmlFor="currency-input">
                    Country's Currency
                  </InputLabel>
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
              </FormControl>
            </form>
            <div className="updateButton">
              <Button
                color="primary"
                type="submit"
                variant="contained"
                onClick={this.updateData}
              >
                Update Country Information
              </Button>
            </div>
          </div>
        </div>
      );
    });
    return <div>{dashboard}</div>;
  }
}

export default Profile;
