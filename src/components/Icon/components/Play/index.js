import React from "react";
import classNames from "classnames";

import "./styles.css";

export default class Play extends React.PureComponent {
  render() {
    const arcStyle = {
      strokeDashoffset: this.props.progress * 4.4
    }
    const divClass = classNames(
      "icon--play", {
        "icon--play--playing": this.props.playing,
        "icon--play--paused": !this.props.playing
      }
    );
    return (
      <div className={divClass}
           title={this.props.playing ? "Pause" : "Play"}
           onClick={this.props.onClick ? this.props.onClick : null }
      >
        <svg className="icon--play__svg"
             viewBox="-4 -4 168 168"
             xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <circle id="icon--play__arc"
                    className="icon--play__arc"
                    r="69.85699"
                    cy="81"
                    cx="81"
                    style={arcStyle}
            />
          </g>
        </svg>
      </div>
    )
  }
}
