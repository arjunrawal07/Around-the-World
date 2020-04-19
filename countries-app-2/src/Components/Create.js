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
      Name: "Earth",
      Capital: "Washington",
      Population: 123,
      Currencies: ["Euro"],
      Languages: ["French"],
    };
  }
  handleChange = (event) => {
    console.log(event.target.value);
    if (event.target.id == "name-input") {
      this.setState({
        Name: event.target.value,
      });
    }
    if (event.target.id == "capital-input") {
      this.setState({
        Capital: event.target.value,
      });
    }
    if (event.target.id == "population-input") {
      this.setState({
        Population: event.target.value,
      });
    }
    if (event.target.id == "currencies-input") {
      this.setState({
        Currencies: event.target.value.split(),
      });
    }
    if (event.target.id == "languages-input") {
      this.setState({
        Languages: event.target.value.split(),
      });
    }
    // this.setState({
    //   [event.target.Name]: event.target.id,
    //   [event.target.Capital]: event.target.value,
    //   [event.target.Population]: event.target.value,
    //   [event.target.Currencies]: event.target.value,
    //   [event.target.Languages]: event.target.value,
    // });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { Name, Capital, Population, Currencies, Languages } = this.state;
    // this.setState({
    // let profile = {
    //   Name: event.target.value,
    //   Capital: event.target.value,
    //   Population: event.target.value,
    //   Currencies: event.target.value,
    //   Languages: event.target.value,

    let baseURL = "https://countries-api-first.herokuapp.com/country";

    let localURL = "http://localhost:4000/country";

    const options = {
      method: "post",
      url: baseURL,
      data: {
        Name: this.state.Name,
        Capital: this.state.Capital,
        Population: this.state.Population,
        Currencies: this.state.Currencies,
        Languages: this.state.Languages,
      },
    };
    axios(options)
      //   .post(baseURL, [
      //     ,
      //     {
      //       Name: this.state.Name,
      //       Capital: this.state.Capital,
      //       Population: this.state.Population,
      //   Currencies: this.state.Currencies,
      //   Languages: this.state.Languages,
      // },
      // [
      //   ,
      //   {
      //     Name: this.state.Name,
      //     Capital: this.state.Capital,
      //     Population: this.state.Population,
      // Currencies: this.state.Currencies,
      // Languages: this.state.Languages,
      //       },
      //     ],
      //   ])
      .then(
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
            className="currency-input"
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
        {/* <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Country's Name</label>
          <input id="name" name="name" type="text" />

          <label htmlFor="capital">Capital City</label>
          <input id="capital" name="capital" type="text" />

          <label htmlFor="population">Country's Population</label>
          <input id="population" name="population" type="number" />

          <label htmlFor="currencies">Country's Currency</label>
          <input id="currencies" name="currencies" type="text" />

          <label htmlFor="languages">Country's Official Languages</label>
          <input id="languages" name="languages" type="text" />

          <button>Send data!</button>
        </form> */}
      </form>
    );
  }
}
//   componentDidMount() {
//     console.log("componentDidMount");
//     let baseURL = "https://countries-api-first.herokuapp.com/";
//     axios
//       .get(baseURL)
//       .then((res) => {
//         this.setState({ countries: res.data });
//         // console.log(this.state.countries[0].capital);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
//   render() {
//     console.log("render");
//       return (
//         <div className="Countries" key={i}>
//           <p>
//             <Link to={"/countries/" + country.name}>{country.name}</Link>
//           </p>
//         </div>
//       );
//     });

//       <div className="Countries">
//         <h1>
//           Information about all the countries in the world at your fingertips.
//         </h1>
//         <div className="container">
//           <button
//             className="buttonLeft"
//             onClick={this.previousCountry}
//           ></button>
//           <div className="apiBox">
//             <div className="text">
//               <h1>{this.state.countries[this.state.currentCount].name} </h1>
//               <h2>{this.state.countries[this.state.currentCount].capital}</h2>
//               <h2>
//                 {this.state.countries[this.state.currentCount].population}
//               </h2>
//               <h2>
//                 {this.state.countries[this.state.currentCount].currencies}
//               </h2>
//               <h2>{this.state.countries[this.state.currentCount].languages}</h2>
//             </div>
//           </div>
//           <button className="buttonRight" onClick={this.nextCountry}></button>
//         </div>
//       </div>
//     );
//   }
// }

export default Create;
