import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

export default class Item extends React.PureComponent {
  getIcon() {
    let iconComponent;
    switch (this.props.hash) {
      case "projects": {
        iconComponent = require("./components/ProjectsIcon");
        break;
      }
      case "files": {
        iconComponent = require("./components/FilesIcon");
        break;
      }
      case "tags": {
        iconComponent = require("./components/TagsIcon");
        break;
      }
      case "boards": {
        iconComponent = require("./components/BoardsIcon");
        break;
      }
      case "scripts": {
        iconComponent = require("./components/ScriptsIcon");
        break;
      }
      case "settings": {
        iconComponent = require("./components/SettingsIcon");
        break;
      }
      default: {
        iconComponent = null;
      }
    }
    return iconComponent.default;
  }
  render() {
    const itemClass = classNames(
      "menu__item",
      {
        "menu__item--top": this.props.isTop,
        "menu__item--bottom": this.props.isBottom,
        "menu__item--active": this.props.isActive
      }
    );
    const linkClass = classNames(
      "menu__link",
      "menu__link--" + this.props.hash
    );

    const props = {
      hash: this.props.hash,
      isActive: !!this.props.isActive
    };

    const Icon = this.getIcon();

    return (
      <li className={itemClass}>
        <Link to={{ pathname: this.props.path }}
              title={this.props.name}
              className={linkClass}>
          <Icon {...props}/>{this.props.name}
        </Link>
      </li>
    );
  }
}
