import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Modal from "@material-ui/core/Modal";
import { Wrapper } from "../Style/ProfileBodyStyle";
import Axios from "axios";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 600,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: 250,
    minWidth: 250,
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function ProfileBody() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [userBackendDetails, setUserBackendDetails] = useState([]);
  const activeUserDetails = JSON.parse(localStorage.getItem("activeUser"));
  const [orderDetails, setOrderDetails] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getActiveUserDetails = () => {
    Axios({
      method: "get",
        url: `${process.env.REACT_APP_BACKEND_URL}/api/users/findById/${activeUserDetails.id}`,
    })
      .then((response) => setUserBackendDetails(response.data.user))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (activeUserDetails.active !== false) {
      getActiveUserDetails();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = (orderId) => {
    let orderDetailsWithId = userBackendDetails.orders.filter(
      (item) => item.orderId === orderId
    );
    setOrderDetails(orderDetailsWithId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getTotalAmount = (item) => {
    if (item !== false) {
      let totalValue = item.totalOrder.reduce((a, c) => {
        let itemCost1 = c.cost === undefined ? 0 : Number(c.cost);
        return a + itemCost1;
      }, 0);
      return totalValue;
    }
  };

  const getTransactionDate = (timeStamp) => {
    if (timeStamp !== false) {
      let transactionTimestamp = timeStamp.split("T");
      let date = new Date(`${transactionTimestamp[0]}`).toLocaleDateString();
      let time = new Date(`${timeStamp}`).toLocaleTimeString();
      return `${date} at ${time}`;
    }
  };

  return (
    <>
      <Wrapper>
        <div className="container mt-5">
          <p className="ml-5">ACTIVITY</p>
          <div className={classes.root}>
            <Tabs
              orientation="vertical"
              TabIndicatorProps={{ style: { backgroundColor: "rgb(120,200,120)" } }}
              variant="scrollable"
              value={value}
              onChange={handleChange}
              className={classes.tabs}
            >
              <Tab label="Photo" {...a11yProps(0)} />
              <Tab label="Bookmarks" {...a11yProps(1)} />
              <Tab label="Reviews" {...a11yProps(2)} />
              <Tab label="Order History" {...a11yProps(3)} />
              <Tab label="My addresses" {...a11yProps(4)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <h3>Photos</h3>
              <img
                src="https://b.zmtcdn.com/webFrontend/1a33af2333871e0c1222a3ee21ea697f1581070577.png"
                alt="dine"
                style={{
                  height: "150px",
                  display: "block",
                  marginLeft: "300px",
                  marginRight: "300px",
                  marginTop: "90px",
                }}
              />
              <p
                style={{
                  marginLeft: "300px",
                  marginRight: "300px",
                  fontSize: "22px",
                }}
              >
                Nothing here yet (Image From Zomato)
              </p>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <h3>Bookmarks</h3>

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbLNIqX--pZPiXZVl3WXp7W9AlM2ETiYrclA&usqp=CAU"
                alt="dine"
                style={{
                  height: "150px",
                  display: "block",
                  marginLeft: "200px",
                  marginRight: "200px",
                  marginTop: "90px",
                }}
              />
              <p
                style={{
                  marginLeft: "300px",
                  marginRight: "300px",
                }}
              >
                No Bookmarks yet (Image From Zomato)
              </p>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <h3>Reviews</h3>

              <img
                src="https://b.zmtcdn.com/webFrontend/691ad4ad27a5804a3033977d45390c811584432410.png"
                alt="dine"
                style={{
                  height: "150px",
                  display: "block",
                  marginLeft: "300px",
                  marginRight: "300px",
                  marginTop: "90px",
                }}
              />
              <p
                style={{
                  marginLeft: "300px",
                  marginRight: "300px",
                }}
              >
                Nothing here yet ((Image From Zomato))
              </p>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <h3 style={{ paddingLeft: "15px" }}>Order History</h3>
              <div className="d-flex flex-wrap">
                {userBackendDetails.orders &&
                  userBackendDetails.orders.map((item) => {
                    return (
                      <div className="col-6 my-2" key={item.orderId}>
                        <div
                          className="card rounded"
                          style={{ width: "22rem" }}
                        >
                          <ul className="list-group list-group-flush">
                            <li
                              className="list-group-item"
                              style={{ padding: "4px" }}
                            >
                              <div className="d-flex bd-highlight">
                                <div className="p-1 bd-highlight ml-0">
                                  <img
                                    src={item.restaurantDetails.restaurantImage}
                                    alt="card1"
                                    style={{
                                      height: "60px",
                                      width: "60px",
                                      borderRadius: "10px",
                                    }}
                                  />
                                </div>
                                <div className="p-2 bd-highlight">
                                  <div>
                                    <div
                                      style={{
                                        overflow: "hidden",
                                        whiteSpace: "nowrap",
                                        textOverflow: "ellipsis",
                                        width: "160px",
                                      }}
                                    >
                                      {item.restaurantDetails.restaurantName}
                                    </div>
                                    <div
                                      className="text-muted"
                                      style={{ fontSize: "12px" }}
                                    >
                                      {
                                        item.restaurantDetails
                                          .restaurantLocation
                                      }
                                    </div>
                                  </div>
                                </div>
                                <div className="ml-auto p-2 bd-highlight">
                                  Delivered
                                </div>
                              </div>
                            </li>
                            <li className="list-group-item">
                              <div className="order-div">
                                <p className="order-text">Order Number</p>
                                <p className="order-id">{item.orderId}</p>
                              </div>
                              <div className="order-div">
                                <p className="order-text">TOTAL AMOUNT</p>
                                <p className="order-id">
                                  ₹{getTotalAmount(item)}
                                </p>
                              </div>
                              <div className="order-div">
                                <p className="order-text">ITEMS</p>
                                <p className="order-id">
                                  {item.totalOrder.reduce((a, c) => {
                                    return `${a}${c.quantity} x ${c.dish}, `;
                                  }, "")}
                                </p>
                              </div>
                              <div className="order-div">
                                <p className="order-text">ORDERED ON</p>
                                <p className="order-id">
                                  {getTransactionDate(item.timeStamp)}
                                </p>
                              </div>
                              <div>
                                <button
                                  type="button"
                                  className="btn btnbl btn-outline"
                                  onClick={() => handleOpen(item.orderId)}
                                >
                                  View Details
                                </button>
                                <Modal
                                  open={open}
                                  onClose={handleClose}
                                  aria-labelledby="simple-modal-title"
                                  aria-describedby="simple-modal-description"
                                >
                                  <div
                                    style={modalStyle}
                                    className={classes.paper}
                                  >
                                    <div
                                      className="card"
                                      style={{ width: "100%" }}
                                    >
                                      <ul className="list-group list-group-flush">
                                        <li
                                          className="list-group-item"
                                          style={{ padding: "4px" }}
                                        >
                                          <div className="d-flex bd-highlight">
                                            <div className="p-2 bd-highlight ml-0">
                                              <img
                                                src={
                                                  orderDetails.length > 0 &&
                                                  orderDetails[0]
                                                    .restaurantDetails
                                                    .restaurantImage
                                                }
                                                alt="card1"
                                                style={{
                                                  height: "60px",
                                                  width: "60px",
                                                  borderRadius: "10px",
                                                }}
                                              />
                                            </div>
                                            <div className="p-2 bd-highlight">
                                              <div>
                                                {orderDetails.length > 0 &&
                                                  orderDetails[0]
                                                    .restaurantDetails
                                                    .restaurantName}
                                                <p
                                                  className="text-muted"
                                                  style={{ fontSize: "12px" }}
                                                >
                                                  {orderDetails.length > 0 &&
                                                    orderDetails[0]
                                                      .restaurantDetails
                                                      .restaurantLocation}
                                                </p>
                                              </div>
                                            </div>
                                            <div className="ml-auto p-2 bd-highlight">
                                              Delivery
                                            </div>
                                          </div>
                                        </li>
                                        <li className="list-group-item">
                                          <div className="order-div">
                                            <p className="order-text">
                                              Your Order
                                            </p>
                                            {orderDetails.length > 0 &&
                                              orderDetails[0].totalOrder.map(
                                                (dish) => {
                                                  return (
                                                    <div
                                                      style={{
                                                        display: "flex",
                                                        width: "100%",
                                                        padding: "4px 0px",
                                                      }}
                                                    >
                                                      <div
                                                        style={{
                                                          display: "flex",
                                                          flex: "1",
                                                        }}
                                                      >
                                                        <div>
                                                          {dish.veg ===
                                                          false ? (
                                                            <img
                                                              src="/non-veg.png"
                                                              alt="Non-Veg Item"
                                                              style={{
                                                                width: "15px",
                                                                margin:
                                                                  "0px 8px",
                                                              }}
                                                            />
                                                          ) : (
                                                            <img
                                                              src="/veg.png"
                                                              alt="Veg Item"
                                                              style={{
                                                                width: "15px",
                                                                margin:
                                                                  "0px 8px",
                                                              }}
                                                            />
                                                          )}
                                                        </div>
                                                        <div
                                                          style={{
                                                            fontSize: "16px",
                                                            marginTop: "2px",
                                                            display: "flex",
                                                            flexDirection:
                                                              "column",
                                                          }}
                                                        >
                                                          <div>{dish.dish}</div>
                                                          <div>
                                                            {dish.quantity} x{" "}
                                                            {dish.cost}
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div>
                                                        ₹
                                                        {Number(dish.quantity) *
                                                          Number(dish.cost)}
                                                      </div>
                                                    </div>
                                                  );
                                                }
                                              )}
                                          </div>
                                          <li
                                            className="bg-light pl-1"
                                            style={{ listStyleType: "none" }}
                                          >
                                            <div className="d-flex justify-content-between align-items-center pl-2 pr-2 pt-2">
                                              <div className="heading-text">
                                                Subtotal
                                              </div>

                                              <div>
                                                <p className="cost m-0">
                                                  ₹
                                                  {getTotalAmount(
                                                    orderDetails.length > 0 &&
                                                      orderDetails[0]
                                                  )}
                                                </p>
                                              </div>
                                            </div>

                                            <hr style={{ margin: "2px 0px" }} />
                                            <div className="d-flex justify-content-between align-items-center pl-2 pr-2">
                                              <div className="heading-text">
                                                Grand Total
                                              </div>

                                              <div>
                                                <p className="cost m-0">
                                                  ₹
                                                  {getTotalAmount(
                                                    orderDetails.length > 0 &&
                                                      orderDetails[0]
                                                  )}
                                                </p>
                                              </div>
                                            </div>
                                          </li>

                                          <hr />
                                          <div style={{ fontSize: "18px" }}>
                                            Order Details
                                          </div>
                                          <div className="order-div">
                                            <p
                                              className="order-text"
                                              style={{
                                                margin: "0px",
                                                fontWeight: "300",
                                                color: "grey",
                                              }}
                                            >
                                              ORDER ID
                                            </p>
                                            <p className="order-id">
                                              2029441541
                                            </p>
                                          </div>
                                          <div className="order-div">
                                            <p
                                              className="order-text"
                                              style={{
                                                margin: "0px",
                                                fontWeight: "300",
                                                color: "grey",
                                              }}
                                            >
                                              PAYMENT
                                            </p>
                                            <p className="order-id">
                                              Cash on Delivery
                                            </p>
                                          </div>
                                          <div className="order-div">
                                            <p
                                              className="order-text"
                                              style={{
                                                margin: "0px",
                                                fontWeight: "300",
                                                color: "grey",
                                              }}
                                            >
                                              DATE
                                            </p>
                                            <p className="order-id">
                                              {getTransactionDate(
                                                orderDetails.length > 0 &&
                                                  orderDetails[0].timeStamp
                                              )}
                                            </p>
                                          </div>
                                          <div className="order-div">
                                            <p
                                              className="order-text"
                                              style={{
                                                margin: "0px",
                                                fontWeight: "300",
                                                color: "grey",
                                              }}
                                            >
                                              PHONE NUMBER
                                            </p>
                                            <p className="order-id">
                                              {userBackendDetails &&
                                                userBackendDetails.phone}
                                            </p>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </Modal>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <div className="card p-5" style={{ width: "18rem" }}>
                <div className="card-body" type="button" onClick={handleOpen}>
                  <AddCircleOutlineIcon
                    style={{ color: "black", marginLeft: "60px" }}
                  />
                  <h5 style={{ textAlign: "center" }}>Add address</h5>
                </div>
              </div>
            </TabPanel>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
