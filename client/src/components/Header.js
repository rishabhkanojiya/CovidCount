import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper  deep-purple darken-1">
            <a
              href="/"
              className="brand-logo center "
              style={{ padding: "0 10px" }}
            >
              CovidCount
            </a>
            <ul id="nav-mobile" className="right ">
              <li>
                <a
                  href="https://github.com/rishabhkanojiya?tab=repositories"
                  target="_blank"
                >
                  <i className="material-icons left">code</i>Github
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
