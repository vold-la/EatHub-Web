import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Wrapper } from "../Style/MainFooterStyle";

function MainFooter() {
    const match = useRouteMatch();
  return (
    <>
      <Wrapper>
        <footer className="main-footer bg-light">
          <section className="logo-section d-flex container bd-highlight mb-3">
            <img
              className="footer-logo mr-auto bd-highlight mb-3"
              src="/tomato_black_final_logo.png"
              alt="logo"
            />
                  </section>



          <div className="d-flex flex-wrap justify-content-between container mt-3">
            <div className="footer-div">
              <h6
                className="footer-heading"
                style={{
                  fontWeight: "400",
                  letterSpacing: "0.2rem",
                }}
              >
                COMPANY
              </h6>
              <nav className="footer-name">
                              
                              {["top"].map((placement) => (
                                  <OverlayTrigger
                                      trigger={["hover", "focus"]}
                                      key={placement}
                                      placement={placement}
                                      className="bd-highlight m-2"
                                      overlay={
                                          <Popover style={{ height: "150px", width: "500px" }}>
                                              <Popover.Content>
                                                  <p> On a way to make things at production level .</p>
                                              </Popover.Content>
                                          </Popover>
                                      }
                                  >
                                     <div> Who We Are</div>
                                  </OverlayTrigger>
                              ))}

                              {["top"].map((placement) => (
                                  <OverlayTrigger
                                      trigger={["hover", "focus"]}
                                      key={placement}
                                      placement={placement}
                                      className="bd-highlight m-2"
                                      overlay={
                                          <Popover style={{ height: "150px", width: "500px" }}>
                                              <Popover.Content>
                                                  <p> Blog Coming Soon explaining different pieces of this project :) </p>
                                              </Popover.Content>
                                          </Popover>
                                      }
                                  >
                                      <div> Blog</div>
                                  </OverlayTrigger>
                              ))}
              </nav>
            </div>
            <div className="footer-div">
              <h6
                className="footer-heading"
                style={{ fontWeight: "400", letterSpacing: "0.2rem" }}
              >
                FOR RESTAURANTS
              </h6>
              <nav className="footer-name">
                              <Link to={{ pathname: `${match.url}/addrestaurant` }}>
                  <p className="footer-Link">Add Restaurant</p>
                </Link>
                <Link to={"/Claim-Your-Listing"}>
                  <p className="footer-Link">Claim Your Listing</p>
                </Link>
                <Link to={"/Bussiness-App"}>
                  <p className="footer-Link">Bussiness App</p>
                </Link>
              </nav>
            </div>
            <div className="footer-div">
              <h6
                className="footer-heading"
                style={{ fontWeight: "400", letterSpacing: "0.2rem" }}
              >
                FOR YOU
              </h6>
              <nav className="footer-name">
                <Link to={"/Privacy"}>
                  <p className="footer-Link">Privacy</p>
                </Link>
                <Link to={"/Terms"}>
                  <p className="footer-Link">Terms</p>
                </Link>
                <Link to={"/Security"}>
                  <p className="footer-Link">Security</p>
                </Link>
              </nav>
            </div>
            <div className="footer-div">
              <h6
                className="footer-heading"
                style={{ fontWeight: "400", letterSpacing: "0.2rem" }}
              >
                SOCIAL LINKS
              </h6>
              <div className="social-links d-flex justify-content-start">
                <Link to={"/facebook"} className="icon-tag">
                  <div className="social-icons">
                    <FacebookIcon className="icon" />
                  </div>
                </Link>
                <Link to={"/twitter"} className="icon-tag">
                  <div className="social-icons">
                    <TwitterIcon className="icon" />
                  </div>
                </Link>
                <Link to={"/instagram"} className="icon-tag">
                  <div className="social-icons">
                    <InstagramIcon className="icon" />
                  </div>
                </Link>
              </div>
              <br />

              <div>
                <img
                  src="https://www.kindpng.com/picc/m/114-1144091_download-google-play-png-apple-app-store-icon.png"
                  className="app-store"
                  alt="app-store"
                />
              </div>
              <div>
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  className="app-store"
                  alt="google-play"
                />
              </div>
            </div>
          </div>
          <hr className="container" />
          <p className="policy container" style={{ marginBottom: "0px" }}>
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies.
          </p>
        </footer>
      </Wrapper>
    </>
  );
}

export default MainFooter;
