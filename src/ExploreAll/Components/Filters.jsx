
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { grey } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import Backdrop from "@material-ui/core/Backdrop";
import Zoom from "@material-ui/core/Zoom";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";
import DisplayLargeCheckbox from './DisplayLargeCheckbox';

const GreenRadio = withStyles({
    root: {
        color: grey[400],
        '&$checked': {
            color: grey[900],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

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
            {value === index && <Box style={{ marginLeft: '20px' }}>{children}</Box>}
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
        color: 'rgb(120,200,120)',
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        height: 300,
    },
    gridcontainer: {
        height : '400px' , 
        overflow: 'scroll',

    },
    tabs: {
        borderRight: `1px solid grey`,
        width: 150,
        minWidth: 150,
    },
    sliderroot: {
        height: '300px',
        width: '400px',
        padding : "30px",
       
    }, 
    slider: {
        color: "black",
        top : "15%",
    },
    btn: {
        color:'black',
    },
    sliderr: {
        color: "black",
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: "5px",
        width: "600px",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 2),
        position: "absolute",
        top: "10%",
        maxHeight: "600px",  
        "@media only screen and (max-width: 420px)": {
            width: "100%",
        },
    },
    navigationLinkTitle: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "18px",
    },

    divider: {
        height: 1,
        color: "grey",
    },
    modalfooter: {
        float: "right",
        padding: "10px",
    },
    searchBox: {
        display: "flex",
        width : "90%",
        marginTop: '10px',
        marginBottom: '10px',
    },
    searchInput: {
        width: '90%',
        marginLeft: '10px',
        border: 'none',
        outline: 'none',
    },
}));

