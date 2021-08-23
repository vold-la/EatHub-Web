import React from "react";
import { useLocation, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Explore from "./Components/Explore";
import LandingFooter from "./Components/LandingFooter";
import PopularLocalities from "./Components/PopularLocalities";
import styled from "styled-components";
import Navigation from "./Components/Navigation";
import MobileApp from "./Components/MobileApp";


function LandingPage() {
  const location = useLocation();
  const searchCity = useSelector(
    (state) => state.landingPageReducer.searchCity
    );
    //console.log("entered")

  if (location.pathname !== `/${searchCity.toLowerCase()}`) {
    //  console.log("redirecting")
      return <Redirect to="/" />;
  }
  return (
    <div>
      <Navigation />
      <Explore />
      <PopularLocalities />
      <MobileApp />
      <LandingFooter />
    </div>
  );
}

export default LandingPage;
