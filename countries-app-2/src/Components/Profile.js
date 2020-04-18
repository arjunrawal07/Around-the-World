import React from "react";
const axios = require("axios").default;
let baseURL = "https://countries-api-first.herokuapp.com/countries/";
class Profile extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
    const name = this.props.match.params.name;
    const profileURL = `${baseURL}${name}`;
    console.log(profileURL);

    axios
      .get(profileURL)
      .then((res) => {
        let newProfile = res.data[0];
        this.props.setProfile(newProfile);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    console.log(this.props.profiles);
    // let { profiles } = this.state;
    // let dashboard = profiles.map((profile, i) => {
    return (
      <div className="profile">
        <h1>Name: {this.props.match.params.name}</h1>
        <p>
          <span>Capital: </span>
          {this.props.profiles.capital}
        </p>
        <p>
          <span>Population: </span>
          {this.props.profiles.population}
        </p>
        {/* <p>
          <span>Currencies: </span>
          {this.props.profiles.currencies[0].code}
          {this.props.profiles.currencies[0].name}
          {this.props.profiles.currencies[0].symbol}
        </p>
        <p>
          <span>Languages: </span>
          {this.props.profiles.languages[0].name}
          {this.props.profiles.languages[1].name}
          {this.props.profiles.languages[2].name}
        </p> */}
      </div>
    );
  }
}

export default Profile;
