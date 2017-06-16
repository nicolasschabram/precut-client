import React from "react";
import SearchBar from "components/SearchBar";
import Button from "components/Button";
import { Link } from "react-router-dom";
import "./styles.css";

export default class extends React.PureComponent {
  handleClick() {
    console.log("button clicked");
  }
  render() {
    return (
      <div className="meta-bar">
        <SearchBar />
        <Button buttonText="Delete 1 Project"
                color="red"
                onClick={() => this.handleClick()}
        />

        <Link to={{ pathname: this.props.location.pathname + "/trash" }}
              title={this.props.name}
        >
          Trash (2)
        </Link>
        <Button buttonText="New Project"
                color="blue"
                onClick={() => this.handleClick()}
                style={{float: "right"}}
        />
      </div>
    );
  }
}
