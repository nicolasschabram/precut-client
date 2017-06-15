import React from 'react';
import Menu from "./components/menu/menu";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Menu />
      </div>
    );
  }
}

export default App;
