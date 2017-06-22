import React from "react";
import Filter from "components/Menu/components/Filter";
import classNames from "classnames";

export default class TagsIcon extends React.PureComponent {
  render() {
    const svgClass = classNames(
      "menu__icon",
      "menu__icon--" + this.props.hash, {
        "menu__icon--active": this.props.isActive
      }
    );

    return (
      <svg className={svgClass} viewBox="-10 -10 49 49" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="Canvas" transform="translate(-21 -1244)">
          <g id="Vector">
            <use xlinkHref="#tags__path0_fill" transform="translate(21 1244)" fill="#fff"/>
          </g>
        </g>
        {this.props.isActive ? <Filter /> : null}
        <defs>
          <path id="tags__path0_fill" d="M 29 5.70038L 23.2863 0L 16.0874 0L 13.2503 2.82783C 6.19593 2.23923 0.507888 6.20775 0.428209 6.26481C 0.197398 6.42931 0.143422 6.75059 0.308948 6.98192C 0.409189 7.12174 0.567005 7.1968 0.72739 7.1968C 0.830716 7.1968 0.935069 7.16544 1.02554 7.10067C 1.097 7.04977 6.01806 3.61742 12.2736 3.80094L 3.08383 12.9609L 3.08794 12.965L 0 16.0453L 12.9265 29L 18.0876 23.8528C 19.1476 24.4079 20.3808 24.6809 21.6007 24.6804C 23.4004 24.6804 25.1656 24.0954 26.2791 22.9819C 30.0662 19.1944 28.5631 15.0398 28.049 13.9176L 28.9995 12.9691L 28.9995 5.70038L 29 5.70038ZM 22.8616 1.02811L 27.9719 6.12704L 27.9719 12.5425L 17.9282 22.5532C 15.8288 21.0481 15.1899 18.2238 16.1326 14.5206C 16.2031 14.2455 16.0365 13.9654 15.7615 13.8955C 15.4854 13.822 15.2068 13.9916 15.1364 14.2666C 13.8055 19.493 15.5939 22.0705 17.1921 23.2868L 16.0134 24.4619L 4.54221 12.9666L 13.6307 3.90169C 15.7887 4.14844 18.0676 4.86092 20.3371 6.30079C 20.3171 6.4144 20.3022 6.53006 20.3022 6.64932C 20.3022 7.76483 21.2095 8.67214 22.325 8.67214C 23.4405 8.67214 24.3483 7.76483 24.3483 6.64932C 24.3483 5.53382 23.4405 4.62651 22.325 4.62651C 21.6999 4.62651 21.1473 4.91747 20.7761 5.3647C 18.6741 4.05025 16.5675 3.31772 14.5468 2.98873L 16.512 1.02811L 22.8616 1.02811ZM 21.4948 7.09398C 21.722 7.26465 22.0443 7.2189 22.2139 6.99117C 22.3846 6.76447 22.3383 6.44216 22.1111 6.27201C 21.9523 6.15326 21.7929 6.04839 21.6341 5.93684C 21.8135 5.76258 22.0566 5.65462 22.325 5.65462C 22.8735 5.65462 23.3202 6.10083 23.3202 6.64984C 23.3202 7.19782 22.874 7.64454 22.325 7.64454C 21.9122 7.64454 21.558 7.39162 21.4074 7.03281C 21.4367 7.05389 21.466 7.07188 21.4948 7.09398ZM 1.45375 16.0473L 3.8143 13.6929L 15.2891 25.1924L 12.9285 27.5468L 1.45375 16.0473ZM 25.5522 22.2551C 24.228 23.5782 21.2496 24.1817 18.8541 23.0883L 27.2717 14.6928C 27.7832 15.9656 28.6109 19.1959 25.5522 22.2551Z" />
        </defs>
      </svg>
    );
  }
}
