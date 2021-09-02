import React from "react";
import { Link } from "react-router-dom";
import MainFooter from "./MainFooter";
import { Wrapper } from "../Style/LandingFooterStyle";

function LandingFooter() {
  return (
    <>
      <Wrapper>
        <div className="bg-color">
          <div className="container">
            <div>
              <div>
                <p className="landingFooter-tag">Popular cuisines near me (Fake Data , Coming Soon)</p>
              </div>
              <div>
                <Link to={"/Bakery-food-near-me"} className="cuisines-Link">
                  Biryani food near me
                </Link>
                <span className="cuisines-bullet"></span>

                {[
                  "Burger food near me",
                  "Chinese food near me",
                  "Healthy food near me",
                  "Mughlai food near me",
                  "North Indian food near me",
                  "Pizza food near me",
                  "Rolls food near me",
                  "Sandwich food near me",
                ].map((item) => (
                  <Link to={`/${item}`} key={item} className="cuisines-Link">
                    {item}
                    <span className="cuisines-bullet"></span>
                  </Link>
                ))}

                <Link
                  to={`/Street-Food-food-near-me`}
                  className="cuisines-Link"
                >
                    South Indian food near me
                </Link>
              </div>
            </div>
          </div>
        </div>
        <MainFooter />
      </Wrapper>
    </>
  );
}

export default LandingFooter;
