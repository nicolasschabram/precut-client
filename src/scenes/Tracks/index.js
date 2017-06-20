import React from "react";
import moment from "moment";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import Form from "components/Form";
import Fold from "components/Fold";
import TableView from "components/TableView";
import PencilIcon from "components/Icon/components/Pencil";

import * as trackActions from "data/tracks/actions";
import * as tableViewActions from "data/ui/table_view/actions";
import * as modalActions from "data/ui/modal/actions";
import * as formActions from "data/ui/form/actions";

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
      }
    ];
  }

  getTableBody(tracks) {
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
          content: track.get("soundbites").count(),
          sortableContent: track.get("soundbites").count()
        }, {
          id: "duration",
          content: track.get("duration"),
          sortableContent: track.get("duration")
        }, {
          id: "speakers",
          content: track.get("speakers").map(speaker => speaker.get("name")).join(", "),
          sortableContent: track.get("speakers").map(speaker => speaker.get("name")).join(", ")
        }, {
          id: "reporters",
          content: track.get("reporters").map(reporter => reporter.get("name")).join(", "),
          sortableContent: track.get("reporters").map(reporter => reporter.get("name")).join(", ")
        }, {
          id: "tags",
          content: track.get("tags").map(tag => tag.get("name")).join(", "),
          sortableContent: track.get("tags").map(tag => tag.get("name")).join(", ")
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
                   this.props.tracks.filter(track => !track.get("inTrash"))
                 )}
                 checkbox={true}
                 itemType={["Track", "Tracks"]}
                 moveItemsToTrash={this.props.moveTracksToTrash}

                 modalTitle={"New Project"}
                 modalContent={(
                   <div>
                     <p>Please provide a unique name for your new project.</p>

                     <Form id="new-project"
                           fields={[{
                             type: "input",
                             id: "name",
                             text: "Name",
                             required: true,
                             placeholder: "My New Project"
                           }]}
                     />
                   </div>
                 )}
                 modalButtons={[{
                   text: "New Track",
                   color: "blue",
                   submit: true,
                   onClick: () => { this.props.addProject(this.props.newProjectName);
                                    this.props.hideModal();
                                  },
                   align: "right",
                   cleanUpForm: true
                 }]}
                 hideModalCleanup={() => this.props.clearForm("new-project")}
      />
    );
    return <Fold content={content} />;
  }

  componentWillUnmount() {
    this.props.resetSelection();
  }
}

function mapStateToProps(state, ownProps) {
  return {
    tracks: state.get("tracks").filter(track => track.get("project") === ownProps.match.params.project),
    sortBy: state.getIn(["ui", "table_view", "sortBy", "column"]),
    sortOrder: state.getIn(["ui", "table_view", "sortBy", "order"]),
    newProjectName: state.getIn(["ui", "forms", "new-project", "name"])
  };
}

export default connect(
  mapStateToProps,
  {...trackActions, ...tableViewActions, ...modalActions, ...formActions}
)(Tracks);
