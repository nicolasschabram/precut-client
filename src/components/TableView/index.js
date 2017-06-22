import React from "react";

import MetaBar from "./components/MetaBar";
import Table from "./components/Table";
import Modal from "components/Modal";

export default class TableView extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      selectedItems: [],
      allSelected: false,
      sortBy: {
        column: "lastModified",
        order: "DESC"
      },
      modalIsVisible: false
    }
  }

  toggleSelect(key) {
    this.setState((prevState, props) => {
      return {
        selectedItems: prevState.selectedItems.indexOf(key) >= 0 ?
          prevState.selectedItems.filter(item => item !== key) :
          prevState.selectedItems.concat([key])
      }
    }, () => {
      this.setState((prevState, props) => {
        return {
          allSelected: prevState.selectedItems.length === props.items.filter(
            item => !item.get("inTrash")
          ).count()
        };
      });
    });
  }

  toggleSelectAll() {
    this.setState((prevState, props) => {
      return {
        selectedItems: prevState.allSelected ?
          [] :
          props.items.filter(
            item => !item.get("inTrash")
          ).map(
            item => item.get("id")
          ).toArray(),
        allSelected: !prevState.allSelected
      }
    });
  }

  resetSelection() {
    this.setState({
      selectedItems: []
    });
  }

  sortTable(column) {
    if (column) {
      this.setState(prevState => {
        return {
          sortBy: {
            column: column,
            order: prevState.sortBy.column === column &&
                   prevState.sortBy.order === "DESC" ? "ASC" : "DESC"
          }
        }
      });
    } else {
      this.setState({
        sortBy: {
          column: "lastModified",
          order: "DESC"
        }
      })
    }
  }

  showModal() {
    this.setState({
      modalIsVisible: true
    });
  }

  hideModal() {
    this.setState({
      modalIsVisible: false
    });
  }

  render() {
    return (
      <div>
        <MetaBar location={this.props.location}
                 itemType={this.props.itemType}
                 items={this.props.items}
                 moveItemsToTrash={(items) => {
                  this.props.moveItemsToTrash(items);
                  this.resetSelection();
                 }}
                 showModal={() => this.showModal()}
                 hideModal={() => this.hideModal()}
                 selectedItems={this.state.selectedItems}
        />
        <Table style={{marginTop: "1rem"}}
               tableHead={this.props.tableHead}
               tableBody={this.props.tableBody}
               checkbox={this.props.checkbox}
               items={this.props.items.filter(item => !item.get("inTrash"))}
               selectedItems={this.state.selectedItems}
               allSelected={this.state.allSelected}
               sortBy={this.state.sortBy}
               toggleSelect={key => this.toggleSelect(key)}
               toggleSelectAll={() => this.toggleSelectAll()}
               sortTable={column => this.sortTable(column)}
        />
        {this.state.modalIsVisible ?
          <Modal title={this.props.modalTitle}
                 content={this.props.modalContent}
                 buttons={this.props.modalButtons}
                 hideModal={() => this.hideModal()}
          /> :
          null}
      </div>
    )
  }
}
