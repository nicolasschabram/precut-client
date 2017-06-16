import React from "react";
import {connect} from "react-redux";
import moment from "moment";

import Fold from "components/Fold";
import TableView from "components/TableView";
import PencilIcon from "components/Icon/components/Pencil";
import {Link} from "react-router-dom";

import * as actions from "data/projects/actions";

const Projects = class extends React.PureComponent {

  getTableColumns() {
    return [
      {
        title: <input type="checkbox" />,
        textAlign: "center"
      },
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
        title: "LastModified",
        textAlign: "left"
      }
    ];
  }

  getTableData(projects, check) {
    return projects.map(function(project) {
      const checkProp = project.get("isChecked") ? { checked: "checked"} : {}
      return {
        id: project.get("id"),
        cells: [

          // Checkbox
          <input value={project.get("id") + "--selected"}
                 type="checkbox"
                 {...checkProp}
                 onChange={() => check(project.get("id"))}
          />,

          // Name + Pencil
          (
            <div>
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
            </div>
          ),

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
                 columns={this.getTableColumns(this.props.projects)}
                 data={this.getTableData(this.props.projects, this.props.check)}
      />
    );
    return <Fold content={content} />;
  }
}

function mapStateToProps(state) {
  return {
    projects: state.get("projects")
    //itemCount: getProjectCount(state.get("projects"))
  };
}

export default connect(mapStateToProps, actions)(Projects);
