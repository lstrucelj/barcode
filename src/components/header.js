import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default ({ isHomePage }) => {
  return (
    <header
      id="header"
      className="header-effect-shrink"
      data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyChangeLogo': true, 'stickyStartAt': 120, 'stickyHeaderContainerHeight': 70}"
    >
      <div className="header-body border-top-0">
        <div className="header-container container bg-color-light">
          <div className="header-row">
            <div className="header-column header-column-logo">
              <div className="header-row">
                <div className="header-logo">
                  <a href="/">
                    <img
                      alt="Porto"
                      width="auto"
                      height="60"
                      src="/images/logo.webp"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="header-column header-column-nav-menu justify-content-end">
              <div className="header-row">
                <div className="header-nav header-nav-links order-2 order-lg-1">
                  <div className="header-nav-main header-nav-main-square header-nav-main-effect-1 header-nav-main-sub-effect-1">
                    <nav className="collapse">
                      <ul className="nav nav-pills" id="mainNav">
                        <li className="dropdown-secondary">
                          <a className="nav-link active" href="/">
                            Naslovna
                          </a>
                        </li>
                        <li className="dropdown-secondary">
                          {isHomePage ? (
                            <AnchorLink className="nav-link" to="#usluge">
                              Usluge
                            </AnchorLink>
                          ) : (
                            <a className="nav-link" href="/#usluge">
                              Usluge
                            </a>
                          )}
                        </li>
                        <li className="dropdown-secondary">
                          {isHomePage ? (
                            <AnchorLink className="nav-link" to="#o-nama">
                              O nama
                            </AnchorLink>
                          ) : (
                            <a className="nav-link" href="/#o-nama">
                              O nama
                            </a>
                          )}
                        </li>

                        <li className="dropdown-secondary">
                          {isHomePage ? (
                            <AnchorLink className="nav-link" to="#kontakt">
                              Kontakt
                            </AnchorLink>
                          ) : (
                            <a className="nav-link" href="/#kontakt">
                              Kontakt
                            </a>
                          )}
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <button
                    className="btn header-btn-collapse-nav"
                    data-bs-toggle="collapse"
                    data-bs-target=".header-nav-main nav"
                  >
                    <i className="fas fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
