import React, { Component } from "react";
import "./Countries.css";

const axios = require("axios").default;
let baseURL = "https://countries-api-first.herokuapp.com/";
class Countries extends Component {
  constructor() {
    super();
    this.state = {
      countries: {},
    };
  }
  componentDidMount() {
    axios
      .get(baseURL)
      .then((res) => {
        this.setState({ countries: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    console.log(this.state.countries);
    //   console.log(this.state.countries.name){
    return <div>Countries go here</div>;
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
