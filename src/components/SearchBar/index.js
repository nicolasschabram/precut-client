import React from "react";
import "./styles.css";
import SearchIcon from "./components/SearchIcon";

export default class extends React.PureComponent {
  render() {
    return (
      <section role="search" class="search-bar">
        <form action="#" method="get">
          <fieldset className="search-bar__fieldset">
            <div className="search-bar__inner-wrapper">
              <legend className="search-bar__legend">search projects</legend>
              <label className="search-bar__label" for="search">search projects</label>
              <input className="search-bar__input"
                     type="search"
                     name="search"
                     id="search"
                     placeholder="search projects …"
                     maxlength="200" />
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
