import React from "react";
import "./menu.css";
import MenuItem from "./components/menu-item";

export default class extends React.PureComponent {
  render() {
    const pages = [{
      name: "Projects",
      hash: "projects",
      isTop: true
    }, {
      name: "Tracks",
      hash: "tracks",
      isActive: true
    }, {
      name: "Tags",
      hash: "tags"
    }, {
      name: "Boards",
      hash: "boards"
    }, {
      name: "Scripts",
      hash: "scripts"
    }, {
      name: "Settings",
      hash: "settings",
      isBottom: true
    }];

    const pageComponents = pages.map(page => {
      return (<MenuItem name={page.name}
                        key={page.hash}
                        hash={page.hash}
                        isTop={!!page.isTop}
                        isBottom={!!page.isBottom}
                        isActive={!!page.isActive} />);
    });

    return (
      <nav className="menu">
        <ul className="menu__list">{pageComponents}</ul>
      </nav>
    );
  };
};

