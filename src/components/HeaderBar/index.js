import React from "react";
import Button from "components/Button";

import "./styles.css";

export default class HeaderBar extends React.PureComponent {
  render() {
    return (
      <header className="header-bar" style={this.props.style}>

        <a className="header-bar__back"
           href={this.props.back.path}
        >
          {this.props.back.text}
        </a>

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
