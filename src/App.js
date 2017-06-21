import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "normalize.css";
import "styles.css";

import Projects from "scenes/Projects";
import Tracks from "scenes/Tracks";

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact
                 path="/projects"
                 component={Projects}
          />
          {["/:project/tracks", "/track/:track"].map(path => (
            <Route exact
                   path={path}
                   key={path}
                   render={ routeProps =>
                     <Tracks setActiveProject={() => this.setActiveProject}
                             {...routeProps}
                     />
                   }
            />
          ))}
        </Switch>
      </BrowserRouter>
    );
  }
}
