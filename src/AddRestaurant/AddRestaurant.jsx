import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FirstPage from './Components/FirstPage';
import SecondPage from './Components/SecondPage';

const useStyles = makeStyles(theme => ({
    a1: {
        display: 'flex',
        justifyContent: 'space-between',
        left: '-7px',
        width: '100%'
    },
    root: {
        display: 'flex'
    },
    expand: {
        transform: 'rotate(0deg)'
    },
    contract: {
        transform: 'rotate(180deg)'
    }
}));

export default function AddRestaurant() {
    const [restaurantName, setRestaurantName] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [ownerNumber, setOwnerNumber] = useState('');
    const [service, setService] = React.useState('0');
    const [pageIndex, setPageIndex] = React.useState(0);
    const [serviceError, setServiceError] = useState(false);
    const [restaurantNameError, setRestaurantNameError] = useState(false);
    const [ownerNameError, setOwnerNameError] = useState(false);
    const [ownerNumberError, setOwnerNumberError] = useState(false);
    const [restaurantImage, setRestaurantImage] = useState({ });
    const [foodImage, setFoodImage] = useState({  });
    const [menuImage, setMenuImage] = useState({  });
    const [restaurantImageError, setRestaurantImageError] = useState({});
    const [foodImageError, setFoodImageError] = useState({});
    const [menuImageError, setMenuImageError] = useState({});

    const classes = useStyles();


    const ValidateFirstPage = () => {

        let err = true;
        if (restaurantName === "") {
            setRestaurantNameError(true);
            err = false;
        }
        else setRestaurantNameError(false);

        if (ownerName === "") {
            setOwnerNameError(true);
            err = false;
        }
        else setOwnerNameError(false); 

        if (ownerNumber.length !== 10) {
            setOwnerNumberError(true);
            err = false;
        }
        else setOwnerNumberError(false);
        if (service === "0") {
            setServiceError(true);
            err = false;
        }
        else setServiceError(false);

        return err;
    }

    const ValidateSecondPage = () => {
        return restaurantImageError || foodImageError || menuImageError ;
    }

    const pages = [
        <FirstPage
            serviceError={serviceError}
            restaurantNameError={restaurantNameError}
            ownerNameError={ownerNameError}
            ownerNumberError={ownerNumberError}
            restaurantName={restaurantName}
            ownerName={ownerName}
            ownerNumber={ownerNumber}
            setRestaurantName={setRestaurantName}
            setOwnerName={setOwnerName}
            setOwnerNumber={setOwnerNumber}
            service={service}
            setService={setService}
        /> ,
        <SecondPage
            restaurantImage={restaurantImage}
            setRestaurantImage={setRestaurantImage}
            foodImage={foodImage}
            setFoodImage={setFoodImage}
            menuImage={menuImage}
            setMenuImage={setMenuImage}
            restaurantImageError={restaurantImageError}
            setRestaurantImageError={setRestaurantImageError}
            foodImageError={foodImageError}
            setFoodImageError={setFoodImageError}
            menuImageError={menuImageError}
            setMenuImageError={setMenuImageError}
        /> , 

    ];

    const validate = [ValidateFirstPage, ValidateSecondPage];


    const goNext = () => {
        console.log(pageIndex)
        if (validate[pageIndex]()) {
            if (pageIndex === 3) {
                //push data into db
            }
            else {
                setPageIndex(pageIndex + 1);
            }
        }
    }
    const goBack = () => {
        console.log(restaurantImageError);
        if (pageIndex !== 0)
            setPageIndex(pageIndex - 1);
    }

    return (
        <div>
            <div
                className="row"
                style={{ display: 'flex', justifyContent: 'space-around' }}
            >
                <div style={{ width: '30%' }}>
                    <Paper
                        bgcolor="#f1f3f4"
                        style={{ position: 'sticky', top: '0px', alignSelf: 'felx-start' }}
                    >
                        <p> asas</p>
                    </Paper>
                </div>

                <div style={{ width: '30%' }}>
                    {pages[pageIndex]}
                </div>
                <div style={{ width: '30%' }}>
                    <p>
                        {' '}
          scocdnclcadjbcidwccjca cosncsc asocscnc cccnkccc ass a asss sxwxswc
          xqxx wdcdx asas
        </p>
                </div>
            </div>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <Button variant="outlined" style={{ marginRight: '10px' }} onClick={goBack} >Back</Button>
                <Button variant="contained" style={{ color: 'white', backgroundColor: 'black' }} onClick={goNext}>Next</Button>
            </div>
        </div>
    );
}
