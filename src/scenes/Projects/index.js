import React from "react";
import moment from "moment";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import Form from "components/Form";
import Fold from "components/Fold";
import TableView from "components/TableView";
import PencilIcon from "components/Icon/components/Pencil";

import * as projectActions from "data/projects/actions";
import * as tableViewActions from "data/ui/table_view/actions";
import * as modalActions from "data/ui/modal/actions";
import * as formActions from "data/ui/form/actions";

const Projects = class extends React.PureComponent {
  getTableHead() {
    return [
      {
        title: "Name",
        textAlign: "left"
      },
      {
        title: "Tracks",
        textAlign: "right"
      },
      {
        title: "Soundbites",
        textAlign: "right"
      },
      {
        title: "Tags",
        textAlign: "right"
      },
      {
        title: "Boards",
        textAlign: "right"
      },
      {
        title: "Last Modified",
        textAlign: "left"
      }
    ];
  }

  getTableBody(projects) {
    return projects.map(function(project) {
      return {
        id: project.get("id"),
        cells: [

          (<div>
            <Link to={{ pathname: "/project/" + project.get("id") }}>
              {project.get("name")}
            </Link>
            <PencilIcon onClick={() => console.log("pencil icon clicked")} />
          </div>),

          // Track Count
          project.get("tracks").count(),

          // Soundbite Count
          1,

          // Tag Count
          2,

          // Board Count
          3,

          // Last modified
          moment(project.get("lastModified")).fromNow()
        ]
      };
    });
  }

  render() {
    const content = () => (
      <TableView location={this.props.location}
                 items={this.props.projects}
                 tableHead={this.getTableHead()}
                 tableBody={this.getTableBody(
                   this.props.projects.filter(project => !project.get("inTrash"))
                 )}
                 checkbox={true}
                 itemType={["Project", "Projects"]}
                 moveItemsToTrash={this.props.moveProjectToTrash}

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

function mapStateToProps(state) {
  return {
    projects: state.get("projects"),
    newProjectName: state.getIn(["ui", "forms", "new-project", "name"])
  };
}

export default connect(
  mapStateToProps,
  {...projectActions, ...tableViewActions, ...modalActions, ...formActions}
)(Projects);
