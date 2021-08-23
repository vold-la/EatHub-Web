import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import DisplaySearched from './DisplaySearched';

const useStyles = makeStyles(theme => ({
    searchBox: {
        display: "flex",
        width: "90%",
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

export default function DisplayLargeCheckbox(props) {
    let { checkboxes, check, setChecked } = props;
    const classes = useStyles();
    const [searchCuisine, setSearchCuisine] = useState('');

    const [searchedCuisine, setSearchedCuisine] = React.useState([...checkboxes]);

    const handleCuisineSearch = e => {
        setSearchCuisine(e.target.value);
        if (e.target.value === '') setSearchedCuisine([...checkboxes]);
        else {
            setSearchedCuisine(
                checkboxes.filter(cus =>
                    cus.name.toLowerCase().includes(e.target.value.toLowerCase())
                )
            );
        }
    };

    return (
        <Grid container style={{ maxHeight: '300px', overflowY: 'scroll' }}>
            <Box
                border={1}
                borderColor={'grey'}
                borderRadius={5}
                className={classes.searchBox}
            >
                <input
                    className={classes.searchInput}
                    onChange={handleCuisineSearch}
                    type="text"
                    value={searchCuisine}
                    placeholder="Search Here"
                />
                <Button
                    onClick={() => {
                        setSearchCuisine('');
                        setSearchedCuisine([...checkboxes]);
                    }}
                    style={{ width: '5%' }}
                >
                    <CloseIcon style={{ color: 'grey' }} />
                </Button>
            </Box>

            <DisplaySearched
                searchedCuisine={searchedCuisine}
                check={check}
                setChecked={setChecked}
            />
        </Grid>

    );
}
