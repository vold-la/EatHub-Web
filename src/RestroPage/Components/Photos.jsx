import React from "react";
import { Link } from "react-router-dom";
import MainFooter from "../../LandingPage/Components/MainFooter";
import { Wrapper } from "../Style/PhotosStyle";

function Photos(props) {
    const { data } = props;
  return (
    <>
      <Wrapper>
        <div className="container">
          <h4 style={{ fontWeight: "400" }}>Fake Rest.</h4>
        </div>
        <div className="blog-div container mb-3">
          <section className="blog-sec">
            <button className="rev-btn">
              <span className="add-rev">
              <span className="rev-text">All({ data.length})</span>
              </span>
            </button>
            <div className="btn">
              <span className="add">
                <span style={{ color: "rgb(28, 28, 28)" }}>Food</span>
              </span>
            </div>
            <div className="btn">
              <span className="add">
                <span style={{ color: "rgb(28, 28, 28)" }}>Ambience</span>
              </span>
            </div>
          </section>
        </div>

        <div className="container ">
          <div className="d-flex">

                      {data &&
                          data.map((image, i) => (
                              <img
                                  key={ i+1}
                                  alt="menu-item"
                                  src={ image}
                                  loading="lazy"
                                  className="img-item"
                               />
                          ))
                      }

          </div>
        </div>

        <div className="container">
          <hr />
        </div>
        <div className="container">
          <div className="loc-near">
            <h6 className="loc-near-heading">RESTAURANTS AROUND </h6>
            <div className="loc-near-names">
              <Link className="loc-near-link">ML Part </Link>
              <Link className="loc-near-link">
                Coming Soon
              </Link>
            </div>
          </div>
        </div>

        <MainFooter />
      </Wrapper>
    </>
  );
}

export default Photos;
