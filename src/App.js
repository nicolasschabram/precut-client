import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "normalize.css";
import "styles.css";

import Menu from "components/Menu";
import Projects from "scenes/Projects";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Menu />
          <main>
            <Switch>
              <Route exact path="/projects" component={Projects} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
