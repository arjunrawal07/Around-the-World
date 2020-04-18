import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Countries from "../src/Components/Countries";
import Profile from "./Components/Profile";
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
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Around The World In A Few Keystrokes!</Link>
              </li>
              <li>
                <Link to="/countries">Full List of Country Profiles</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <h1>Welcome to Countries API!</h1>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route
              path="/countries"
              exact
              component={Countries}
              // render={(routerProps) => (
              //   <Countries
              //     setcountriesList={this.setcountriesList}
              //     {...routerProps}
              //     {...this.state}
            />
            )} />
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
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
