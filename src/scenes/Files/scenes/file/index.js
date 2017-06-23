import React from "react";
import {connect} from "react-redux";

import Menu from "components/Menu";
import Fold from "components/Fold";
import HeaderBar from "components/HeaderBar";
import Headline from "components/Headline";
import SoundbiteList from "components/SoundbiteList";
import SoundbitePreview from "components/SoundbitePreview";

import "./styles.css";

class File extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      previewedSoundbite: null
    }
  }

  previewSoundbite(id) {
    this.setState({
      previewedSoundbite: id
    });
  }

  closeSoundbitePreview() {
    this.setState({
      previewedSoundbite: null
    })
  }

  componentDidMount() {
    document.title = this.props.file.get("name")  + " - Precut";
  }

  render() {

    const soundbiteList = () => (
      <div className="file__soundbites">
        <Headline level="h2"
                  text={
                    "Soundbites (" +
                    this.props.soundbites.count() +
                    ")"
                  }
        />
        <SoundbiteList soundbites={this.props.soundbites}
                       style={{marginTop: "1rem"}}
                       previewSoundbite={(id) => this.previewSoundbite(id)}
        />
        { this.state.previewedSoundbite ?
          <SoundbitePreview close={() => this.closeSoundbitePreview()}
                            soundbite={this.props.soundbites.find(soundbite => soundbite.get("id") === this.state.previewedSoundbite)}
          /> :
          null
        }
      </div>
    );

    const grid = {
      gridTemplateColumns: "40% 60%",
      gridTemplateRows: "2.6rem 1fr",
      gridTemplateAreas: "'header header' 'left right'"
    }

    return (
      <div className="app">
        <Menu active="files" project={this.props.project.get("id")} />
        <main style={grid}>
          <HeaderBar back={{
                       text: "All Files",
                       path: "/" + this.props.file.get("project") + "/files"
                     }}
                     title={this.props.file.get("name")}
                     button={{
                       text: "Edit File",
                       onClick: () => console.log("edit file clicked")
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
    file: state.get("files").find(
      file => file.get("id") === ownProps.match.params.file
    ),
    project: state.get("projects").find(project =>
      project.get("id") === state.get("files").find(
        file => file.get("id") === ownProps.match.params.file
      ).get("project")
    ),
    soundbites: state.get("soundbites").filter(soundbite =>
      soundbite.get("file") === ownProps.match.params.file
    )
  };
}

export default connect(mapStateToProps)(File);
