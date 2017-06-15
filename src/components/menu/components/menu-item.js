import React from "react";
import ProjectsIcon from "./projects-icon";
import TracksIcon from "./tracks-icon";
import TagsIcon from "./tags-icon";
import BoardsIcon from "./boards-icon";
import ScriptsIcon from "./scripts-icon";
import SettingsIcon from "./settings-icon";
var classNames = require("classnames");

export default class extends React.PureComponent {
  getIcon() {
    switch (this.props.hash) {
      case "projects": return <ProjectsIcon hash={this.props.hash} />;
      case "tracks":   return <TracksIcon hash={this.props.hash} />;
      case "tags":     return <TagsIcon hash={this.props.hash} />;
      case "boards":   return <BoardsIcon hash={this.props.hash} />;
      case "scripts":  return <ScriptsIcon hash={this.props.hash} />;
      case "settings": return <SettingsIcon hash={this.props.hash} />;
      default: return null;
    }
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

    return (
      <li className={itemClass}>
        <a href={"/#/" + this.props.hash}
           title={this.props.name}
           className={linkClass}>
          {this.getIcon()}{this.props.name}
        </a>
      </li>
    );
  }
}
