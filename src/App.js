import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "normalize.css";
import "styles.css";

import Menu from "components/Menu";
import Projects from "scenes/Projects";
import Tracks from "scenes/Tracks";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact
                   path="/projects"
                   render={routeProps => <Menu navItem="projects" {...routeProps} />}
            />
            {["/:projectId/tracks", "/track/:trackId"].map(path => (
              <Route exact
                     path={path}
                     key={path}
                     render={routeProps => <Menu navItem="tracks" {...routeProps} />}
              />
            ))}
            <Route exact
                   path="/:project/tags"
                   render={routeProps => <Menu navItem="tags" {...routeProps} />}
            />
            <Route exact
                   path="/:project/boards"
                   render={routeProps => <Menu navItem="boards" {...routeProps} />}
            />
            <Route exact
                   path="/:project/scripts"
                   render={routeProps => <Menu navItem="scripts" {...routeProps} />}
            />
            <Route path="/settings"
                   render={routeProps => <Menu navItem="settings" {...routeProps} />}
            />
          </Switch>
          <main>
            <Switch>
              <Route exact
                     path="/projects"
                     component={Projects}
              />
              <Route exact
                     path="/:project/tracks"
                     component={Tracks}
              />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
