import React from "react";
import MetaBar from "./components/MetaBar";
import Table from "./components/Table";

export default class TableView extends React.PureComponent {
  render() {
    return (
      <div>
        <MetaBar location={this.props.location}
                 selectedItems={this.props.selectedItems}
                 itemType={this.props.itemType}
        />
        <Table style={{marginTop: "1rem"}}
               columns={this.props.columns}
               data={this.props.data}
               checkbox={true}
               selectedItems={this.props.selectedItems}
               allSelected={this.props.allSelected}
               toggleSelect={this.props.toggleSelect}
               toggleSelectAll={this.props.toggleSelectAll}
               resetSelection={this.props.resetSelection}
               keys={this.props.keys}
        />
      </div>
    )
  }
}
