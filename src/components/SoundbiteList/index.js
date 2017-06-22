import React from "react";
import classNames from "classnames";

import PreviewPlayer from "components/Player/components/Preview";

import "./styles.css";

export default class SoundbiteList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    }
  }

  secsToHHMMSS(string) {
    var sec_num = parseInt(string, 10);
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
  }

  handleClick(soundbite) {
    this.setState({selected: soundbite});
  }

  render() {
    return (
      <ul className="soundbite-list" style={this.props.style}>
        {this.props.soundbites.map(soundbite => (
          <li key={soundbite.get("id")}
              className={
                classNames(
                  "soundbite-list__item", {
                    "soundbite-list__item--active":
                      this.state.selected === soundbite.get("id")
                  }
                )
              }
              onClick={() => {
                this.handleClick(soundbite.get("id"));
                this.props.previewSoundbite(soundbite.get("id"));
              }}
          >
            <PreviewPlayer className="soundbite-list__player"
                           id={soundbite.get("id")}
            />
            <span className="soundbite-list__name test">
              {soundbite.get("name")}
            </span>
            <span className="soundbite-list__time">
              {this.secsToHHMMSS(soundbite.get("inpoint") / 1000)}
              &#160;&#160;·&#160;&#160;
              {((soundbite.get("outpoint") - soundbite.get("inpoint")) / 1000).toFixed(0)} seconds
            </span>
          </li>
        ))}
      </ul>
    );
  }
}
