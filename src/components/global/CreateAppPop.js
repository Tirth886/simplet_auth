import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import { ReactComponent as NoApp } from '../icons/no_app.svg'
import theme from '../../Theme'
import { AddOutlined } from '@material-ui/icons';
import { useState } from 'react';
import AppDialog from './AppDialog';


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

const contentWidth = 339
const fullscreen = getWindowDimensions()['width']

const contentHeight = 120
const fullscreenHeight = getWindowDimensions()['height']

const useStyle = makeStyles((theme) => ({
    flex_wrap_no_content: {
        width: "calc(" + fullscreen + "px - " + contentWidth + "px)",
        height: "calc(" + fullscreenHeight + "px - " + contentHeight + "px)",
    },
    heading: {
        fontWeight: "bolder"
    },
    caption: {
        fontSize: "1.2rem",
        fontWeight: "600",
    }
}))

function CreateAppPop() {
    const classes = useStyle()
    let [appDialogOpen, setappDialogOpen] = useState(false)

    function onCLickCreateApp() {
        setappDialogOpen(true)
    }

    return (
        <>
            <AppDialog setOpen={setappDialogOpen} isOpen={appDialogOpen} />
            <Box display={"flex"} alignItems="center" justifyContent={"center"} className={classes.flex_wrap_no_content} flexGrow={"1"}>
                <NoApp width="50%" />
                <Box>
                    <Typography style={theme.palette.primary2} variant="h4">
                        <strong>The page you are looking for not avaible!</strong>
                    </Typography>
                    <Typography style={theme.palette.primary3} className={classes.caption} variant="caption">
                        Look like you've not create app
                    </Typography>
                    <Box textAlign={"start"} my={3}>
                        <Button onClick={onCLickCreateApp} variant='outlined' startIcon={<AddOutlined />} style={theme.palette.buttonPrimary}>Create app</Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default CreateAppPop;