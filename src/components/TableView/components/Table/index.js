import React from "react";
import classNames from "classnames";
import "./styles.css";

export default class extends React.PureComponent {

  renderHeadCells(cells) {
    return cells.map(function(cell) {
      const cellClass = classNames(
        "table__cell",
        "table__cell--head",
        "table__cell--" + cell.textAlign
      );
      return (
        <th className={cellClass}
            key={typeof cell.title === "object" ? "checkbox" : cell.title}
        >
          {cell.title}
        </th>
      )
    });
  }

  renderBodyRows(rows, columns) {
    return rows.map(row => (
      <tr className="table__row--body" key={row.id}>
        {row.cells.map(function(cell, index) {
          const cellClass = classNames(
            "table__cell",
            "table__cell--body",
            "table__cell--" + columns[index].textAlign
          );
          return (
            <td className={cellClass}
                key={
                  typeof columns[index].title === "object" ?
                    "checkbox" :
                    columns[index].title
                }
            >
              {cell}
            </td>
          );
        })}
      </tr>
    ));
  }

  render() {
    return (
      <table className="table" style={this.props.style}>
        <thead className="table__head">
          <tr className="table__row--head">
            {this.renderHeadCells(this.props.columns)}
          </tr>
        </thead>
        <tbody className="table__body">
          {this.renderBodyRows(this.props.data, this.props.columns)}
        </tbody>
      </table>
    )
  }
}
