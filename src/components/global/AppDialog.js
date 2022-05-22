import BackImage from '../icons/illustration-b@2x.png'
import {
    forwardRef,
    memo,
    useState
} from 'react';
import {
    makeStyles
} from '@material-ui/core/styles';
import {
    Button,
    Dialog,
    Typography,
    Slide,
    Box,
    Tooltip,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormGroup,
    FormControlLabel,
    Checkbox,
    TextField,
} from '@material-ui/core'


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
        backgroundColor: "#fff",
        boxShadow: "none"
    },
    title: {
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(2),
        flex: 1,
        "& > h5": {
            color: "#1d3760",
            fontWeight: 600,
        }
    },
    dialoglayout: {
        backgroundImage: `url(${BackImage})`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: "contain",
        backgroundColor: "#1d3760"
    },
    steps: {
        height: "24px",
        width: "24px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#1a73e8",
        color: "#fff"
    },
    stepsTitle: {
        flex: "1",
        marginLeft: "1rem",
        fontWeight: "600",
        fontSize: "16px",
        color: "#1d3760",
        "& > div": {
            lineHeight: "18px",
        }
    },
    stepsWrapper: {
        display: "flex",
        alignItems: "center",
        marginBottom: "0.3rem"
    },
    mainStepsWrapper: {
        marginBottom: "1rem"
    },
    stepsBody: {
        marginLeft: "40px",
    },
    formgroup : {
        flexDirection : "unset"
    },
    dialoglayoutWrapper: {
        width: "calc(100% - 60%)",
        background: "#fff",
        borderRadius: "10px",
    },
    buttonWrapper: {
        "& button": {
            marginRight: theme.spacing(2)
        },
        "& button:nth-child(1)": {
            color: "#fff"
        }
    }
}));
export default memo(
    function AppDialog(props) {
        const classes = useStyles();
        function handleClose() {
            props.setOpen(false)
        }
        return (
            <div>
                <Dialog fullScreen open={props.isOpen} onClose={handleClose} TransitionComponent={Transition}>
                    <Box padding={4} className={classes.dialoglayout}>
                        <Box className={classes.dialoglayoutWrapper}>
                            <Box padding={3} marginTop={3} marginBottom={3}>
                                <div className={classes.title}>
                                    <Typography variant="h5">
                                        Register App
                                    </Typography>
                                    <Typography variant='caption' color='textPrimary'>
                                        Get started by adding your app.
                                    </Typography>
                                </div>
                                <Box className={classes.mainStepsWrapper}>
                                    <Box className={classes.stepsWrapper}>
                                        <div className={classes.steps}>
                                            <span>
                                                1
                                            </span>
                                        </div>
                                        <div className={classes.stepsTitle}>
                                            <span>
                                                Project
                                            </span>
                                            <div>
                                                <Typography variant='caption' color='textPrimary'>
                                                    Choose project from below.
                                                </Typography>
                                            </div>
                                        </div>
                                    </Box>
                                    <Box>
                                        <div className={classes.stepsBody}>
                                            <div>
                                                <FormControl variant="outlined" fullWidth className={classes.formControl}>
                                                    <InputLabel id="demo-simple-select-outlined-label">Project</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-outlined-label"
                                                        id="demo-simple-select-outlined"
                                                        value={""}
                                                        onChange={() => { }}
                                                        label="Age"
                                                        fullWidth
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={10}>Project 1</MenuItem>
                                                        <MenuItem value={20}>Project 2</MenuItem>
                                                        <MenuItem value={30}>Project 3</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                    </Box>
                                </Box>
                                <Box className={classes.mainStepsWrapper}>
                                    <Box className={classes.stepsWrapper}>
                                        <div className={classes.steps}>
                                            <span>
                                                2
                                            </span>
                                        </div>
                                        <div className={classes.stepsTitle}>
                                            <div>
                                                <span>
                                                    App Nickname
                                                </span>
                                                <div>
                                                    <Tooltip title=''>
                                                        <Typography variant='caption' color='textPrimary'>
                                                            Enter app name
                                                        </Typography>
                                                    </Tooltip>
                                                </div>
                                            </div>
                                        </div>
                                    </Box>
                                    <Box>
                                        <div className={classes.stepsBody}>
                                            <div>
                                                <TextField
                                                    fullWidth
                                                    id="outlined-helperText"
                                                    label="App nickname"
                                                    variant="outlined"
                                                />
                                            </div>
                                        </div>
                                    </Box>
                                </Box>
                                <Box className={classes.mainStepsWrapper}>
                                    <Box className={classes.stepsWrapper}>
                                        <div className={classes.steps}>
                                            <span>
                                                3
                                            </span>
                                        </div>
                                        <div className={classes.stepsTitle}>
                                            <div>
                                                <span>
                                                    App type
                                                </span>
                                                <div>
                                                    <Typography variant='caption' color='textPrimary'>
                                                        Choose atleast one app type from below.
                                                    </Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </Box>
                                    <Box>
                                        <div className={classes.stepsBody}>
                                            <div>
                                                <FormGroup className={classes.formgroup}>
                                                    <FormControlLabel
                                                        control={<Checkbox color='primary' checked={true} onChange={() => { }} name="android" />}
                                                        label="Android"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox color='primary' checked={true} onChange={() => { }} name="web" />}
                                                        label="Web"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox checked={false} color='primary' onChange={() => { }} name="ios" />}
                                                        label="IOS"
                                                    />
                                                </FormGroup>
                                            </div>
                                        </div>
                                    </Box>
                                </Box>
                                <Box className={classes.mainStepsWrapper}>
                                    <Box className={classes.stepsWrapper}>
                                        <div className={classes.steps}>
                                            <span>
                                                3
                                            </span>
                                        </div>
                                        <div className={classes.stepsTitle}>
                                            <div>
                                                <span>
                                                    App description
                                                </span>
                                                <div>
                                                    <Typography variant='caption' color='textPrimary'>
                                                        Provide app description.
                                                    </Typography>
                                                </div>
                                            </div>
                                        </div>
                                    </Box>
                                    <Box>
                                        <div className={classes.stepsBody}>
                                            <div>
                                                <TextField
                                                    fullWidth
                                                    id="outlined-helperText"
                                                    label="App description"
                                                    variant="outlined"
                                                    multiline
                                                    rows={4}
                                                />
                                            </div>
                                        </div>
                                    </Box>
                                </Box>
                                <Box className={classes.buttonWrapper} textAlign={"center"}>
                                    <Button variant='contained' color='primary'>Register</Button>
                                    <Button variant='contained' color='secondary' onClick={handleClose}>Cancle</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Dialog>
            </div>
        );
    }
)