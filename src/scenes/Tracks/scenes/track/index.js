import React from "react";
import {connect} from "react-redux";

import Menu from "components/Menu";
import Fold from "components/Fold";
import HeaderBar from "components/HeaderBar";
import Headline from "components/Headline";
import SoundbiteList from "components/SoundbiteList";

class Track extends React.PureComponent {
  componentDidMount() {
    document.title = this.props.track.get("name")  + " - Precut";
  }

  render() {

    const soundbiteList = () => (
      <div>
        <Headline level="h2"
                  text={
                    "Soundbites (" +
                    this.props.soundbites.count() +
                    ")"
                  }
        />
        <SoundbiteList soundbites={this.props.soundbites}
                       style={{marginTop: "1rem"}}
        />
      </div>
    );

    const grid = {
      gridTemplateColumns: "40% 60%",
      gridTemplateRows: "2.6rem 1fr",
      gridTemplateAreas: "'header header' 'left right'"
    }

    return (
      <div className="app">
        <Menu active="tracks" project={this.props.project.get("id")} />
        <main style={grid}>
          <HeaderBar back={{
                       text: "All Tracks",
                       path: this.props.match.path
                     }}
                     title={this.props.track.get("name")}
                     button={{
                       text: "Edit Track",
                       onClick: () => console.log("edit track clicked")
                     }}
                     style={{gridArea: "header"}}
          />
          <Fold content={soundbiteList} style={{gridArea: "left"}} />
          <section style={{gridArea: "right"}}>
            test
          </section>
        </main>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    track: state.get("tracks").find(
      track => track.get("id") === ownProps.match.params.track
    ),
    project: state.get("projects").find(project =>
      project.get("id") === state.get("tracks").find(
        track => track.get("id") === ownProps.match.params.track
      ).get("project")
    ),
    soundbites: state.get("soundbites").filter(soundbite =>
      soundbite.get("track") === ownProps.match.params.track
    )
  };
}

export default connect(mapStateToProps)(Track);
