import React from "react";
import { Link } from "react-router-dom";

import Button from "components/Button";

import "./styles.css";

export default class HeaderBar extends React.PureComponent {
  render() {
    return (
      <header className="header-bar" style={this.props.style}>

        <Link to={{ pathname: this.props.back.path }}
              className="header-bar__back"
        >
          {this.props.back.text}
        </Link>

        <h1 className="header-bar__title">{this.props.title}</h1>

        <Button color="blue"
                size="small"
                onClick={() => this.props.button.onClick}
                buttonText={this.props.button.text}
        />

      </header>
    );
  }
}
