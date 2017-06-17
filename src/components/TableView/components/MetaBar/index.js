import React from "react";
import SearchBar from "components/SearchBar";
import Button from "components/Button";
import { Link } from "react-router-dom";
import "./styles.css";

export default class MetaBar extends React.PureComponent {
  handleClick() {
    console.log("button clicked");
  }
  getButtonText(itemType, selectedItemCount) {
    return selectedItemCount === 1 ?
      "Delete 1 " + itemType[0] :
      "Delete " + selectedItemCount + " " + itemType[1]
  }
  render() {
    return (
      <div className="meta-bar">
        <SearchBar />
        { this.props.selectedItems.count() ?
          <Button buttonText={this.getButtonText(this.props.itemType, this.props.selectedItems.count())}
                  color="red"
                  onClick={() => this.handleClick()}
          /> :
          null
        }

        <Link to={{ pathname: this.props.location.pathname + "/trash" }}
              title={this.props.name}
        >
          Trash (2)
        </Link>
        <Button buttonText={"New " + this.props.itemType[0]}
                color="blue"
                onClick={() => this.handleClick()}
                style={{float: "right"}}
        />
      </div>
    );
  }
}
