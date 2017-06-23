import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "normalize.css";
import "styles.css";

import Projects from "scenes/Projects";
import Files from "scenes/Files";

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Route exact
                 path="/"
                 render={() => (<Redirect to="/projects" />)}
          />

          <Route exact
                 path="/projects"
                 component={Projects}
          />

          {["/:project/files", "/f/:file"].map(path => (
            <Route exact
                   path={path}
                   key={path}
                   render={ routeProps =>
                     <Files setActiveProject={() => this.setActiveProject}
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
