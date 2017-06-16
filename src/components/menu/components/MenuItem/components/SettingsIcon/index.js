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
      <svg className={svgClass} viewBox="-10 -10 51 51" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="Canvas" transform="translate(-20 -1685)">
          <g id="Group">
            <g id="Vector">
              <use xlinkHref="#settings__path0_fill" transform="translate(27.4398 1692.37)" fill="#fff"/>
            </g>
            <g id="Vector">
              <use xlinkHref="#settings__path1_fill" transform="translate(20 1685)" fill="#fff"/>
            </g>
            <g id="Vector">
              <use xlinkHref="#settings__path2_fill" transform="translate(29.7289 1694.63)" fill="#fff"/>
            </g>
          </g>
        </g>
        {this.props.isActive ? <Filter /> : null}
        <defs>
          <path id="settings__path0_fill" d="M 8.01205 1.0066e-15C 3.59398 1.0066e-15 0 3.55867 0 7.93333C 0 12.308 3.59398 15.8667 8.01205 15.8667C 12.4301 15.8667 16.0241 12.308 16.0241 7.93333C 16.0241 3.55867 12.4301 1.0066e-15 8.01205 1.0066e-15ZM 8.01205 14.7333C 4.22521 14.7333 1.14458 11.683 1.14458 7.93333C 1.14458 4.1837 4.22521 1.13333 8.01205 1.13333C 11.7989 1.13333 14.8795 4.1837 14.8795 7.93333C 14.8795 11.683 11.7989 14.7333 8.01205 14.7333Z" />
          <path id="settings__path1_fill" d="M 29.3127 11.9L 28.1578 11.9C 27.863 10.8165 27.4298 9.77953 26.8644 8.8077L 27.6805 7.99963C 27.9809 7.70213 28.1463 7.30603 28.1463 6.88557C 28.1463 6.46453 27.9809 6.069 27.6805 5.77093L 25.0749 3.1909C 24.4739 2.59647 23.4261 2.59533 22.824 3.1909L 22.008 3.99897C 21.0259 3.43967 19.9792 3.0107 18.8855 2.71887L 18.8855 1.57533C 18.8855 0.706633 18.1719 0 17.2946 0L 13.609 0C 12.7317 0 12.0181 0.706633 12.0181 1.57533L 12.0181 2.71887C 10.9244 3.0107 9.87771 3.43967 8.89509 3.99953L 8.07901 3.19147C 7.47753 2.59533 6.4291 2.59647 5.82819 3.19147L 3.22256 5.7715C 2.92211 6.069 2.75672 6.4651 2.75672 6.88613C 2.75672 7.3066 2.92211 7.70213 3.22256 8.0002L 4.03864 8.80827C 3.4738 9.77953 3.04 10.8165 2.74584 11.9L 1.59096 11.9C 0.713645 11.9 0 12.6066 0 13.4753L 0 17.1241C 0 17.9934 0.713645 18.7 1.59096 18.7L 2.74584 18.7C 3.04057 19.7829 3.4738 20.8193 4.03922 21.7923L 3.22313 22.6004C 2.92268 22.8979 2.75729 23.294 2.75729 23.7144C 2.75729 24.1355 2.92268 24.531 3.22313 24.8291L 5.82877 27.4091C 6.42967 28.0047 7.4781 28.0052 8.07958 27.4091L 8.89566 26.601C 9.87828 27.1603 10.925 27.5899 12.0186 27.8817L 12.0186 29.0252C 12.0186 29.8939 12.7323 30.6006 13.6096 30.6006L 17.2946 30.6006C 18.1719 30.6006 18.8855 29.8939 18.8855 29.0252L 18.8855 27.8817C 19.9792 27.5899 21.0259 27.1609 22.0085 26.601L 22.8246 27.4091C 23.4267 28.0052 24.4739 28.0041 25.0754 27.4091L 27.6811 24.8291C 27.9815 24.5316 28.1469 24.1355 28.1469 23.7144C 28.1469 23.294 27.9815 22.8984 27.6811 22.6004L 26.865 21.7923C 27.4298 20.8193 27.8636 19.7829 28.1583 18.7L 29.3132 18.7C 30.1905 18.7 30.9042 17.9934 30.9042 17.1247L 30.9042 13.4753C 30.9036 12.6066 30.19 11.9 29.3127 11.9ZM 29.759 17.1247C 29.759 17.3683 29.5587 17.5667 29.3127 17.5667L 27.257 17.5667L 27.154 18.0047C 26.8558 19.2723 26.3533 20.4754 25.6586 21.5809L 25.4182 21.9629L 26.8713 23.4016C 27.0458 23.5745 27.0458 23.855 26.8713 24.0272L 24.2656 26.6073C 24.0917 26.7795 23.8084 26.7807 23.6338 26.6073L 22.1808 25.1685L 21.7951 25.4065C 20.6791 26.0944 19.4641 26.5925 18.1833 26.8872L 17.741 26.9892L 17.741 29.0247C 17.741 29.2683 17.5407 29.4667 17.2946 29.4667L 13.609 29.4667C 13.363 29.4667 13.1627 29.2683 13.1627 29.0247L 13.1627 26.9892L 12.7203 26.8872C 11.4401 26.592 10.2251 26.0944 9.10855 25.4065L 8.72283 25.1685L 7.26979 26.6073C 7.09467 26.7807 6.81139 26.7795 6.63798 26.6073L 4.03235 24.0272C 3.8578 23.8544 3.8578 23.5739 4.03235 23.4016L 5.48539 21.9629L 5.24503 21.5809C 4.55027 20.4759 4.04723 19.2729 3.74964 18.0047L 3.64663 17.5667L 1.59096 17.5667C 1.34488 17.5667 1.14458 17.3683 1.14458 17.1247L 1.14458 13.4753C 1.14458 13.2317 1.34488 13.0333 1.59096 13.0333L 3.64663 13.0333L 3.74964 12.5953C 4.0478 11.3271 4.55027 10.1241 5.24503 9.01907L 5.48539 8.63713L 4.03235 7.19837C 3.8578 7.02553 3.8578 6.74503 4.03235 6.57277L 6.63798 3.99273C 6.81196 3.82047 7.09524 3.81933 7.26979 3.99273L 8.72283 5.4315L 9.10855 5.1935C 10.2245 4.50557 11.4395 4.00747 12.7203 3.7128L 13.1627 3.6108L 13.1627 1.57533C 13.1627 1.33167 13.363 1.13333 13.609 1.13333L 17.294 1.13333C 17.5407 1.13333 17.741 1.33167 17.741 1.57533L 17.741 3.6108L 18.1833 3.7128C 19.4636 4.00803 20.6785 4.50557 21.7951 5.1935L 22.1808 5.4315L 23.6338 3.99273C 23.8089 3.81933 24.0922 3.82047 24.2656 3.99273L 26.8713 6.57277C 27.0458 6.7456 27.0458 7.0261 26.8713 7.19837L 25.4182 8.63713L 25.6586 9.01907C 26.3533 10.1235 26.8564 11.3265 27.154 12.5953L 27.257 13.0333L 29.3127 13.0333C 29.5587 13.0333 29.759 13.2317 29.759 13.4753L 29.759 17.1247Z" />
          <path id="settings__path2_fill" d="M 5.72289 0C 2.56729 0 0 2.54207 0 5.66667C 0 8.79127 2.56729 11.3333 5.72289 11.3333C 8.87849 11.3333 11.4458 8.79127 11.4458 5.66667C 11.4458 2.54207 8.87849 0 5.72289 0ZM 5.72289 10.2C 3.19852 10.2 1.14458 8.16623 1.14458 5.66667C 1.14458 3.1671 3.19852 1.13333 5.72289 1.13333C 8.24726 1.13333 10.3012 3.1671 10.3012 5.66667C 10.3012 8.16623 8.24726 10.2 5.72289 10.2Z" />
        </defs>
      </svg>
    );
  }
}