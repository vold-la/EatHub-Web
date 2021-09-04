import React from "react";
import Navbar from "./Components/Navbar";
import BreadCrumb from "./Components/BreadCrumbs";
import RestroCards from "./Components/RestroCards";
import Footer from "./Components/Footer";

function ExploreAll() {
  return (
    <div>
      <div className="bg-light">
        <Navbar />
        <BreadCrumb />
              <RestroCards />
        <Footer />
      </div>
    </div>
  );
}

export default ExploreAll;
