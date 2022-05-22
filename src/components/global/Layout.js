import { Box, Container, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
// import Footer from "./Footer";
import Header from "./Header";
import React from 'react';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 0,
        padding: theme.spacing(3),
        width: "100%"
    },
}));

function Layout(props) {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <Box className={classes.root}>
                <Header />
                <main
                    className={classes.content}
                >
                    <Toolbar />
                    <div className={classes.drawerHeader} />
                    {props.children}
                </main>
            </Box>
            {/* <Footer /> */}
        </Container>
    );
}

export default Layout;