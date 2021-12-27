import React from 'react';
import { IUserForm } from './../../interfaces/user-form.interface'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

const UserForm: React.FunctionComponent = () => {

    let userData: IUserForm = {} as IUserForm;
    const [value, setValue] = React.useState<Date | null>(null);

    return (
        <Grid container mt={4} ml={3}>
            <Grid item xs={8}>
                <Button variant="contained" size="medium"> Submit </Button>
            </Grid>
            <Grid item xs={8}>
                <h4>User Details</h4>
            </Grid>
            <Grid item xs={12} mt={1}>
                <Grid container xs={6} spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth id="firstName" type="text" placeholder='FirstName' label="First Name" variant="standard" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="lastName" fullWidth type="text" placeholder='LastName' label="Last Name" variant="standard" size="medium" />
                    </Grid>
                </Grid>

            </Grid>

            <Grid item xs={12} mt={3}>
                <Grid container xs={6} spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField id="lastName" fullWidth type="text" placeholder='MiddleName' label="Middle Name" variant="standard"></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <FormControl component="fieldset">
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel
                                    value="other"
                                    control={<Radio />}
                                    label="other"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} mt={2}>
                <Grid container xs={6} spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField id="email" fullWidth type="email" placeholder='Email Address' label="Email Address" variant="standard" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="phoneNumber" fullWidth type="number" placeholder='Phone Number' label="Phone Number" variant="standard" />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} mt={2}>
                <Grid container xs={6} spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField id="city" fullWidth type="text" placeholder='City' label="City" variant="standard" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="state" fullWidth type="text" placeholder='State' label="State" variant="standard" />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} mt={3}>
                <Grid container xs={6} spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Date of Birth"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}


export default UserForm;