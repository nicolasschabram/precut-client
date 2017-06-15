import React from "react";
import Filter from "./filter";

export default class extends React.PureComponent {
  render() {
    return (
      <svg className="menu__icon  menu__icon--boards" viewBox="-10 -10 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="Canvas" transform="translate(-23 -1332)">
          <g id="Vector">
            <use xlinkHref="#boards__path0_fill" transform="matrix(-4.37114e-08 1 -1 -4.37114e-08 51 1332)" fill="#fff" />
          </g>
        </g>
        <Filter hash="boards" />
        <defs>
          <path id="boards__path0_fill" d="M 27.9891 11.2488C 27.9531 11.075 27.832 10.9303 27.6671 10.8648C 23.1337 9.06053 19.1158 10.5136 17.9589 11.0169L 10.0919 4.33121C 10.3668 1.91849 9.064 0.268454 9.00584 0.196621C 8.9112 0.0798936 8.77214 0.00858932 8.62251 0.000138442C 8.4734 -0.00303064 8.32589 0.0482028 8.22014 0.154367L 0.154799 8.21122C 0.047994 8.31738 -0.00805201 8.46422 0.000936502 8.61528C 0.00939628 8.76528 0.0818331 8.90525 0.199741 8.99874C 1.66698 10.1618 3.55669 10.1433 4.28476 10.0841L 11.0108 17.982C 10.5519 19.1599 9.14966 23.4064 10.8485 27.6672C 10.9141 27.8326 11.0584 27.953 11.2329 27.9889C 11.2683 27.9963 11.3043 28 11.3397 28C 11.4787 28 11.6136 27.9451 11.7135 27.8452L 19.4172 20.1497L 26.5921 27.3171C 26.6952 27.4201 26.8306 27.4718 26.966 27.4718C 27.1013 27.4718 27.2367 27.4201 27.3398 27.3171C 27.5465 27.1105 27.5465 26.7767 27.3398 26.5702L 20.1648 19.4028L 27.8458 11.7294C 27.9711 11.6037 28.025 11.4231 27.9891 11.2488ZM 18.6574 19.4134L 11.5596 26.5042C 10.2711 22.2761 12.0847 18.1447 12.1042 18.1014C 12.1878 17.9149 12.1571 17.6973 12.0249 17.542L 4.90814 9.18518C 4.80715 9.06634 4.65805 8.99926 4.50418 8.99926C 4.47722 8.99926 4.44972 9.00138 4.42276 9.00613C 4.40372 9.0093 2.74508 9.25543 1.35926 8.50172L 8.4972 1.37129C 8.81656 1.98187 9.23267 3.09316 9.0069 4.46009C 8.97623 4.64284 9.04444 4.82823 9.18561 4.94813L 17.5317 12.0416C 17.6951 12.18 17.9272 12.2048 18.116 12.1092C 18.1567 12.0881 22.017 10.1576 26.5065 11.572L 18.6574 19.4134Z" />
        </defs>
      </svg>
    );
  }
}
