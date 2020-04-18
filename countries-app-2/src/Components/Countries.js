import React, { Component } from "react";
import "./Countries.css";
import { Route, Link } from "react-router-dom";
import Profile from "./Profile";

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
        // console.log(this.state.countries[0].capital);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    console.log("render");
    let { countries } = this.state;
    let list = countries.map((country, i) => {
      return (
        <div className="Countries" key={i}>
          <p>
            <Link to={"/countries/" + country.name}>{country.name}</Link>
          </p>
        </div>
      );
    });
    return <div>{list}</div>;
  }
}
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

export default Countries;
