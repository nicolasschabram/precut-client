import React from "react";
import {Link} from "react-router-dom";
import PencilIcon from "components/Icon/components/Pencil";

export default class extends React.PureComponent {
  render() {
    return (
      <tr className="table__row--body">

        <td className="table__cell  table__cell--center  table__cell--body">
          <input type="checkbox" />
        </td>

        <td className="table__cell  table__cell--left  table__cell--body">
          <Link to={{ pathname: "/project/45ggt24" }}>
            {this.props.item.get("name")}
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
  }
}
