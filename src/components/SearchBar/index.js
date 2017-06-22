import React from "react";
import "./styles.css";
import SearchIcon from "./components/SearchIcon";

export default class SearchBar extends React.PureComponent {
  render() {
    return (
      <section role="search" className="search-bar">
        <form action="#" method="get">
          <fieldset className="search-bar__fieldset">
            <div className="search-bar__inner-wrapper">
              <legend className="search-bar__legend">
                search {this.props.itemType[1].toLowerCase()}
              </legend>
              <label className="search-bar__label" htmlFor="search">
                search {this.props.itemType[1].toLowerCase()}
              </label>
              <input className="search-bar__input"
                     type="search"
                     name="search"
                     id="search"
                     maxLength="200"
                     placeholder={"search " +
                                  this.props.itemType[1].toLowerCase() +
                                  " …"}
              />
              <div className="search-bar__button-wrapper">
                <button className="search-bar__button"
                      type="submit"
                      title="Search">
                  <SearchIcon />
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    );
  }
};
