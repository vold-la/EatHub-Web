import React from "react";
import { Link } from "react-router-dom";
import AssistantIcon from "@material-ui/icons/Star";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import { Wrapper } from "../Style/Review";
import MainFooter from "../../LandingPage/Components/MainFooter";

function Review(props) {
    const { data } = props;
  return (
    <>
      <Wrapper>
        {/* reviews */}

              
        <div className="container">
                  <h4 className="mb-3" style={{ fontWeight: "400" }}>
                      Reviews
            </h4>
                  <p style={{ color: "rgb(130, 130, 130)" }}>
                      View All Reviews
              <ArrowDropDown />
                  </p>
                  {data &&
                   data.map((item, i) => (
                         // item.review.map((rev, in) => (
                          item.review.length>0 &&
                          <div className="container" key={ i+1}>
           
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                <div>
                  <img
                      style={{ height: "50px", width: "50", borderRadius: "50%" }}
                      src={ item.img}
                      alt=""
                  />
                </div>
                <div className="d-flex flex-column ml-3">
                                          <h5 style={{ fontWeight: "400" }}>{item.name }</h5>
                </div>
              </div>
                                <div className="follow-div">
                <button type="button" class="btn btn-outline"  style={{color : '#cae6d5' }}>
                  Follow
                </button>
              </div>
                            </div>
                            <div className="d-flex">
              <AssistantIcon style={{ color: "rgb(0,0,0)" }} />
              <AssistantIcon style={{ color: "rgb(0,0,0)" }} />
              <AssistantIcon style={{ color: "rgb(0,0,0)" }} />
              <AssistantIcon style={{ color: "rgb(0,0,0)" }} />
              <AssistantIcon style={{ color: "rgb(0,0,0)" }} />
              <h5>item.rating</h5>
              <div>
                <p className="ml-2">8 days ago</p>
              </div>
            </div>
                            <div style={{ color: "rgb(0,231,0)" }}>
              <ThumbUpAltIcon />
              POSITIVE
            </div>
                            <div>
              <span className="badge badge-light rounded-pill">
                Worth The Money
              </span>
            </div>
                            <div className="p-2">
                                  <p>
                                      { item.review}
              </p>
              <div>
                <img
                                          src={item.reviewPic && item.reviewPic}
                                          alt="food-img"
                  style={{
                    height: "148px",
                    width: "235px",
                    borderRadius: "20px",
                  }}
                />
              </div>
            </div>
                          </div>    
                  ))
                  }
        </div>
        <div className="container">
          <hr />
        </div>
        <div className="container">
          <div className="loc-near">
            <h6 className="loc-near-heading">RESTAURANTS AROUND</h6>
            <div className="loc-near-names">
              <Link className="loc-near-link">ML Part , </Link>
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

export default Review;
