import React from "react";
import { Switch, Route } from "react-router-dom";
import Tracks from "./scenes/tracks/";
import Track from "./scenes/track";

export default class TracksRouter extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact
               path="/:project/tracks"
               component={Tracks}
        />
        <Route exact
               path="/track/:track"
               component={Track}
        />
      </Switch>
    );
  }
}
