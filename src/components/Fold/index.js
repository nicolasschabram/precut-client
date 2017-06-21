import React from "react";
import "./styles.css";

export default class Fold extends React.PureComponent {
  render() {
    return (
      <section className="fold" style={this.props.style}>
        {this.props.content()}
      </section>
    );
  }
}
