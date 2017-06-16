import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "normalize.css";
import "styles.css";

import store from "./store";

import Menu from "components/Menu";
import Projects from "scenes/Projects";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}



export default App;
