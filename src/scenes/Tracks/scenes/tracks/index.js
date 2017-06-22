import React from "react";
import moment from "moment";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import Menu from "components/Menu";
import Fold from "components/Fold";
import TableView from "components/TableView";
import PencilIcon from "components/Icon/components/Pencil";
import PreviewPlayer from "components/Player/components/Preview";

import * as trackActions from "data/tracks/actions";

class Tracks extends React.PureComponent {

  componentDidMount() {
    document.title = "Tracks - Precut";
  }

  getTableHead() {
    return [
      {
        id: "name",
        title: "Name",
        textAlign: "left"
      }, {
        id: "soundbites",
        title: "Soundbites",
        textAlign: "right"
      }, {
        id: "duration",
        title: "Duration",
        textAlign: "left"
      }, {
        id: "speakers",
        title: "Speakers",
        textAlign: "left"
      }, {
        id: "reporters",
        title: "Reporters",
        textAlign: "left"
      }, {
        id: "tags",
        title: "Tags",
        textAlign: "left"
      }, {
        id: "rec_date",
        title: "Recording Date",
        textAlign: "left"
      }, {
        id: "lastModified",
        title: "Last Modified",
        textAlign: "left"
      }, {
        id: "preview",
        title: "",
        textAlign: "center"
      }
    ];
  }

  getTableBody(tracks, soundbites) {
    return tracks.map(function(track) {
      return {
        id: track.get("id"),
        cells: [{
          id: "name",
          content: (
            <div>
              <Link to={{ pathname: "/track/" + track.get("id") }}>
                {track.get("name")}
              </Link>
              <PencilIcon onClick={() => console.log("pencil icon clicked")} />
            </div>
          ),
          sortableContent: track.get("name")
        }, {
          id: "soundbites",
          content: soundbites.filter(
            soundbite => soundbite.get("track") === track.get("id")
          ).count()
        }, {
          id: "duration",
          content: track.get("duration")
        }, {
          id: "speakers",
          content: track.get("speakers").map(speaker => speaker.get("name")).join(", ")
        }, {
          id: "reporters",
          content: track.get("reporters").map(reporter => reporter.get("name")).join(", ")
        }, {
          id: "tags",
          content: track.get("tags").map(tag => tag.get("name")).join(", ")
        }, {
          id: "rec_date",
          content: (
            <span title={moment(track.get("recDate")).format("MMMM Do YYYY, h:mm a")}>
              { moment(track.get("recDate")).format("DD-MM-YYYY") }
            </span>
          ),
          sortableContent: track.get("recDate")
        }, {
          id: "lastModified",
          content: moment(track.get("lastModified")).fromNow(),
          sortableContent: track.get("lastModified")
        }, {
          id: "preview",
          content: (
            <div>
              <PreviewPlayer src={"/tracks/" + track.get("id") + ".mp3" } id={track.get("id") } />
            </div>
          )
        }]
      };
    });
  }

  render() {
    const content = () => (
      <TableView location={this.props.location}
                 items={this.props.tracks}
                 tableHead={this.getTableHead()}
                 tableBody={this.getTableBody(
                   this.props.tracks.filter(track => !track.get("inTrash")),
                   this.props.soundbites
                 )}
                 checkbox={true}
                 itemType={["Track", "Tracks"]}
                 moveItemsToTrash={this.props.moveTracksToTrash}

                 modalTitle={"New Track"}
                 modalContent={(
                   <div>
                     TEST
                   </div>
                 )}
                 modalButtons={[{
                   text: "Create Project",
                   color: "blue",
                   submit: true,
                   onClick: () => {
                     this.props.addProject(this.state.addProjectForm.name);
                     this.resetInput();
                   },
                   hideModal: true,
                   align: "right"
                 }]}
      />
    );
    return (
      <div className="app">
        <Menu active="tracks" project={this.props.match.params.project} />
        <main>
          <Fold content={content} />
        </main>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    tracks: state.get("tracks").filter(track => track.get("project") === ownProps.match.params.project),
    soundbites: state.get("soundbites")
  };
}

export default connect(mapStateToProps, trackActions)(Tracks);
