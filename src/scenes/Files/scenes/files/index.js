import React from "react";
import moment from "moment";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import Menu from "components/Menu";
import Fold from "components/Fold";
import TableView from "components/TableView";
import PencilIcon from "components/Icon/components/Pencil";
import PreviewPlayer from "components/Player/components/Preview";

import * as fileActions from "data/files/actions";

class Files extends React.PureComponent {

  componentDidMount() {
    document.title = "Files - Precut";
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

  getTableBody(files, soundbites) {
    return files.map(function(file) {
      return {
        id: file.get("id"),
        cells: [{
          id: "name",
          content: (
            <div>
              <Link to={{ pathname: "/f/" + file.get("id") }}>
                {file.get("name")}
              </Link>
              <PencilIcon onClick={() => console.log("pencil icon clicked")} />
            </div>
          ),
          sortableContent: file.get("name")
        }, {
          id: "soundbites",
          content: soundbites.filter(
            soundbite => soundbite.get("file") === file.get("id")
          ).count()
        }, {
          id: "duration",
          content: file.get("duration")
        }, {
          id: "speakers",
          content: file.get("speakers").map(speaker => speaker.get("name")).join(", ")
        }, {
          id: "reporters",
          content: file.get("reporters").map(reporter => reporter.get("name")).join(", ")
        }, {
          id: "tags",
          content: file.get("tags").map(tag => tag.get("name")).join(", ")
        }, {
          id: "rec_date",
          content: (
            <span title={moment(file.get("recDate")).format("MMMM Do YYYY, h:mm a")}>
              { moment(file.get("recDate")).format("DD-MM-YYYY") }
            </span>
          ),
          sortableContent: file.get("recDate")
        }, {
          id: "lastModified",
          content: moment(file.get("lastModified")).fromNow(),
          sortableContent: file.get("lastModified")
        }, {
          id: "preview",
          content: (
            <div>
              <PreviewPlayer src={"/files/" + file.get("id") + ".mp3" } id={file.get("id") } />
            </div>
          )
        }]
      };
    });
  }

  render() {
    const content = () => (
      <TableView location={this.props.location}
                 items={this.props.files}
                 tableHead={this.getTableHead()}
                 tableBody={this.getTableBody(
                   this.props.files.filter(file => !file.get("inTrash")),
                   this.props.soundbites
                 )}
                 checkbox={true}
                 itemType={["File", "Files"]}
                 moveItemsToTrash={this.props.moveFilesToTrash}

                 modalTitle={"New File"}
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
        <Menu active="files" project={this.props.match.params.project} />
        <main>
          <Fold content={content} />
        </main>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    files: state.get("files").filter(file => file.get("project") === ownProps.match.params.project),
    soundbites: state.get("soundbites")
  };
}

export default connect(mapStateToProps, fileActions)(Files);
