import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
    },
    success: {
        color : 'grey'
    },
    error: {
        color : 'red'
    }

}));

function first() {
    return <div />;
}

export default function FirstPage(props) {
    const {
        restaurantName,
        ownerName,
        ownerNumber,
        setRestaurantName,
        setOwnerName,
        setOwnerNumber,
        service,
        setService,
        serviceError,
        restaurantNameError,
        ownerNameError,
        ownerNumberError 
    } = props;
    const [ex, setEx] = useState([true , true , true]);
    

    const classes = useStyles();

    const handleService = (event) => {
        setService(event.target.value);
    };

    function GeneralBody() {
        return (
            <div>
                <div style={{ marginTop: "10px" }}>
                    <TextField
                        error={restaurantNameError}
                        style={{ width: "190px" }}
                        size="small"
                        label="Enter Restaurant Name"
                        defaultValue={restaurantName && restaurantName}
                        onChange={(e) => setRestaurantName(e.target.value)}
                        helperText={restaurantNameError &&  "Incorrect entry."}
                        variant="outlined"
                    />

                    <TextField
                        error={ownerNameError}
                        style={{ width: "160px", marginLeft: "10px" }}
                        id="outlined-search2"
                        size="small"
                        label="Enter Owner Name"
                        defaultValue={ownerName && ownerName}
                        onChange={(e) => setOwnerName(e.target.value)}
                        helperText={ownerNameError && "Incorrect entry."}
                        variant="outlined"
                    />
                </div>

                <div style={{ marginTop: "10px" }}>
                    <TextField
                        error={ownerNumberError }
                        style={{ width: "250px" }}
                        id="outlined-search3"
                        size="small"
                        label="Enter Owner Number"
                        defaultValue={ownerNumber && ownerNumber}
                        onChange={(e) => setOwnerNumber(e.target.value)}
                        helperText={ownerNumberError && "Enter 10 digit number."}
                        variant="outlined"
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        style={{
                            width: "100px",
                            marginLeft: "10px",
                            marginTop: "3px",
                            backgroundColor: "black"
                        }}
                    >
                        Verify
          </Button>
                </div>
            </div>
        );
    }

    function LocationBody() {
        return <div></div>;
    }

    function ServiceBody() {
        return (
            <RadioGroup value={service} onChange={handleService}>
                <FormControlLabel
                    value="1"
                    control={<Radio style={{ color: "black" }} />}
                    label="Only Delivery"
                />
                <FormControlLabel
                    value="2"
                    control={<Radio style={{ color: "black" }} />}
                    label="Only Dine-out"
                />
                <FormControlLabel
                    value="3"
                    control={<Radio style={{ color: "black" }} />}
                    label="Both delivery & dine-out"
                />
                <FormControlLabel
                    value="4"
                    control={<Radio style={{ color: "black" }} />}
                    label="None , No delivery No Dine-out"
                />
            </RadioGroup>
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
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "column"
            }}
        >
            {["a", "b", "c"].map((number, index) => (
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
                    <div className={ (index == 2 && serviceError) ? classes.error : classes.success } >
                        {description[index]}
                    </div>

                    <div className={ex[index] ? classes.vis : classes.hid}>
                        {bodies[index]}
                    </div>

                </Paper>
            ))}
        </div>
    );
}
