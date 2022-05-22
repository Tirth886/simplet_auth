import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { LockOutlined } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Box, FormControl, InputLabel, MenuItem, Paper, Select } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import SimpletRoutes from '../../helper/Routes';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1.5rem'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    textCenter: {
        textAlign: "center"
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        color: "#fff"
    },
}));

export default function UserRegister() {
    const classes = useStyles();
    const navigate = useNavigate();

    const redirectLogin = () => {
        navigate(SimpletRoutes.HOME.LOGIN)
    }

    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Create new account
                </Typography>
                <Grid container spacing={1}>
                    <Grid item xs>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="first_name"
                            label="First Name"
                            name="first_name"
                            autoFocus
                        />

                    </Grid>
                    <Grid item xs>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="last_name"
                            label="Last Name"
                            id="last_name"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        name="email"
                        label="Email"
                        id="email"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type="password"
                        name="password"
                        label="Password"
                        id="password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type="password"
                        name="confirm_password"
                        label="Confirm Password"
                        id="confirm_password"
                    />
                    <FormControl margin="normal" fullWidth variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="outlined-company-type">Company Type</InputLabel>
                        <Select
                            value={''}
                            onChange={() => { }}
                            label="Company Type"
                            variant="outlined"
                            fullWidth
                            inputProps={{
                                name: 'company type',
                                id: 'outlined-company-type',
                            }}
                        >
                            <MenuItem value={"Individual"}>Individual</MenuItem>
                            <MenuItem value={"Company"}>Company</MenuItem>

                        </Select>
                    </FormControl>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Register
                </Button>

                <Box className={classes.textCenter}>
                    <Button onClick={redirectLogin} color="secondary"> Already have account ? </Button>
                </Box>
            </Paper>
        </Container>
    );
};