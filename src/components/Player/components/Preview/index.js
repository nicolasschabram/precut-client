import React from "react";
import classNames from "classnames";

import PlayIcon from "components/Icon/components/Play";

export default class PreviewPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      currentTime: 0,
      duration: 0
    }
  }
  togglePlay() {
    this.state.playing ? this.player.pause() : this.player.play();
    this.setState({
      duration: this.player.duration,
      playing: !this.state.playing
    });
  }
  updateArc() {
    this.setState({ currentTime: this.player.currentTime });
  }
  render() {
    const playerClass = classNames(
      "player--preview",
      this.props.className
    );
    const divStyle = this.state.playing ? {visibility: "visible"} : null;
    return (
      <div className={playerClass}
           onClick={e => e.stopPropagation()}
           style={divStyle}
      >
        <audio id={"player--" + this.props.id}
               ref={ player => { this.player = player; } }
               onTimeUpdate={() => this.updateArc()}
        >
          <source src={this.props.src} type="audio/mpeg" />
          Sorry, your browser does not support audio playback. Please update!
        </audio>
        <PlayIcon onClick={() => this.togglePlay()}
                  progress={
                    this.state.duration ?
                      this.state.currentTime / this.state.duration * 100 :
                      0
                  }
                  onEnded={() => this.setState({currentTime: 0})}
                  playing={this.state.playing}
        />
      </div>
    )
  }
}
