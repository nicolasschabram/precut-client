import React from "react";

import "./styles.css";

export default class Headline extends React.PureComponent {
  render() {
    const prop = { className: "headline" };

    switch (this.props.level) {
      case "h1": return <h1 {...prop}>{this.props.text}</h1>
      case "h2": return <h2 {...prop}>{this.props.text}</h2>
      case "h3": return <h3 {...prop}>{this.props.text}</h3>
      case "h4": return <h4 {...prop}>{this.props.text}</h4>
      case "h5": return <h5 {...prop}>{this.props.text}</h5>
      case "h6": return <h6 {...prop}>{this.props.text}</h6>
      default:   return <h1 {...prop}>{this.props.text}</h1>
    }
  }
}
