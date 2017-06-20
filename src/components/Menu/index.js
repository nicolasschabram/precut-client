import React from "react";
import "./styles.css";
import Item from "./components/Item";

export default class Menu extends React.PureComponent {
  render() {
    const isProjects = this.props.navItem === "projects";

    const pages = [{
      name: "Projects",
      hash: "projects",
      isTop: true,
      isActive: isProjects,
      isVisible: true
    }, {
      name: "Tracks",
      hash: "tracks",
      isActive: this.props.navItem === "tracks",
      isVisible: !isProjects
    }, {
      name: "Tags",
      hash: "tags",
      isActive: this.props.navItem === "tags",
      isVisible: !isProjects
    }, {
      name: "Boards",
      hash: "boards",
      isActive: this.props.navItem === "boards",
      isVisible: !isProjects
    }, {
      name: "Scripts",
      hash: "scripts",
      isActive: this.props.navItem === "scripts",
      isVisible: !isProjects
    }, {
      name: "Settings",
      hash: "settings",
      isBottom: true,
      isActive: this.props.navItem === "settings",
      isVisible: true
    }];

    const Items = pages.map(page => {
      return page.isVisible ? (
        <Item name={page.name}
              key={page.hash}
              hash={page.hash}
              isTop={!!page.isTop}
              isBottom={!!page.isBottom}
              isActive={!!page.isActive} />
      ) : null;
    });

    return (
      <nav className="menu">
        <ul className="menu__list">{Items}</ul>
      </nav>
    );
  };
};
