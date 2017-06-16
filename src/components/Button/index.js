import React from "react";
import "./styles.css";
import classNames from "classnames";

export default class extends React.PureComponent {
  render() {
    const buttonClass = classNames(
      "button", {
        "button--red": !!(this.props.color === "red"),
        "button--blue": !!(this.props.color === "blue"),

        "button--small": !!(this.props.size === "small")
      }
    );
    return (
      <button className={buttonClass}
              onClick={() => this.props.onClick()}
              style={this.props.style}>
        {this.props.buttonText}
      </button>
    )
  }
}
