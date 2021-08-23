import React, { useState } from 'react';
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import FileUpload from '../../Extras/FileUploadComponent/FileUpload';

const useStyles = makeStyles((theme) => ({
    a1: {
        display: "flex",
        justifyContent: "space-between",
        left: "-7px",
        width: "100%"
    },
    root: {
        display: "flex"
    },
    expand: {
        transform: "rotate(0deg)"
    },
    contract: {
        transform: "rotate(180deg)"
    },
    vis: {
        visibility: "visible",

    },
    hid: {
        visibility: "hidden",
        height: '0px',
    }
}));

export default function SecondPage(props) {

    const {
            restaurantImage,
            setRestaurantImage,
            foodImage ,
            setFoodImage,
            menuImage ,
            setMenuImage,
            restaurantImageError ,
            setRestaurantImageError,
            foodImageError ,
            setFoodImageError ,
            menuImageError ,
            setMenuImageError ,
    } = props;

    const [ex, setEx] = React.useState([true , true , true]);
    
    const updateRestaurantImages = (files) =>
        setRestaurantImage({ ...files });

    const updateFoodImages = (files) =>
        setFoodImage({ ...files });

    const updateMenuImages = (files) =>
        setMenuImage({...files });

    const updateRestaurantImageError = (val) =>
        setRestaurantImageError({...val});

    const updateFoodImageError = (val) =>
        setFoodImageError({ ...val });

    const updateMenuImageError = (val) =>
        setMenuImageError({ ...val });


    const handleSubmit = (event) => {
        event.preventDefault();
        //logic to create new user...
    };
    const classes = useStyles();

    function GeneralBody() {
        return (
            <div >
                <FileUpload
                    accept=".jpg,.png,.jpeg"
                    label=""
                    multiple
                    cacheImages={restaurantImage}
                    cacheErrors={restaurantImageError}
                    updateFilesCb={updateRestaurantImages}
                    updateErrors={updateRestaurantImageError}
                />
            </div>
        );
    }

    function LocationBody() {
        return (<div>
            <FileUpload
                accept=".jpg,.png,.jpeg"
                label=""
                multiple
                cacheImages={foodImage}
                cacheErrors={foodImageError}
                updateFilesCb={updateFoodImages}
                updateErrors={updateFoodImageError}
            />
        </div>);
    }

    function ServiceBody() {
        return (<div>
            <FileUpload
                accept=".jpg,.png,.jpeg"
                label=""
                multiple
                cacheImages={menuImage}
                cacheErrors={menuImageError}
                updateFilesCb={updateMenuImages}
                updateErrors={updateMenuImageError}
            />
        </div>
        );
    }

    const description = [
        "General information about your outlet",
        "Outlet location and mark exact position on map",
        "fddd"
    ];

    const bodies = [GeneralBody(), LocationBody(), ServiceBody()];

    const handleExpand = (index) => {
        let cop = [...ex];
        cop[index] = !cop[index];
        setEx(cop);
        console.log(restaurantImageError);
        console.log(foodImageError);
        console.log(menuImageError);
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "column"
            }}
        >
            {["x", "y", "z"].map((number, index) => (
                <Paper
                    style={{ padding: "10px", marginTop: "20px" }}
                    variant="outlined"
                >
                    <Button className={classes.a1} onClick={() => handleExpand(index)}>
                        {number}
                        <ExpandMoreIcon
                            className={ex[index] ? classes.contract : classes.expand}
                        />
                    </Button>

                    <div>
                        {description[index]}
                        <div className={ex[index] ? classes.vis : classes.hid}>
                            {bodies[index]}
                        </div>
                    </div>
                </Paper>
            ))}
        </div>
    );
}
