import React from "react";
import { Switch, Route } from "react-router-dom";
import Files from "./scenes/files/";
import File from "./scenes/file";

export default class TracksRouter extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact
               path="/:project/files"
               component={Files}
        />
        <Route exact
               path="/f/:file"
               component={File}
        />
      </Switch>
    );
  }
}
