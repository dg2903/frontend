import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./Home";


class AppRoutes extends Component {
  render() {
    return (
      <Router>
          <Switch >
            <Route exact path='/' component={Home} />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
      </Router>
    );
  }
}

export default AppRoutes;
