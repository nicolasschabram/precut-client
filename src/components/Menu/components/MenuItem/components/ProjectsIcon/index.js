import React from "react";
import Filter from "components/Menu/components/Filter";
import classNames from "classnames";

export default class extends React.PureComponent {
  render() {
    const svgClass = classNames(
      "menu__icon",
      "menu__icon--" + this.props.hash, {
        "menu__icon--active": this.props.isActive
      }
    );

    return (
      <svg className={svgClass} viewBox="-10 -10 52 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="Canvas" transform="translate(-19 -1055)">
          <g id="icon--folder">
            <use xlinkHref="#projects__path0_fill" transform="translate(19 1055)" fill="#fff"/>
          </g>
        </g>
        {this.props.isActive ? <Filter /> : null}
        <defs>
          <path id="projects__path0_fill" d="M 14.1467 3.69666L 11.6837 0.289923L 11.4747 0L 0 0L 0 27.989L 32 27.989L 32 3.69666L 14.1467 3.69666ZM 30.9333 4.75284L 30.9333 7.39331L 16.8192 7.39331L 14.9104 4.75284L 30.9333 4.75284ZM 1.06667 26.9328L 1.06667 1.05619L 10.9253 1.05619L 13.592 4.75284L 13.5984 4.75284L 16.0997 8.21238C 16.2037 8.35602 16.3669 8.4326 16.5333 8.43313L 16.5333 8.4495L 30.9333 8.4495L 30.9333 26.9328L 1.06667 26.9328Z" />
        </defs>
      </svg>
    );
  }
}
