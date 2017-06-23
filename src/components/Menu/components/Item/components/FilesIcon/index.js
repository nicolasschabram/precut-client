import React from "react";
import Filter from "components/Menu/components/Filter";
import classNames from "classnames";

export default class FilesIcon extends React.PureComponent {
  render() {
    const svgClass = classNames(
      "menu__icon",
      "menu__icon--" + this.props.hash, {
        "menu__icon--active": this.props.isActive
      }
    );

    return (
      <svg className={svgClass} viewBox="-10 -10 51 51" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g transform="translate(-19 -1155)">
          <g>
            <g>
              <use xlinkHref="#tracks__path0_fill" transform="translate(30.3667 1162.16)" fill="#fff"/>
            </g>
            <g>
              <use xlinkHref="#tracks__path1_fill" transform="translate(19 1155)" fill="#fff"/>
            </g>
          </g>
        </g>
        {this.props.isActive ? <Filter /> : null}
        <defs>
          <path id="tracks__path0_fill" d="M 12.1742 7.76261L 0.80755 0.0887546C 0.648933 -0.0176562 0.444333 -0.0294226 0.274866 0.0590826C 0.105916 0.147588 0 0.321528 0 0.511329L 0 15.859C 0 16.0488 0.105917 16.2228 0.275384 16.3113C 0.350817 16.3512 0.434 16.3706 0.516667 16.3706C 0.61845 16.3706 0.720233 16.3405 0.80755 16.2816L 12.1742 8.60776C 12.3153 8.51261 12.4 8.35452 12.4 8.18519C 12.4 8.01585 12.3153 7.85777 12.1742 7.76261ZM 1.03333 14.8906L 1.03333 1.47977L 10.9663 8.18519L 1.03333 14.8906Z" />
          <path id="tracks__path1_fill" d="M 15.5 0C 6.9533 0 0 6.88499 0 15.3477C 0 23.8105 6.9533 30.6954 15.5 30.6954C 24.0467 30.6954 31 23.8105 31 15.3477C 31 6.88499 24.0467 0 15.5 0ZM 15.5 29.6723C 7.52318 29.6723 1.03333 23.2462 1.03333 15.3477C 1.03333 7.44927 7.52318 1.02318 15.5 1.02318C 23.4768 1.02318 29.9667 7.44927 29.9667 15.3477C 29.9667 23.2462 23.4768 29.6723 15.5 29.6723Z" />
        </defs>
      </svg>
    );
  }
}
