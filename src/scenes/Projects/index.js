import React from "react";
import moment from "moment";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import Menu from "components/Menu";
import Form from "components/Form";
import Fold from "components/Fold";
import TableView from "components/TableView";
import PencilIcon from "components/Icon/components/Pencil";

import * as projectActions from "data/projects/actions";

class Projects extends React.PureComponent {

  componentDidMount() {
    document.title = "Projects - Precut";
  }

  getTableHead() {
    return [
      {
        id: "name",
        title: "Name",
        textAlign: "left"
      },
      {
        id: "tracks",
        title: "Tracks",
        textAlign: "right"
      },
      {
        id: "soundbites",
        title: "Soundbites",
        textAlign: "right"
      },
      {
        id: "tags",
        title: "Tags",
        textAlign: "right"
      },
      {
        id: "boards",
        title: "Boards",
        textAlign: "right"
      },
      {
        id: "lastModified",
        title: "Last Modified",
        textAlign: "left"
      }
    ];
  }

  getTableBody(projects, tracks) {
    return projects.map(function(project) {
      return {
        id: project.get("id"),
        cells: [{
          id: "name",
          content: (
            <div>
              <Link to={{ pathname: "/" + project.get("id") + "/tracks" }}>
                {project.get("name")}
              </Link>
              <PencilIcon onClick={() => console.log("pencil icon clicked")} />
            </div>
          ),
          sortableContent: project.get("name")
        }, {
          id: "tracks",
          content: tracks.filter(track => track.get("project") === project.get("id")).count()
        }, {
          id: "soundbites",
          content: 1
        }, {
          id: "tags",
          content: 2
        }, {
          id: "boards",
          content: 3
        }, {
          id: "lastModified",
          content: moment(project.get("lastModified")).fromNow(),
          sortableContent: project.get("lastModified")
        }]
      };
    });
  }

  render() {
    const content = () => (
      <TableView location={this.props.location}
                 items={this.props.projects}
                 tableHead={this.getTableHead()}
                 tableBody={this.getTableBody(
                   this.props.projects.filter(project => !project.get("inTrash")),
                   this.props.tracks.filter(track => !track.get("inTrash"))
                 )}
                 checkbox={true}
                 itemType={["Project", "Projects"]}
                 moveItemsToTrash={this.props.moveProjectsToTrash}

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
                   text: "Create Project",
                   color: "blue",
                   submit: true,
                   onClick: (state) => this.props.addProject(state.name),
                   align: "right",
                   cleanUpForm: true
                 }]}
      />
    );
    return (
      <div className="app">
        <Menu active="projects" project="asdasd" />
        <main>
          <Fold content={content} />
        </main>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    projects: state.get("projects"),
    tracks: state.get("tracks"),
    sortBy: state.getIn(["ui", "table_view", "sortBy", "column"]),
    sortOrder: state.getIn(["ui", "table_view", "sortBy", "order"]),
    newProjectName: state.getIn(["ui", "forms", "new-project", "name"])
  };
}

export default connect(
  mapStateToProps,
  {...projectActions}
)(Projects);
