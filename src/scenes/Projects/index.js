import React from "react";
import {connect} from "react-redux";

import Fold from "components/Fold";
import TableView from "components/TableView";

import {getProjectCount} from "data/projects/reducer"

const Projects = class extends React.PureComponent {
  render() {
    const content = () => (
      <TableView location={this.props.location}
                 items={this.props.projects}
                 itemCount={this.props.projectCount}
      />
    );
    return <Fold content={content} />;
  }
}

function mapStateToProps(state) {
  return {
    projects: state.get("projects"),
    itemCount: getProjectCount(state.get("projects"))
  };
}

export default connect(mapStateToProps)(Projects);
