import React, { useEffect } from 'react';
import { IUserAddress, IUserForm } from './../../interfaces/user-form.interface'
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

    const [userData, setUserData] = React.useState({FirstName: "",
    MiddleName: "",
    LastName: "",
    Address: {City: "",  State: ""} as IUserAddress,
    DateOfBirth: new Date(),
    Email: "",
    Gender: "male",
    PhoneNumber: 0} as IUserForm);
    
    useEffect(() => {
        setUserData(prev =>  ({
            ...prev,
            FirstName: "Random Test",
            MiddleName: "AR",
            LastName: "DK",
            Address: {...prev.Address, City: "ASD", State: "QWE"},
            Email: "ASSDCV@gm.com",
            Gender: "male",
            PhoneNumber: 982838381,
            DateOfBirth: new Date('2022-01-01'),
        }))
    },[]);


    const submitData = () => {
        console.log(userData);
    }

    const handleChange = (key: string, value: string) => {
        setUserData((prev) => ({
            ...prev,
            [key]: value
        }));
    }

    
    const handleAddressChange = (key: string, value: string) => {
        setUserData((prev) => ({
            ...prev,
            Address: {
                ...prev.Address,
            [key]: value
            }
        }));
    }

    return (
        <>
        <Grid container mt={4} ml={3}>
            <Grid item xs={8}>
                <Button variant="contained" size="medium" onClick={submitData}> Submit </Button>
            </Grid>
            <Grid item xs={8}>
                <h4>User Details</h4>
            </Grid>
            <Grid item xs={12} mt={1}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth id="firstName" name="firstName" type="text" placeholder='FirstName' label="First Name" variant="standard" value={userData.FirstName}  onChange={e => handleChange('FirstName', e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="lastName" name="lastName" fullWidth type="text" placeholder='LastName' label="Last Name" variant="standard" size="medium" value={userData.LastName}   onChange={e => handleChange('LastName', e.target.value)}/>
                    </Grid>
                </Grid>

            </Grid>

            <Grid item xs={12} mt={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField id="middleName" name="middleName" fullWidth type="text" placeholder='MiddleName' label="Middle Name" variant="standard" value={userData.MiddleName}  onChange={e => handleChange('MiddleName', e.target.value)} />
                    </Grid>
                    <Grid item xs={12} sm={6}>

                        <FormControl component="fieldset">
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group" value={userData.Gender}   onChange={e => handleChange('Gender', e.target.value)}>
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
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField id="email" name="email" fullWidth type="email"  label="Email Address" variant="standard" value={userData.Email}   onChange={e => handleChange('Email', e.target.value)} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="phoneNumber" name="phoneNumber" fullWidth type="number" label="Phone Number" variant="standard" value={userData.PhoneNumber}   onChange={e => handleChange('PhoneNumber', e.target.value)} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} mt={2}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField id="city" name="city" fullWidth type="text" placeholder='City' label="City" variant="standard" value={userData.Address.City} onChange={e => handleAddressChange('City',e.target.value)}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="state" name="state" fullWidth type="text" placeholder='State' label="State" variant="standard" value={userData.Address.State} onChange={e => handleAddressChange('State', e.target.value)} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} mt={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Date of Birth"
                                value={userData.DateOfBirth}
                                onChange={e => handleChange('DateOfBirth', (e ? new Date(e) : new Date('2020-01-01')).toString())}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
        </>
    )
}


export default UserForm;