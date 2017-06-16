import React from "react";
import "./styles.css";

export default class extends React.PureComponent {
  render() {
    return (
      <section className="fold">
        {this.props.content()}
      </section>
    );
  }
}
