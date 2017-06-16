import React from "react";
import Fold from "components/Fold";
import TableView from "components/TableView";

export default class extends React.PureComponent {
  render() {
    const content = () => (<TableView location={this.props.location} />);
    return <Fold content={content} />;
  }
}
