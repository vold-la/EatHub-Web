import React, { useState , useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ExploreZomato from "../../ExploreZomato/Components/RestroCards";
import Button from '@material-ui/core/Button';
import Filters from "../../ExploreZomato/Components/Filters";
import FilterListIcon from '@material-ui/icons/FilterList';
import Collections from "./Collections";


const Wrapper = styled.div`
  * {
    font-family: Poppins;
    font-weight: 300;
  }

  .main-div {
    align-self: flex-start;
    width: 100%;
    padding-right: 1rem;
    background-color: rgb(255, 255, 255);
    transform: translateZ(0px);
    transition: transform 0.2s ease-in-out 0s;
  }
  .sec-div {
    background-color: white;
  }
  .heading-section {
    width: 100%;
    max-width: 110rem;
    overflow: auto hidden;
    min-height: 6.2rem;
    position: relative;
  }
  .main-section {
    min-width: 100%;
    display: flex;
    position: relative;
    -webkit-box-pack: start;
    justify-content: flex-start;
    background-color: transparent;
    overflow-x: auto;
  }
  .main-section:first-child {
    margin-left: 0px;
    padding-left: 0px;
  }
  .main-section:last-child {
    margin-right: 0px;
    padding-right: 0px;
  }
  .single-div {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    max-height: 100%;
    margin-right: 2rem;
    cursor: pointer;
  }
  .text-span {
    font-size: 1.2rem;
    line-height: 1.5;
    font-weight: 300;
    margin: 0.3rem 1rem;
    border: 1px solid transparent;
    padding: 0.5rem 0.8rem;
    border-radius: 6px;
    white-space: nowrap;
    color: rgb(0, 0, 0);
    button {
      border: none;
      background-color: inherit;
    }
  }
  .text-active {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    color: rgb(0, 0, 0);
  }
  .text {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    font-family: Poppins;
    font-weight: 200;
    color: rgb(138, 131, 131);
  }
`;


function Explore() {

    const [delivery, setDelivery] = useState(true);
    const [dineOut, setDineOut] = useState(false);
    const [nightLife, setNightLife] = useState(false);
    const [members, setMembers] = useState(false);
    const [openFilters, setOpenFilters] = useState(false);
    const [extraFilters, setExtraFilters] = useState({ cuisines: [] });
    const [sort, setSort] = useState();
    const [extraFiltersApplied, setExtraFiltersApplied] = useState(false);

    const searchCity = useSelector(
        (state) => state.landingPageReducer.searchCity
    );
    const cityId = useSelector((state) => state.landingPageReducer.cityId);


    const deliveryData = {
        city_id: parseInt(cityId),
        filter: { has_online_delivery : 1 },
        title: "delivery",
        sort : sort,
    }

    const dineOutData = {
        city_id: parseInt(cityId),
        filter: { has_online_delivery: 0 },
        title: "dining",
    }

    const nightLifeData = {
        city_id: parseInt(cityId),
        filter: { cuisines : "cafe" },
        title: "night life",
    }

    const membersData = {
        city_id: parseInt(cityId),
        filter: { average_cost_for_two: { $gt: 1200 } },
        title: "members",
    }

    const changeActivePage = (e) => {
        switch (e.target.name) {
            case "delivery":
                setDelivery(true);
                setDineOut(false);
                setNightLife(false);
                setMembers(false);
                break;
            case "dineOut":
                setDelivery(false);
                setDineOut(true);
                setNightLife(false);
                setMembers(false);
                break;
            case "nightLife":
                setDelivery(false);
                setDineOut(false);
                setNightLife(true);
                setMembers(false);
                break;
            case "members":
                setDelivery(false);
                setDineOut(false);
                setNightLife(false);
                setMembers(true);
                break;
            default:
                setDelivery(true);
                setDineOut(false);
                setNightLife(false);
                setMembers(false);
        }
    };

    
    return (
        <div>
            <>

                <Wrapper style={{ top: "180px", zIndex: "10" }}>
                    <article className="main-div container">
                        <div className="sec-div">
                            <section className="heading-section">
                                <section className="main-section">
                                    <div className="single-div">
                                        <span className="text-span">
                                            <button
                                                className={delivery ? "text-active" : "text"}
                                                onClick={changeActivePage}
                                                name="delivery"
                                            >
                                                Delivery
                        </button>
                                        </span>
                                    </div>
                                    <div className="single-div">
                                        <span className="text-span">
                                            <button
                                                className={dineOut ? "text-active" : "text"}
                                                onClick={changeActivePage}
                                                name="dineOut"
                                            >
                                                DineOut
                        </button>
                                        </span>
                                    </div>
                                    <div className="single-div">
                                        <span className="text-span">
                                            <button
                                                className={nightLife ? "text-active" : "text"}
                                                onClick={changeActivePage}
                                                name="nightLife"
                                            >
                                                NightLife
                        </button>
                                        </span>
                                    </div>
                                    <div className="single-div">
                                        <span className="text-span">
                                            <button
                                                className={members ? "text-active" : "text"}
                                                onClick={changeActivePage}
                                                name="members"
                                            >
                                                Members
                        </button>
                                        </span>
                                    </div>
                                </section>
                                <hr />
                            </section>
                        </div>
                    </article>
                </Wrapper>
                <div className="main-section" style={{ position: "sticky", top: "0px", zIndex: "10" }} >
                    <div className="container" style={{  backgroundColor : 'rgb(255,255,255)' }}>
                        <div style={{display: 'flex' , justifyContent: 'space-between' }}>
                            {delivery ? (<h3>Delivery Restaurant in {searchCity} </h3>)
                             : dineOut ? (<h3>Dinning Restaurant in {searchCity} </h3>)
                             : nightLife ? (<h3>Pubs & Bar in {searchCity} </h3>)
                             : (<h3>Best Restaurant for Members in {searchCity} </h3>)
                             }

                            <Button
                                variant="outlined"
                                onClick={() => setOpenFilters(true)}>
                                <FilterListIcon style={{ marginRight : '5px'  }}/>
                                Filters
                            </Button>
                        </div>
                    </div>
                </div>

                {delivery ? (
                    <ExploreZomato
                        data={deliveryData}
                        sort={ sort}
                        extraFilters={extraFilters}
                        setExtraFilters={setExtraFilters}
                        extraFiltersApplied={extraFiltersApplied}
                        setExtraFiltersApplied={setExtraFiltersApplied}
                    />
                ) : dineOut ? (
                        <>
                            <ExploreZomato
                                data={dineOutData}
                                sort={sort}
                                extraFilters={extraFilters}
                                setExtraFilters={setExtraFilters}
                                extraFiltersApplied={extraFiltersApplied}
                                setExtraFiltersApplied={setExtraFiltersApplied}
                            />
                            <Collections />
                        </>
                ) : nightLife ? (
                            <ExploreZomato
                                data={nightLifeData}
                                sort={sort}
                                extraFilters={extraFilters}
                                setExtraFilters={setExtraFilters}
                                extraFiltersApplied={extraFiltersApplied}
                                setExtraFiltersApplied={setExtraFiltersApplied}
                       />
                ) : (
                            <ExploreZomato
                                    data={membersData}
                                    sort={sort}
                                    extraFilters={extraFilters}
                                    setExtraFilters={setExtraFilters}
                                    extraFiltersApplied={extraFiltersApplied}
                                    setExtraFiltersApplied={setExtraFiltersApplied}
                              />
                     )}
                         
            </>

            <Filters
                setOpenFilters={setOpenFilters}
                openFilters={openFilters}
                extraFilters={extraFilters}
                setExtraFilters={setExtraFilters}
                sort={sort}
                setSort={setSort}
                setExtraFiltersApplied={setExtraFiltersApplied}
            />

        </div>

    );
}

export default Explore;
