import React from "react";
import Box from "@material-ui/core/Box";
import { List, Button } from "@material-ui/core";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputLabel,
} from "@material-ui/core";
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
          currencies: [
            `${profile.currencies[0]}`,
            `${profile.currencies[0].code}`,
            `${profile.currencies[0].symbol}`,
          ],
          languages: [`${profile.languages[0].name}`],
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
    // const data = this.props.profiles;
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
    // location.reload(true);
  };

  render() {
    console.log(this.props);
    let dashboard = this.props.profiles.map((profile, i) => {
      return (
        <Box
          key={i}
          color="primary.main"
          bgcolor="warning.main"
          border={1}
          borderColor="primary.main"
          borderRadius={16}
          maxWidth="sm"
        >
          <List>
            <h1>Name: {profile.name}</h1>
            <p>
              <span>Capital: </span>
              {profile.capital}
            </p>
            <p>
              <span>Population: </span>
              {profile.population}
            </p>
            <span>Currencies: </span> <br />
            <ul>
              <li> Name: {profile.currencies[0]}</li>
              <li> Code: {profile.currencies[1]} </li>
              <li> Symbol: {profile.currencies[2]}</li>
            </ul>
            <span>Languages: </span>
            <ul>
              <li>{profile.languages}</li>
            </ul>
          </List>
          <Button type="submit" variant="contained" onClick={this.deleteData}>
            DELETE Country Profile
          </Button>
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
          <Button type="submit" variant="contained" onClick={this.updateData}>
            Update Data
          </Button>
        </Box>
      );
    });
    return <div>{dashboard}</div>;
  }
}

export default Profile;
