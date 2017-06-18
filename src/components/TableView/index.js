import React from "react";
import {connect} from "react-redux";

import MetaBar from "./components/MetaBar";
import Table from "./components/Table";
import Modal from "components/Modal";

class TableView extends React.PureComponent {
  render() {
    return (
      <div>
        <MetaBar location={this.props.location}
                 itemType={this.props.itemType}
                 items={this.props.items}
                 moveItemsToTrash={this.props.moveItemsToTrash}
        />
        <Table style={{marginTop: "1rem"}}
               tableHead={this.props.tableHead}
               tableBody={this.props.tableBody}
               checkbox={this.props.checkbox}
               items={this.props.items}
        />
        {this.props.modalIsVisible ?
          <Modal itemType={this.props.itemType}
                 buttons={this.props.modalButtons}
          /> :
          null}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    modalIsVisible: state.getIn(["ui", "modal", "isVisible"])
  };
}

export default connect(mapStateToProps)(TableView);
