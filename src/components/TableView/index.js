import React from "react";
import MetaBar from "./components/MetaBar";
import Table from "./components/Table";

export default class extends React.PureComponent {
  render() {
    return (
      <div>
        <MetaBar location={this.props.location} />
        <Table style={{marginTop: "1rem"}}
               items={this.props.items}
               itemCount={this.props.itemCount}
        />
      </div>
    )
  }
}
