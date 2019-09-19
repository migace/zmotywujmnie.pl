import React, { useState } from "react";
import { render } from "react-dom";
import classNames from "classnames";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { MainView } from "./views/Main";

import "bulma/css/bulma.css";
import "./styles.css";

const App = () => {
  const [isMobileMenuActive, setIsActiveMobileMenu] = useState(false);

  const mobileMenuButtonClasses = classNames("navbar-burger", "burger", {
    "is-active": isMobileMenuActive
  });

  const mobileMenuClasses = classNames("navbar-menu", {
    "is-active": isMobileMenuActive
  });

  return (
    <Router>
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img
              src="https://via.placeholder.com/224x56.png?text=Logo"
              width="112"
              height="28"
              alt="Logo"
            />
          </a>

          <a
            role="button"
            className={mobileMenuButtonClasses}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => setIsActiveMobileMenu(!isMobileMenuActive)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className={mobileMenuClasses}>
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/test" className="navbar-item">
              Test
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Route path="/" exact component={MainView} />
        </div>
      </div>
    </Router>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
