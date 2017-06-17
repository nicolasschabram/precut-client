import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "normalize.css";
import "styles.css";

import Menu from "components/Menu";
import Projects from "scenes/Projects";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Menu />
          <main>
            <Switch>
              <Route exact
                     path="/projects"
                     component={Projects}
                     onLeave={() => this.props.resetSelection}
              />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
