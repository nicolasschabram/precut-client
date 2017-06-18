import React from "react";
import moment from "moment";
import {connect} from "react-redux";

import Fold from "components/Fold";
import TableView from "components/TableView";
import PencilIcon from "components/Icon/components/Pencil";
import {Link} from "react-router-dom";

import * as projectActions from "data/projects/actions";

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
            <PencilIcon
              style={{
                height: ".9rem",
                color: "var(--black)",
                marginLeft: ".75rem",
                marginBottom: "-.1rem",
                cursor: "pointer"
              }}
              onClick={() => console.log("pencil icon clicked")}
            />
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
                 moveItemsToTrash={this.props.moveToTrash}

                 modalButtons={[{
                   text: "Create Project",
                   color: "blue",
                   submit: true,
                   onClick: () => console.log("click"),
                   align: "right"
                 }]}
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
    projects: state.get("projects")
  };
}

export default connect(mapStateToProps, projectActions)(Projects);
