import React from "react";

export default class extends React.PureComponent {
  render() {
    const id = "filter--" + this.props.hash;
    return (
      <filter id={id}>
        <feFlood result="flood" flood-color="#fff" flood-opacity="1" />
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
