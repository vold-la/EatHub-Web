import React from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";



const GreenCheckbox = withStyles({
    root: {
        color: 'black',
        '&$checked': {
            color: 'black',
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function DisplaySearched(props) {
    const { searchedCuisine, check, setChecked } = props;

    const handleCheck = (event) => {
        if (check.name.indexOf(event.target.name) > -1) {
            const newList = check.name.filter((item) => item !== event.target.name)
            setChecked({ name: newList });
        }
        else
            setChecked({ name: [...check.name, event.target.name] });
    };

   // console.log(searchedCuisine)

    return (
        searchedCuisine.map(item => (

            <Grid item key={item.lable} xs={6}>

                <FormControlLabel
                    key={item.name}
                    label={item.name}
                    control={<GreenCheckbox checked={check.name.indexOf(item.name) > -1} onChange={handleCheck} name={item.name} />}
                />
            </Grid>
        ))
    );
}
