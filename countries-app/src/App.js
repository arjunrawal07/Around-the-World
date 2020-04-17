import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }
}

render() {
    return (
      <div>
        <nav className="nav">
          <Link to="/">
            <h1>Around The World In A Few Keystrokes</h1>
          </Link>
          <div className="countriesList">
            <Link to="/countries">
              <h1>All Country Profiles</h1>
            </Link>
          </div>
        </nav>
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/countries" exact component={CountriesList} />
          <Route
            path="/countries/:id"
            render={routerProps => (
              <CountriesByName
                setParkinfo={this.setParkinfo}
                {...routerProps}
                {...this.state}
              />
            )}
          />
          <Route 
          path="/capital/:id"
          render={routerProps => {
              <CountriesByCapital
              />

          }}
          />
          <Route
          path="/currencies/:id"
          render={routerProps => {
              <CountryByCurrencies
              />
          }}
          />
        </main>
      </div>
    );
  }
}

export default App;