export default function Filters(props) {
    const {
        setOpenFilters,
        openFilters,
        extraFilters,
        setExtraFilters,
        sort,
        setSort,
        extraFiltersApplied,
        setExtraFiltersApplied,
    } = props;
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [radio, setRadio] = React.useState('popularity');
    const [slider, setSlider] = React.useState(0);
    const [cost, setCost] = React.useState([0, 1000]);
    const [check, setChecked] = React.useState({ name: [] });

    
    let checkboxes = [
        {
            name: 'Afghan',
        },
        {
            name: 'American',
        },
        {
            name: 'Andhra',
        },
        {
            name: 'Arabian',
        },
        {
            name: 'Asian',
        },
        {
            name: 'Assamese',
        },
        {
            name: 'Awadhi',
        },
        {
            name: 'BBQ',
        },
        {
            name: 'Bakery',
        },
        {
            name: 'Bangladeshi',
        },
        {
            name: 'Belgian',
        },
        {
            name: 'Bengali',
        },
        {
            name: 'Bihari',
        },
        {
            name: 'Biryani',
        },
        {
            name: 'British',
        },
        {
            name: 'Charcoal Chicken',
        },
        {
            name: 'Chinese',
        },
        {
            name: 'Coffee',
        },
        {
            name: 'Continental',
        },
        {
            name: 'Desserts',
        },

        {
            name: 'European',
        },
        {
            name: 'Finger Food',
        },
        {
            name: 'French',
        },
        {
            name: 'Gujarati',
        },
        {
            name: 'Healthy Food',
        },
        {
            name: 'Hot dogs',
        },
        {
            name: 'Hyderabadi',
        },

        {
            name: 'Ice Cream',
        },
        {
            name: 'Indonesian',
        },
        {
            name: 'Iranian',
        },
        {
            name: 'Italian',
        },
        {
            name: 'Japanese',
        },
        {
            name: 'Juices',
        },
        {
            name: 'Kashmiri',
        },

        {
            name: 'Kebab',
        },
        {
            name: 'Kerala',
        },
        {
            name: 'Korean',
        },
        {
            name: 'Lebanese',
        },
        {
            name: 'Lucknowi',
        },
        {
            name: 'Maharashtrian',
        },
        {
            name: 'Malaysian',
        },

        {
            name: 'Mediterranean',
        },
        {
            name: 'Mexican',
        },
        {
            name: 'Mishti',
        },
        {
            name: 'Mithai',
        },
        {
            name: 'Momos',
        },
        {
            name: 'Mughlai',
        },
        {
            name: 'North Indian',
        },
        {
            name: 'Paan',
        },
        {
            name: 'Pasta',
        },
        {
            name: 'Pizza',
        },
        {
            name: 'Rajasthani',
        },
        {
            name: 'Roast Chicken',
        },
        {
            name: 'Rolls',
        },
        {
            name: 'Russian',
        },
        {
            name: 'Salad',
        },
        {
            name: 'Sandwich',
        },
        {
            name: 'Seafood',
        },
        {
            name: 'Singaporean',
        },
        {
            name: 'South Indian',
        },
        {
            name: 'Spanish',
        },
        {
            name: 'Sri Lankan',
        },
        {
            name: 'Steak',
        },
        {
            name: 'Sushi',
        },
        {
            name: 'Tamil',
        },
        {
            name: 'Tea',
        },
        {
            name: 'Thai',
        },
        {
            name: 'Tibetan',
        },
        {
            name: 'Turkish',
        },
        {
            name: 'Wraps',
        },
    ];

    const marks = [
        {
            value: 0,
            label: 'Any',
        },
        {
            value: 25,
            label: '3.5',
        },
        {
            value: 50,
            label: '4.0',
        },
        {
            value: 75,
            label: '4.5',
        },
    ];

    const costMarks = [
        {
            value: 0,
            label: 0,
        },
        {
            value: 100,
            label: 100,
        },
        {
            value: 200,
            label: 200,
        },
        {
            value: 300,
            label: 300,
        },
        {
            value: 500,
            label: 500,
        },
        {
            value: 1000,
            label: '1000+',
        },
    ];


    useEffect(() => {
        if (openFilters) {
            setValue(0);

            if (sort !== undefined) 
                setRadio(sort);
            else
                setRadio('popularity');

            if (extraFilters.user_rating !== undefined)
                setSlider(extraFilters.user_rating.aggregate_rating);
            else setSlider(0);


            if (extraFilters.average_cost_for_two !== undefined)
                setCost([extraFilters.average_cost_for_two.$lte, extraFilters.average_cost_for_two.$gte]);
            else setCost([0, 1000]);

            if (extraFilters.cuisines.length !== 0)
                setChecked({ name: [...extraFilters.cuisines] });
            else setChecked({ name: [] });

           // setSearchCuisine('');
           // setSearchedCuisine([...checkboxes]);
        }
        else {
            setRadio('popularity');
            setValue(0);
            setSlider(0);
            setCost([0, 1000]);
           // setSearchCuisine('');
           // setSearchedCuisine([...checkboxes]);
            setChecked({ name: [] });
        }


    }, [openFilters])

    const applyFilter = () => {

        if (check.name.length !== 0)
            setExtraFilters(Object.assign(extraFilters, { cuisines: [...check.name] }));

        if (slider !== 0)
            setExtraFilters(Object.assign(extraFilters, { user_rating: { aggregate_rating: slider } }));

        if (cost[0] !== 0 || cost[1] !== 1000) {
          //  if (cost[1] === 1000) setExtraFilters(Object.assign(extraFilters, { average_cost_for_two: { '$lte': cost[0], '$gte': 1000} }));
           setExtraFilters(Object.assign(extraFilters, { average_cost_for_two: { '$lte' : cost[0], '$gte': cost[1] }} ));
        }

        if (radio !== 'popularity')
            setSort(radio);
        
        setExtraFiltersApplied(true);
        handleClose();
    };

    const clearFilter = () => {
        setRadio('popularity');
        setValue(0);
        setSlider(0);
        setCost([0, 1000]);
        //setSearchCuisine('');
        //setSearchedCuisine([...checkboxes]); 
        setChecked({ name: [] });
        setExtraFilters({ cuisines: [] });
        setSort('popularity');
    };

    const handleClose = () => {
        setOpenFilters(false);
    };

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };

    const valueSlide = (event, newValue) => {
        newValue = 3 + newValue / 50;
        if(newValue !== slider)
            setSlider(newValue);
    };

    const handleRadio = (event) => {
        setRadio(event.target.value);
    };

    const handleCost = (event, newValue) => {
        setCost(newValue);
    };

    
    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                name="login"
                open={openFilters}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 50,
                }}
            >

                <Zoom in={openFilters}>
                    <div className={classes.paper}>
                        <div className={classes.navigationLinkTitle}>
                            <h2>Filter</h2>
                            <IconButton onClick={handleClose}>
                                <CloseIcon />
                            </IconButton>
                        </div>

                        <div id="transition-modal-description">
                            <Divider
                                flexItem
                                className={classes.divider}
                            />

                                <div >
                                    <div className={classes.root}>
                                    <Tabs
                                            orientation="vertical"
                                            TabIndicatorProps={{ style: { backgroundColor:"rgb(120,200,120)"}}}
                                            variant="scrollable"
                                            value={value}
                                            onChange={handleTabChange}
                                            className={classes.tabs}
                                        >
                                            <Tab label="Sort by" {...a11yProps(0)} />
                                            <Tab label="Cuisines" {...a11yProps(1)} />
                                            <Tab label="Ratings" {...a11yProps(2)} />
                                            <Tab label="Cost Per Person" {...a11yProps(3)} />
                                            <Tab label="More Filters" {...a11yProps(4)} />
                                    </Tabs>

                                        <TabPanel value={value} index={0}>

                                        <div>
                                            <FormControl component="fieldset">
                                                <RadioGroup aria-label="sort_modal" name="sort_modal" value={radio} onChange={handleRadio}>
                                                    <FormControlLabel value="popularity" control={<GreenRadio />} label="Popularity" />
                                                    <FormControlLabel value="rating_desc" control={<GreenRadio />} label="Rating:High to Low" />
                                                    <FormControlLabel value="delivery" control={<GreenRadio />} label="Delivery" />
                                                    <FormControlLabel value="cost_asc" control={<GreenRadio />} label="Cost:Low to High" />
                                                    <FormControlLabel value="cost_desc" control={<GreenRadio />} label="Cost:High to Low" />
                                                </RadioGroup>
                                            </FormControl>
                                            </div>
                                    </TabPanel>

                                    <TabPanel value={value} index={1} >

                                        <DisplayLargeCheckbox
                                            checkboxes={checkboxes}
                                            check={check}
                                            setChecked={setChecked}
                                        />

                                    </TabPanel>

                                        <TabPanel value={value} index={2}>
                                        <h3>Ratings</h3>
                                        <div className={classes.sliderroot}>
                                            <Slider
                                                className={classes.slider}
                                                defaultValue={0}
                                                onChange={valueSlide}
                                                aria-labelledby="discrete-slider-always"
                                                step={null}
                                                marks={marks}
                                                track={"inverted"}
                                            />
                                            </div>
                                        </TabPanel>

                                        <TabPanel value={value} index={3}>
                                        <h3>Cost Per Person</h3>

                                        <div className={classes.sliderroot}>

                                        <Slider
                                                className={classes.sliderr}
                                            value={cost}
                                            onChange={handleCost}
                                            aria-labelledby="range-slider"
                                            step={null}
                                            marks={costMarks}
                                            max={1000}
                                        />
                                            </div>
                                        </TabPanel>
                                        <TabPanel value={value} index={4}>
                                            <h4>More Filters</h4>

                                        </TabPanel>
                                        
                                    </div>
                                </div>

                            <Divider flexItem className={classes.divider} />

                        </div>

                        <div id="transition-modal-footer">
                            <div className={classes.modalfooter}>
                                <Button onClick={clearFilter}>Clear all</Button>
                                <Button onClick={applyFilter} variant="contained" style={{backgroundColor : '#000000' , color : 'white' }}>
                                    Apply
            </Button>
                            </div>
                        </div>

                    </div>
                </Zoom>
            </Modal>


        </>
    );
}
