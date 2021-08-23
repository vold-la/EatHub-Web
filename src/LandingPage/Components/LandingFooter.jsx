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
                <p className="landingFooter-tag">Popular cuisines near me</p>
              </div>
              <div>
                <Link to={"/Bakery-food-near-me"} className="cuisines-Link">
                  Bakery food near me
                </Link>
                <span className="cuisines-bullet"></span>

                {[
                  " Beverages food near me",
                  "Biriyani food near me",
                  "Burger food near me",
                  "Chinese food near me",
                  "Continenal food near me",
                  "Desserts food near me",
                  "Healthy food near me",
                  "Ice Cream food near me",
                  "Italian food near me",
                  "Mithai food near me",
                  "Momos food near me",
                  "Mughlai food near me",
                  "North Indian food near me",
                  "Pizza food near me",
                  "Rolls food near me",
                  "Sandwich food near me",
                  "South Indian food near me",
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
                  Street Food food near me
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
