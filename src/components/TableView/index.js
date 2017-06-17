import React from "react";
import MetaBar from "./components/MetaBar";
import Table from "./components/Table";

export default class TableView extends React.PureComponent {
  render() {
    return (
      <div>
        <MetaBar location={this.props.location}
                 itemType={this.props.itemType}
                 items={this.props.items}
                 moveToTrash={this.props.moveToTrash}
        />
        <Table style={{marginTop: "1rem"}}
               tableHead={this.props.tableHead}
               tableBody={this.props.tableBody}
               checkbox={this.props.checkbox}
               items={this.props.items}
        />
      </div>
    )
  }
}
