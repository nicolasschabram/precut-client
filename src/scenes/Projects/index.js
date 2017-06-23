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

  constructor(props) {
    super(props);
    this.state = {addProjectForm: {}}
  }

  componentDidMount() {
    document.title = "Projects - Precut";
  }

  setInput(field, text) {
    console.log(text);
    this.setState({
      addProjectForm: {
        [field]: text
      }
    });
  }

  resetInput() {
    this.setState({addProjectForm: {}});
  }

  getTableHead() {
    return [
      {
        id: "name",
        title: "Name",
        textAlign: "left"
      },
      {
        id: "files",
        title: "Files",
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

  getTableBody(projects, files) {
    return projects.map(function(project) {
      return {
        id: project.get("id"),
        cells: [{
          id: "name",
          content: (
            <div>
              <Link to={{ pathname: "/" + project.get("id") + "/files" }}>
                {project.get("name")}
              </Link>
              <PencilIcon onClick={() => console.log("pencil icon clicked")} />
            </div>
          ),
          sortableContent: project.get("name")
        }, {
          id: "files",
          content: files.filter(file => file.get("project") === project.get("id")).count()
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
                   this.props.files.filter(file => !file.get("inTrash"))
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
                           setInput={(field, text) => this.setInput(field, text)}
                           formState={this.state.addProjectForm}
                     />
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
    files: state.get("files")
  };
}

export default connect(
  mapStateToProps,
  {...projectActions}
)(Projects);
