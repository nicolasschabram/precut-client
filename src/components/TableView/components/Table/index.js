import React from "react";
import classNames from "classnames";
import "./styles.css";

export default class Table extends React.PureComponent {

  renderHeadCells(cells, allSelected, toggleSelectAll, keys) {
    const checkbox = (
      <th className="table__cell  table__cell--head  table__cell--center">
        <input value="selectAll"
               type="checkbox"
               checked={allSelected}
               onChange={() => toggleSelectAll(keys)}
        />
      </th>
    );

    cells = cells.map(function(cell) {
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
      );
    });

    return (
      <tr className="table__row--head">
        {checkbox}{cells}
      </tr>
    );
  }

  renderBodyRows(rows, columns, toggleSelect, selectedItems) {

    return rows.map(function(row, index, rows) {
      const checkbox = (
        <td className="table__cell  table__cell--body  table__cell--center">
          <input value={row.id + "--selected"}
                 type="checkbox"
                 checked={selectedItems.includes(row.id)}
                 onChange={() => toggleSelect(row.id, rows.count())}
          />
        </td>
      );

      return (
        <tr className="table__row--body" key={row.id}>
          {checkbox}
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
      );
    });
  }

  render() {
    return (
      <table className="table" style={this.props.style}>
        <thead className="table__head">
          {this.renderHeadCells(
            this.props.columns,
            this.props.allSelected,
            this.props.toggleSelectAll,
            this.props.keys
          )}
        </thead>
        <tbody className="table__body">
          {this.renderBodyRows(
            this.props.data,
            this.props.columns,
            this.props.toggleSelect,
            this.props.selectedItems
          )}
        </tbody>
      </table>
    )
  }
}
