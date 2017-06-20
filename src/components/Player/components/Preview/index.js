import React from "react";
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
  componentDidMount() {
    console.log(this.player.duration);

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
    return (
      <div className="player--preview">
        <audio id={"player--" + this.props.id}
               ref={ player => { this.player = player; } }
               onTimeUpdate={() => this.updateArc()}
        >
          <source src={this.props.src} type="audio/mpeg" />
          Sorry, your browser does not support audio playback. Please update!
        </audio>
        <PlayIcon onClick={() => this.togglePlay()}
                  progress={this.state.duration ? this.state.currentTime / this.state.duration * 100 : 0}
                  onEnded={() => this.setState({currentTime: 0})}
                  playing={this.state.playing}
        />
      </div>
    )
  }
}
