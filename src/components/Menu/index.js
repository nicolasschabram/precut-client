import React from "react";
import "./styles.css";
import Item from "./components/Item";

export default class Menu extends React.PureComponent {
  render() {
    const isProjects = this.props.active === "projects";

    const pages = [{
      name: "Projects",
      hash: "projects",
      isTop: true,
      isActive: isProjects,
      isVisible: true,
      path: "/projects/"
    }, {
      name: "Files",
      hash: "files",
      isActive: this.props.active === "files",
      isVisible: !isProjects,
      path: "/" + this.props.project + "/files"
    }, {
      name: "Tags",
      hash: "tags",
      isActive: this.props.active === "tags",
      isVisible: !isProjects,
      path: "/" + this.props.project + "/tags"
    }, {
      name: "Boards",
      hash: "boards",
      isActive: this.props.active === "boards",
      isVisible: !isProjects,
      path: "/" + this.props.project + "/boards"
    }, {
      name: "Scripts",
      hash: "scripts",
      isActive: this.props.active === "scripts",
      isVisible: !isProjects,
      path: "/" + this.props.project + "/scripts"
    }, {
      name: "Settings",
      hash: "settings",
      isBottom: true,
      isActive: this.props.active === "settings",
      isVisible: true,
      path: "/settings"
    }];

    const Items = pages.map(page => {
      return page.isVisible ? (
        <Item name={page.name}
              key={page.hash}
              hash={page.hash}
              isTop={!!page.isTop}
              isBottom={!!page.isBottom}
              isActive={!!page.isActive}
              path={page.path}
        />
      ) : null;
    });

    return (
      <nav className="menu">
        <ul className="menu__list">{Items}</ul>
      </nav>
    );
  };
};
