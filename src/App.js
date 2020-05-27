import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Countries from "./Components/Countries";
import Profile from "./Components/Profile";
import Create from "./Components/Create";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
    };
    this.setProfile = this.setProfile.bind(this);
  }
  setProfile(profiles) {
    this.setState({ profiles: profiles });
  }
  render() {
    return (
      <Router>
        <div className="home">
          <nav className="navbar">
            <div className="tab">
              <Link to="/">Home</Link>
            </div>
            <div className="tab">
              <Link to="/countries">Full List of Country Profiles</Link>
            </div>
            <div className="tab">
              <Link to="/country">Create Your Own Country</Link>
            </div>
          </nav>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/countries" exact component={Countries} />
            <Route
              path="/countries/:name"
              render={(routerProps) => (
                <Profile
                  setProfile={this.setProfile}
                  {...routerProps}
                  {...this.state}
                />
              )}
            />
            <Route path="/country" exact component={Create} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
