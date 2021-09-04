import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserLocation } from "../../LandingPage/Redux/action";
import { Link } from "react-router-dom";
import ArrowRightIcons from "@material-ui/icons/ArrowRight";
import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";
import AssistantIcon from "@material-ui/icons/Star";
import ArrowRight from "@material-ui/icons/ArrowRight";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { Wrapper } from "../Style/OverviewStyle";
import MainFooter from "../../LandingPage/Components/MainFooter";
import { Card, CardContent } from "@material-ui/core";
import DirectionsIcon from "@material-ui/icons/Directions";

function Overview(props) {
  const { data } = props;
  const [restaurantLocation, setRestaurantLocation] = useState({});
  const userCoordinates = useSelector(
    (state) => state.landingPageReducer.userCoordinates
  );
  useEffect(() => {
    if (data.location) {
      setRestaurantLocation(data.location.cords.coordinates);
    }
  }, [data.location]);

  const dispatch = useDispatch();

  const getUserCoordinates = () => {
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      dispatch(getUserLocation(longitude, latitude));
      window.open(
        `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${
          data && data.location && data.location.cords.coordinates[1]
        },${data && data.location && data.location.cords.coordinates[0]}`
      );
    }

    function error() {
      console.log("Unable to retrieve your location");
      window.open(
        `https://www.google.com/maps/dir/${
          data && data.location && data.location.cords.coordinates[1]
        },${data && data.location && data.location.cords.coordinates[0]}`
      );
    }

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
    } else {
      return navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  const goToLocation = () => {
    if (userCoordinates.latitude === undefined) {
      getUserCoordinates();
    } else {
      window.open(
        `https://www.google.com/maps/dir/?api=1&origin=${
          userCoordinates.latitude
        },${userCoordinates.longitude}&destination=${
          data && data.location && data.location.cords.coordinates[1]
        },${data && data.location && data.location.cords.coordinates[0]}`
      );
    }
  };

  return (
    <>
      <Wrapper>
        <div className="overviewWrapper">
          <div
            style={{
              width: "70%",
            }}
          >
            <div className="container p-3 mt-3">
              <h4 className="font-weight">Menu</h4>
              <div>
                <div className="card" style={{ width: "14rem" }}>
                  <img
                    src="https://b.zmtcdn.com/data/menus/059/5059/4926f7227933414fcce3847cc08c79ac.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
                    className="card-img-top"
                    alt="menu"
                  />
                </div>
              </div>
            </div>
            <div className="container">
              <h4 className="font-weight">Food Menu</h4>
              <span
                style={{
                  color: "rgb(156, 156, 156)",
                  marginTop: "0px",
                  fontSize: "15px",
                }}
              >
                2 pages
              </span>
            </div>
            <div className="container">
              <h4 className="font-weight mt-4">Cuisines</h4>
              <div className="d-flex mt-0 flex-wrap">
                {data.cuisines &&
                  data.cuisines
                    .map((cuisine, i) => (
                      <p className="cuisines" key={cuisine + i}>
                        {cuisine}
                      </p>
                    ))}
              </div>
            </div>
            <div className="container">
              <h5 className="dish-heading">Popular Dishes</h5>
              <p className="pop-dish">
                {data.menu &&
                  data.menu.map(
                    (dish, i) =>
                      i < 5 && (
                        <React.Fragment key={dish + i}>
                          {" "}
                          {dish.dish}
                        </React.Fragment>
                      )
                  )}
              </p>
            </div>
            <div className="container">
              <h5 className="avg-cost">Average Cost</h5>
              <p className="cost">
                ₹{data && data.average_cost_for_two} for two people (approx.)
              </p>
              <p className="desc">
                Exclusive of applicable taxes and charges, if any
              </p>
              <div className="calc-div">
                <p className="calc">How do we calculate cost for two?</p>
              </div>
              <p className="payment">Cash and Card accepted</p>
            </div>
            <div className="container">
              <h5 className="info">More Info</h5>
              <div className="info-div">
                {data &&
                  data.highlights?.map(
                    (item, i) =>
                      i < 7 && (
                        <div className="info-name" key={i}>
                          <CheckCircleOutline className="info-icons" />
                          <p className="info-text">{item}</p>
                        </div>
                      )
                  )}
              </div>
            </div>
            <div className="container">
              <h5 className="exp-div">Tap to rate Your experience</h5>
              <div className="d-flex">
                <StarBorderIcon className="exp-icons" />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
              </div>
              <p className="review-note">Write a Review</p>
            </div>
            <div className="container">
              <h4 className="highlights">Review Highlights</h4>
              <span className="highlight-div">ML Part</span>
              <span className="highlight-div">Feature</span>
              <span className="highlight-div">Coming</span>
              <span className="highlight-div">Soon</span>
            </div>
            <div className="container">
              <hr />
            </div>

            <div className="container">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <div>
                    <img
                      style={{
                        height: "50px",
                        width: "50",
                        borderRadius: "50%",
                      }}
                                          src="https://img.icons8.com/color/48/000000/matcha.png"
                                          alt=""
                    />
                  </div>
                </div>
                <div className="follow-div">
                  <button type="button" className="btn" style={{color : 'rgb(120,200,120)' }}>
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
                <h5>5.0</h5>
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
                  Very Good restaurant and serve piping food
                </p>
                <div>
                  <img
                    src="https://b.zmtcdn.com/data/reviews_photos/0d6/76092d9a40f469fe6da05e33ea8db0d6_1578139832.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
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

            <div className="container">
              <hr />
            </div>
            <div className="container">
              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <div>
                    <img
                      style={{
                        height: "50px",
                        width: "50",
                        borderRadius: "50%",
                      }}
                                          src="https://img.icons8.com/color/48/000000/matcha.png"
                                          alt=""
                    />
                  </div>
                </div>
                <div className="follow-div">
                  <button type="button" style={{color : 'rgb(120,200,120)' }}>
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
                <h5>5.0</h5>
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
                Very Good restaurant and serve piping food.
              </p>
                <div>
                  <img
                    src="https://b.zmtcdn.com/data/reviews_photos/798/e88230d81eefdb8f57e2df1038a81798_1564074695.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
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

            <div className="container">
              <hr />
            </div>
            <div className="container">
              <button className="report-btn">
                <span className="report-text">
                  View All Reviews <ArrowRight className="report-icons" />
                </span>
              </button>
            </div>
            <div className="container">
              <h5 className="sponser">OUR SPONSORS</h5>
              <div className="d-flex">
                <img
                  src="https://b.zmtcdn.com/data/pictures/chains/6/566/64194d9143b9cfeeb104689b0aefa41b_featured_v2.jpg?output-format=webp"
                  alt="card1"
                  className="sponser-img"
                />

                <img
                  src="https://b.zmtcdn.com/data/pictures/1/18662571/2d2ee80ec8490f634f10787f2c11f68c_featured_v2.jpg?output-format=webp"
                  alt="card2"
                  className="sponser-img"
                />
              </div>
              <div className="d-flex">
                <div>
                  <h4 className="sponser-text">DUMMY REST1</h4>
                  <div className="votes">
                    <div className="votes-count">
                      <AssistantIcon className="votes-icons1" />
                      <p className="votes-rating">4.2</p>
                      <p className="votes-number">(1,128)</p>
                      <div className="hr"></div>
                    </div>
                    <div className="votes-count">
                      <AssistantIcon className="votes-icons2" />
                      <p className="votes-rating">4.2</p>
                      <p className="votes-number">(1,128)</p>
                      <div className="hr"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="sponser-text sponser-margin">REAL COMING SOON</h4>
                  <div className="votes ">
                    <div className="votes-count sponser-margin">
                      <AssistantIcon className="votes-icons2" />
                      <p className="votes-rating">4.0</p>
                      <p className="votes-number">(128)</p>
                      <div className="hr"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex">
                <p style={{ fontSize: "13px", fontWeight: "200" }}>
                  Chinese, Thai, Continental,North Indian
                </p>
                <p
                  style={{
                    marginLeft: "130px",
                    fontSize: "13px",
                    fontWeight: "200",
                  }}
                >
                  Fast Food
                </p>
              </div>
            </div>
            
            <div className="help-sec container">
              <div className="help-text">HELP US MAKE EATHUB BETTER</div>
              <h4 className="error-text">Report an error or contribute on github</h4>
              <div className="help-desc">
                Help us make EatHub more updated and relevant for everyone
              </div>

              <button className="report-btn">
                <span className="report-text">
                  Report now <ArrowRight className="report-icons" />
                </span>
              </button>
            </div>
            <div className="container">
              <hr />
            </div>
          </div>
          <div className="restaurantMapDiv">
            <Card className="restaurantMap">
              <CardContent>
                <div className="mt-2 mb-2">
                  <div style={{ fontSize: "20px" }}>Call</div>
                  <div style={{ color: "grey", fontSize: "15px" }}>
                    {data.phone_numbers}
                  </div>
                </div>
                <div style={{ fontSize: "20px"}}>Direction</div>
                <img
                  src={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s-l+000(${restaurantLocation[0]},${restaurantLocation[1]})/${restaurantLocation[0]},${restaurantLocation[1]},14/500x300?access_token=pk.eyJ1IjoibWFuaXNoLWt1bWFyLWRldiIsImEiOiJja2gyOGw4b24wOWhwMnNtemVmeHA2djV0In0.IWI4BNamZ8XXAawc2fuk8w`}
                  alt="Restaurant Location"
                  style={{ width: "100%" }}
                />
                <div style={{ margin: "5px 0px" }}>
                  {data && data.location && data.location.address}
                </div>
                <div className="btn">
                  <span className="add" onClick={goToLocation}>
                    <DirectionsIcon style={{color : 'rgb(120,200,120)' }}/>
                    <span style={{ color: "rgb(120,200,120)" }}>Direction</span>
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <MainFooter />
      </Wrapper>
    </>
  );
}

export default Overview;
