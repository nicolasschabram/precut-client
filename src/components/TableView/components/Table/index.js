import React from "react";
import BodyRow from "./components/BodyRow";
import "./styles.css";

export default class extends React.PureComponent {
  handleClick() {
    console.log("pencil clicked");
    return false;
  }
  renderBodyRows(items) {
    return items.map(item => (
      <BodyRow item={item} key={item.get("id")} handleClick={() => this.handleClick()} />
    ));
  }
  render() {
    return (
      <table className="table" style={this.props.style}>
        <thead className="table__head">
          <tr className="table__row--head">
            <th className="table__cell  table__cell--center  table__cell--head">
              <input type="checkbox" />
            </th>
            <th className="table__cell  table__cell--left  table__cell--head">Name</th>
            <th className="table__cell  table__cell--right  table__cell--head">Tracks</th>
            <th className="table__cell  table__cell--right  table__cell--head">Soundbites</th>
            <th className="table__cell  table__cell--right  table__cell--head">Tags</th>
            <th className="table__cell  table__cell--right  table__cell--head">Boards</th>
            <th className="table__cell  table__cell--left  table__cell--head">Last modified</th>
          </tr>
        </thead>
        <tbody className="table__body">
          {this.renderBodyRows(this.props.items)}
        </tbody>
      </table>
    )
  }
}
