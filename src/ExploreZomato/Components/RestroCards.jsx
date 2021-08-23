import React from "react";
import { Wrapper } from "../Styles/RestroCardStyle";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import AssistantIcon from "@material-ui/icons/Star";
import { CircularProgress, Backdrop } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilterRestaurant } from "../Redux/action";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        display: "flex",
        flexDirection: "column",
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
    },
}));

function RestroCards(props) {
    const { data,
        sort,
        extraFilters,
        setExtraFilters,
        extraFiltersApplied,
        setExtraFiltersApplied,} = props;

    const classes = useStyles();
    const match = useRouteMatch();
    const location = useLocation();
    const [filters, setFilter] = useState({});
    const [filtersApplied, setFiltersApplied] = useState(false);
    const [title, setTitle] = useState("Order-online");

    const dispatch = useDispatch();
    const { restaurants, isLoading } = useSelector(
        (state) => state.restaurantFilterReducer
    );

    const handleRequest = () => {
        dispatch(
            getFilterRestaurant(
                filters,
                sort,
                data.city_id && data.city_id
            )
        );
    };

    
    useEffect(() => {

        if (data.title != null) {
            setTitle(data.title);
        }

        setFilter(data.filter);
        setExtraFilters({cuisines : [] });
        setFiltersApplied(true);
        setExtraFiltersApplied(false);
        //console.log(data.filter)
        //eslint-disable-next-line
    }, [data.title]);


    useEffect(() => {
        if(extraFiltersApplied) {
            setFilter(Object.assign(extraFilters, data.filter));

            setFiltersApplied(true);
            setExtraFiltersApplied(false);
            //console.log(extraFilters)
        }
        //eslint-disable-next-line
    }, [extraFiltersApplied]);


    useEffect(() => {
        if (filtersApplied) {
            filters && handleRequest();
            setFiltersApplied(false);
            //console.log(extraFilters)
            console.log(filters)
        }
        //eslint-disable-next-line
    }, [filtersApplied]);

    if (isLoading) {
        return (
            <div style={{ minHeight: "90vh" }}>
                <Backdrop className={classes.backdrop} open={isLoading}>
                    <CircularProgress color="secondary" />
                    <div>Coming right up...</div>
                </Backdrop>
            </div>
        );
    }
    else {
        return (
            <>
                <Wrapper>
                    <div className="container">
                        <div className="col-10">

                            <div className="row mt-3">
                                {restaurants &&
                                    restaurants?.map((restaurant, i) => {
                                        return (
                                            <div className="col-6" key={restaurant.id}>
                                                <div
                                                    className="card mt-4 mb-2"
                                                    style={{ maxHeight: "275px", height: "450px" }}
                                                >
                                                    <div className="card-body d-flex">
                                                        <img
                                                            src={restaurant && restaurant.thumb}
                                                            style={{ width: "87px", height: "101px" }}
                                                            className="mr-3 rounded"
                                                            alt="card1"
                                                        />
                                                        <div>
                                                            <div className="col-lg-12 col-sm-13">
                                                                <div className="row">
                                                                    <Link
                                                                        to={{
                                                                            pathname: `/${match.params.city
                                                                                }/restaurants/${restaurant.name
                                                                                    .toLowerCase()
                                                                                    .split(" ")
                                                                                    .join("")}`,
                                                                            state: { res_id: restaurant.id },
                                                                        }}
                                                                        className="card-heading-link"
                                                                        style={{ textDecoration: "none" }}
                                                                    >
                                                                        {restaurant && restaurant.name}
                                                                    </Link>
                                                                    <div className="single-rating d-flex align-items-center">
                                                                        <div className="d-flex m-1">
                                                                            {restaurant &&
                                                                                new Array(
                                                                                    Math.floor(
                                                                                        parseInt(
                                                                                            restaurant.user_rating
                                                                                                .aggregate_rating
                                                                                        )
                                                                                    )
                                                                                )
                                                                                    .fill(0)
                                                                                    .map((star, i) => (
                                                                                        <AssistantIcon
                                                                                            key={i}
                                                                                            style={{ color: "#E23744" }}
                                                                                        />
                                                                                    ))}
                                                                            <span
                                                                                className="ratings-count"
                                                                                style={{
                                                                                    paddingTop: "4px",
                                                                                    marginLeft: "4px",
                                                                                }}
                                                                            >
                                                                                {parseInt(
                                                                                    restaurant.user_rating
                                                                                        .aggregate_rating
                                                                                ).toFixed(1)}
                                                                            </span>
                                                                            <span
                                                                                className="review-count"
                                                                                style={{
                                                                                    paddingTop: "4px",
                                                                                    marginLeft: "4px",
                                                                                }}
                                                                            >
                                                                                (
                                          {restaurant &&
                                                                                    restaurant.all_reviews_count}{" "}
                                          Reviews)
                                        </span>
                                                                        </div>
                                                                    </div>

                                                                    <div className="description">
                                                                        <div className="clear"></div>
                                                                        <div className="grey-text flex-nowrap  ln24 ">
                                                                            {" "}
                                                                            {restaurant &&
                                                                                restaurant.cuisines
                                                                                    .map(
                                                                                        (item, i) =>
                                                                                            i < 5 && (
                                                                                                <React.Fragment
                                                                                                    key={item + i}
                                                                                                >
                                                                                                    {item}
                                                                                                </React.Fragment>
                                                                                            )
                                                                                    )}
                                                                        </div>
                                                                        <div className="grey-text flex-nowrap   ln24 ">
                                                                            Cost ₹
                                        {restaurant &&
                                                                                restaurant.average_cost_for_two}{" "}
                                        for two
                                      </div>
                                                                        <div className="flex-nowrap order-min ln24 ">
                                                                            Min ₹50
                                        <span className="middot"> · </span> Up
                                        to 34 min{" "}
                                                                        </div>
                                                                        <div className="flex-nowrap  order-min ln24 ">
                                                                            Accepts cash{" "}
                                                                            {restaurant &&
                                                                                restaurant.has_online_delivery &&
                                                                                "& online payments"}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="card-footer bg-white "
                                                        style={{
                                                            padding: "0px",
                                                            margin: "0px",
                                                        }}
                                                    >
                                                        <Link
                                                            to={{
                                                                pathname: `/${match.params.city
                                                                    }/restaurants/${restaurant.name
                                                                        .toLowerCase()
                                                                        .split(" ")
                                                                        .join("")}`,
                                                                state: { res_id: restaurant.id },
                                                            }}
                                                            style={{ textDecoration: "none" }}
                                                        >
                                                            <div className="d-flex bd-highlight">
                                                                <div
                                                                    className="ml-auto bd-highlight text-success p-2 border-left"
                                                                    style={{
                                                                        backgroundColor: "#e6f5ec",
                                                                        marginBottom: "0px",
                                                                    }}
                                                                >
                                                                    Order Online
                                    <ArrowForwardIosIcon />
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </>
        );
    }
}

export default RestroCards;
