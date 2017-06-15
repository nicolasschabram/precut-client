import React from "react";
import Filter from "./filter";

export default class extends React.PureComponent {
  render() {
    return (
      <svg className="menu__icon  menu__icon--scripts" viewBox="-10 -10 44 51" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="Canvas" transform="translate(-23 -1419)">
          <g id="Group">
            <g id="Vector">
              <use xlinkHref="#scripts__path0_fill" transform="translate(28.1064 1430.12)" fill="#fff"/>
            </g>
            <g id="Vector">
              <use xlinkHref="#scripts__path1_fill" transform="translate(28.1064 1426.08)" fill="#fff"/>
            </g>
            <g id="Vector">
              <use xlinkHref="#scripts__path0_fill" transform="translate(28.1064 1434.17)" fill="#fff"/>
            </g>
            <g id="Vector">
              <use xlinkHref="#scripts__path0_fill" transform="translate(28.1064 1438.21)" fill="#fff"/>
            </g>
            <g id="Vector">
              <use xlinkHref="#scripts__path0_fill" transform="translate(28.1064 1442.26)" fill="#fff"/>
            </g>
            <g id="Vector">
              <use xlinkHref="#scripts__path2_fill" transform="translate(23 1419)" fill="#fff"/>
            </g>
          </g>
        </g>
        <Filter hash="scripts" />
        <defs>
          <path id="scripts__path0_fill" d="M 13.2766 0L 0.510638 0C 0.228766 0 0 0.226013 0 0.505621C 0 0.78523 0.228766 1.01124 0.510638 1.01124L 13.2766 1.01124C 13.5585 1.01124 13.7872 0.78523 13.7872 0.505621C 13.7872 0.226013 13.5585 0 13.2766 0Z" />
          <path id="scripts__path1_fill" d="M 0.510638 1.01124L 5.61702 1.01124C 5.89889 1.01124 6.12766 0.78523 6.12766 0.505621C 6.12766 0.226013 5.89889 0 5.61702 0L 0.510638 0C 0.228766 0 0 0.226013 0 0.505621C 0 0.78523 0.228766 1.01124 0.510638 1.01124Z" />
          <path id="scripts__path2_fill" d="M 16.5518 0L 0 0L 0 30.3373L 24 30.3373L 24 7.375L 16.5518 0ZM 16.8511 1.72619L 22.2567 7.0787L 16.8511 7.0787L 16.8511 1.72619ZM 1.02128 29.326L 1.02128 1.01124L 15.8298 1.01124L 15.8298 8.08994L 22.9787 8.08994L 22.9787 29.326L 1.02128 29.326Z" />
        </defs>
      </svg>
    );
  }
}
