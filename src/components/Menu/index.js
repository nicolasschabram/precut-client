import React from "react";
import "./styles.css";
import Item from "./components/Item";

export default class Menu extends React.PureComponent {
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

    const Items = pages.map(page => {
      return (<MenuItem name={page.name}
                        key={page.hash}
                        hash={page.hash}
                        isTop={!!page.isTop}
                        isBottom={!!page.isBottom}
                        isActive={!!page.isActive} />);
    });

    return (
      <nav className="menu">
        <ul className="menu__list">{Items}</ul>
      </nav>
    );
  };
};
