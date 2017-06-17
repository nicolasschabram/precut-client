import React from "react";

export default class Filter extends React.PureComponent {
  render() {
    return (
      <filter id="menu-item__icon-filter">
        <feFlood result="flood" floodColor="#fff" floodOpacity="1" />
        <feComposite in="flood" result="mask" in2="SourceGraphic" operator="in" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        <feMerge>
            <feMergeNode in="blurred" />
            <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    );
  }
}
