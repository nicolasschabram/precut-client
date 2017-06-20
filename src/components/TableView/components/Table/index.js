import React from "react";
import {connect} from "react-redux";
import classNames from "classnames";

import "./styles.css";
import * as tableViewActions from "data/ui/table_view/actions";

class Table extends React.PureComponent {

  componentDidMount() {
    this.props.sortTable();
  }

  renderHeadCells(cells, allSelected, toggleSelectAll, items, sortTable, sortBy) {
    const checkbox = (
      <th className="table__cell  table__cell--head  table__cell--center">
        <input value="selectAll"
               type="checkbox"
               checked={allSelected}
               onChange={() => toggleSelectAll(
                 items.map(item => item.get("id"))
               )}
               className="table__checkbox"
        />
      </th>
    );

    cells = cells.map(function(cell) {
      const cellClass = classNames(
        "table__cell",
        "table__cell--head",
        "table__cell--" + cell.textAlign,
        "table__cell--column-label"
      );
      const arrowClass = classNames(
        "table__arrow", {
          "table__arrow--hidden": sortBy.get("column") !== cell.id
        }
      )
      const sortArrow = (
        <span className={arrowClass}>
          { sortBy.get("order") === "DESC" ? " ▾ " : " ▴ "}
        </span>
      )
      return (
        <th className={cellClass}
            key={typeof cell.title === "object" ? "checkbox" : cell.id}
            onClick={() => sortTable(cell.id)}
            title={"Sort by “" + cell.title + "”"}
        >
          {cell.textAlign === "right" ? sortArrow : null}
          {cell.title}
          {cell.textAlign === "left" ? sortArrow : null}
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
                 className="table__checkbox"
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
                {cell.content}
              </td>
            );
          })}
        </tr>
      );
    });
  }

  render() {
    const sortField = this.props.sortBy.get("column");
    function compare(row_a, row_b) {
      let sortValA = row_a.cells.filter(
        cell => cell.id === sortField
      )[0];
      sortValA = typeof sortValA.sortableContent !== "undefined" ? sortValA.sortableContent : sortValA.content;

      let sortValB = row_b.cells.filter(
        cell => cell.id === sortField
      )[0];
      sortValB = typeof sortValB.sortableContent !== "undefined" ? sortValB.sortableContent : sortValB.content;

      if (sortValA < sortValB)
        return -1;
      if (sortValA > sortValB)
        return 1;
      return 0;
    }

    let tableBody = this.props.tableBody.sort(compare);

    tableBody = this.props.sortBy.get("order") === "ASC" ? tableBody : tableBody.reverse();

    return (
      <table className="table" style={this.props.style}>
        <thead className="table__head">
          {this.renderHeadCells(
            this.props.tableHead,
            this.props.allSelected,
            this.props.toggleSelectAll,
            this.props.items,
            this.props.sortTable,
            this.props.sortBy
          )}
        </thead>
        <tbody className="table__body">
          {this.renderBodyRows(
            tableBody,
            this.props.tableHead,
            this.props.toggleSelect,
            this.props.selectedItems
          )}
        </tbody>
      </table>
    )
  }
}


function mapStateToProps(state) {
  return {
    selectedItems: state.getIn(["ui", "table_view", "selectedKeys"]),
    allSelected: !!state.getIn(["ui", "table_view", "allSelected"]),
    sortBy: state.getIn(["ui", "table_view", "sortBy"])
  };
}

export default connect(mapStateToProps, tableViewActions)(Table);
