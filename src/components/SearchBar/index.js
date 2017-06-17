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
              <legend className="search-bar__legend">search projects</legend>
              <label className="search-bar__label" htmlFor="search">search projects</label>
              <input className="search-bar__input"
                     type="search"
                     name="search"
                     id="search"
                     placeholder="search projects …"
                     maxLength="200"
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
