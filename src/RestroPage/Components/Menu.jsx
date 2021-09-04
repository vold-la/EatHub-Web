import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../Style/MenuStyle";
import MainFooter from "../../LandingPage/Components/MainFooter";


function Menu() {
  return (
    <>
      <Wrapper>
        <div className="container">
          <h4 style={{ fontWeight: "400" }}>Restaurant</h4>
          <div className="rounded">
            <img
              src="https://b.zmtcdn.com/data/menus/059/5059/4926f7227933414fcce3847cc08c79ac.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
              alt="Menu"
            />
            <h5>Food Menu</h5>
            <p>3 Pages</p>
          </div>
        </div>

        <div className="container">
          <hr />
        </div>
        <div className="container">
          <div className="loc-near">
            <h6 className="loc-near-heading">RESTAURANTS AROUND</h6>
            <div className="loc-near-names">
              <Link className="loc-near-link">A Restaurants, </Link>
              <Link className="loc-near-link">B Restaurants, </Link>
              <Link className="loc-near-link">Z Restaurants , </Link>
              <Link className="loc-near-link">
                Adding Real Data Soon
              </Link>
            </div>
          </div>
        </div>
        <MainFooter />
      </Wrapper>
    </>
  );
}

export default Menu;
