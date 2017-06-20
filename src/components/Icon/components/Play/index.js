import React from "react";

import "./styles.css";

export default class Play extends React.PureComponent {
  render() {
    const arcStyle = {
      strokeDashoffset: this.props.progress * 4.4
    }
    console.log(this.props.progress)
    return (
      <div className="icon--play"
           title="Play/Pause"
           onClick={this.props.onClick ? this.props.onClick : null }
      >
        <span className="icon--play__triangle">
          {!!this.props.playing ? "▌▌" : "►" }
        </span>
        <svg className="icon--play__svg"
             viewBox="0 0 160 160"
             xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <circle id="icon--play__arc"
                    className="icon--play__arc"
                    r="69.85699"
                    cy="81"
                    cx="81"
                    strokeWidth="15"
                    stroke="#69aff4"
                    fill="none"
                    style={arcStyle}
            />
          </g>
        </svg>
      </div>
    )
  }
}
