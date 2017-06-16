import React from "react";
import { Link } from "react-router-dom";
import PencilIcon from "components/Icon/components/Pencil";
import "./styles.css";

export default class extends React.PureComponent {
  handleClick() {
    console.log("pencil clicked");
    return false;
  }
  render() {
    const BodyRow = () => (
      <tr className="table__row--body">

        <td className="table__cell  table__cell--center  table__cell--body">
          <input type="checkbox" />
        </td>

        <td className="table__cell  table__cell--left  table__cell--body">
          <Link to={{ pathname: "/project/45ggt24" }}>
            A random project STIFT-SYMBOL
          </Link>
          <PencilIcon
            style={{
              height: ".9rem",
              color: "var(--black)",
              marginLeft: ".75rem",
              marginBottom: "-.1rem",
              cursor: "pointer"
            }}
            onClick={() => this.handleClick()}
          />
        </td>

        <td className="table__cell  table__cell--right  table__cell--body">
          3
        </td>

        <td className="table__cell  table__cell--right  table__cell--body">
          43
        </td>

        <td className="table__cell  table__cell--right  table__cell--body">
          10
        </td>

        <td className="table__cell  table__cell--right  table__cell--body">
          5
        </td>

        <td className="table__cell  table__cell--left  table__cell--body">
          yesterday
        </td>

      </tr>
    );

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
          <BodyRow />
          <BodyRow />
          <BodyRow />
          <BodyRow />
          <BodyRow />
          <BodyRow />
          <BodyRow />
        </tbody>
      </table>
    )
  }
}
