import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
const config = require("../../data/SiteConfig");

export default ({ isHomePage }) => {
  return (
    <header
      id="header"
      className="header-effect-shrink"
      data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyChangeLogo': true, 'stickyStartAt': 120, 'stickyHeaderContainerHeight': 90}"
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
                      height="80"
                      src="/images/logo.webp"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              id="header-column-menu-mobile"
              className="header-column header-column-nav-menu justify-content-end"
              style={{
                flexGrow: 10,
              }}
            >
              <ul class="nav nav-pills justify-content-between w-100 h-100">
                <li class="nav-item py-2 d-flex flex-column align-self-center">
                  <span class="header-top-phone pb-2 d-flex align-items-center text-color-secondary font-weight-semibold text-uppercase">
                    <span
                      style={{
                        backgroundColor: "#eef0f4",
                        width: "30px",
                        height: "30px",
                        display: "flex",
                        borderRadius: "50%",
                        alignContent: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "4px",
                      }}
                    >
                      <img
                        width="15"
                        height="18"
                        src="/images/phone.svg"
                        alt="Phone"
                      />
                    </span>
                    <a
                      class="text-color-secondary text-color-hover-primary text-decoration-none"
                      href={`tel:${config.userMobileNumber}`}
                    >
                      {config.userMobileNumber}
                    </a>
                  </span>
                  <span class="header-top-email px-0 font-weight-normal align-items-center d-flex">
                    <span
                      style={{
                        backgroundColor: "#eef0f4",
                        width: "30px",
                        height: "30px",
                        display: "flex",
                        borderRadius: "50%",
                        alignContent: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "6px",
                      }}
                    >
                      <img
                        width="25"
                        height="18"
                        src="/images/mail.svg"
                        alt="Mail"
                      />
                    </span>
                    <a
                      class="text-color-secondary text-color-hover-primary text-decoration-none"
                      href={`mailto:${config.userMail}`}
                      style={{ textTransform: "lowercase" }}
                    >
                      {config.userMail}
                    </a>
                  </span>
                </li>
              </ul>
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
