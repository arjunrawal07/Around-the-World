import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <h1>{this.props.profile.name}</h1>
        <p>
          <span>Main: </span>
          {this.props.profile.capital}
        </p>
        <p>
          <span>Protein: </span>
          {this.props.profile.population}
        </p>
        <p>
          <span>Rice: </span>
          {this.props.profile.currencies}
        </p>
        <p>
          <span>Sauce: </span>
          {this.props.profile.languages}
        </p>
      </div>
    );
  }
}

export default Profile;
