import React from "react";

import "./styles.css";

export default class Close extends React.PureComponent {
  render() {
    return (
      <button onClick={() => this.props.onClick()}
              title="Close"
              type="button"
              className="close-icon"
      ></button>
    );
  }
}
