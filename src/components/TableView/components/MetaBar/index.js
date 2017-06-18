import React from "react";
import {connect} from "react-redux";
import SearchBar from "components/SearchBar";
import Button from "components/Button";
import { Link } from "react-router-dom";
import "./styles.css";
import * as modalActions from "data/ui/modal/actions";

class MetaBar extends React.PureComponent {
  getButtonText(itemType, selectedItemCount) {
    return selectedItemCount === 1 ?
      "Delete 1 " + itemType[0] :
      "Delete " + selectedItemCount + " " + itemType[1]
  }
  render() {
    return (
      <div className="meta-bar">
        <SearchBar itemType={this.props.itemType} />
        { this.props.selectedKeys.count() ?
          <Button buttonText={this.getButtonText(this.props.itemType,
                                                 this.props.selectedKeys.count())}
                  color="red"
                  onClick={() => this.props.moveItemsToTrash(
                    this.props.selectedKeys
                  )}
          /> :
          null
        }

        <Link to={{ pathname: this.props.location.pathname + "/trash" }}
              title={this.props.name}
        >
          Trash ({this.props.items.filter(item => item.get("inTrash")).count()})
        </Link>
        <Button buttonText={"New " + this.props.itemType[0]}
                color="blue"
                onClick={() => this.props.showModal()}
                style={{float: "right"}}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedKeys: state.getIn(["ui", "table_view", "selectedKeys"])
  };
}

export default connect(mapStateToProps, modalActions)(MetaBar);
