import React, { useEffect, useState } from 'react';
import { Divider, List, ListItem, Toolbar, AppBar, Drawer, makeStyles, ListItemIcon, ListItemText, CssBaseline, Button, Box, Avatar, IconButton } from '@material-ui/core'
import { DashboardOutlined, PagesOutlined, SettingsApplicationsOutlined, BrushOutlined, AccountTreeOutlined, DescriptionOutlined, WbIncandescentOutlined, AddOutlined, SettingsOutlined, NotificationImportantOutlined, Brightness4Outlined, AssessmentOutlined, ContactSupport, AppsOutlined } from '@material-ui/icons'
import LogoSi from '../icons/logo.png'
import SimpletRoutes from '../../helper/Routes';
import { useLocation } from 'react-router-dom';

const drawerWidthPaper = 240;
const drawerWidth = 130;

function Header(prop) {
    const [drawerVisible, setDrawerVisibility] = useState(true)
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        appBar: {
            width: `calc(100% - ${drawerVisible ? 0 : drawerWidthPaper}px)`,
            marginLeft: drawerWidthPaper,
            zIndex: theme.zIndex.drawer + 1,
            background: "rgba(255,255,255,0.7)",
            boxShadow: "0px 0px 0px 0px",
            borderStyle: "solid",
            borderColor: "#E7EBF0",
            borderBottomWidth: "thin",
            borderLeftWidth: "thin",
        },
        divider: {
            backgroundColor: "transparent",
            height: "0px",
            border: "1px solid #E7EBF0"
        },
        border__: {
            border: "1px solid #E7EBF0"
        },
        toolbar: theme.mixins.toolbar,
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidthPaper,
        },
        logo: {
            filter: "saturate(0.5)",
        },
        drawerContainer: {
            overflow: 'auto',
            height: "100%",
            position: "relative"
        },
        createAppTop: { display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    }));
    const classes = useStyles();
    const location = useLocation()
    const pathname = location.pathname.replace("/", "").toUpperCase()

    useEffect(() => {
        if (typeof SimpletRoutes[pathname] !== "undefined" && typeof SimpletRoutes[pathname]['CONFIG'] !== "undefined" && typeof SimpletRoutes[pathname]['CONFIG']['drawerVisible'] === "boolean") {
            let drawerVisibleVal = SimpletRoutes[pathname]['CONFIG']['drawerVisible']

            setDrawerVisibility(!drawerVisibleVal)
        }
        // eslint-disable-next-line
    }, [])

    // const [age, setAge] = useState('');
    // const [open, setOpen] = useState(false);

    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    // const handleOpen = () => {
    //     setOpen(true);
    // };
    const listItems = [
        {
            name: "Dashboard",
            selected: false,

            icon: <DashboardOutlined color='primary' />
        },
        {
            name: "Project",
            selected: false,
            icon: <PagesOutlined color='primary' />
        },
        {
            name: "App",
            selected: true,
            icon: <AppsOutlined color='primary' />
        },
        {},
        {
            name: "Theme",
            selected: false,
            icon: <BrushOutlined color='primary' />
        },
        {
            name: "Api",
            selected: false,
            icon: <AccountTreeOutlined color='primary' />
        },
        {
            name: "Report",
            selected: false,
            icon: <AssessmentOutlined color='primary' />
        },
        {
            name: "Docs",
            selected: false,
            icon: <DescriptionOutlined color='primary' />
        },
        {
            selected: false,
            name: "Example",
            icon: <WbIncandescentOutlined color='primary' />
        },
        {
            name: "Setting",
            selected: false,
            icon: <SettingsApplicationsOutlined color='primary' />
        }
    ]

    return (
        <>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Box display={"flex"} alignItems="center" justifyContent={"flex-end"} flexGrow={1}>
                        <Box ml={2}>
                            <Avatar variant='rounded'></Avatar>
                        </Box>
                        <Box ml={2}>
                            <IconButton className={classes.border__} size='small' color='primary'>
                                <Brightness4Outlined />
                            </IconButton>
                        </Box>
                        <Box ml={2}>
                            <IconButton className={classes.border__} size='small' color='primary'>
                                <NotificationImportantOutlined />
                            </IconButton>
                        </Box>
                        <Box ml={2}>
                            <IconButton className={classes.border__} size='small' color='primary'>
                                <SettingsOutlined />
                            </IconButton>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                hidden={drawerVisible}
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerContainer}>
                    <Divider className={classes.divider} />

                    <List>
                        <ListItem key="top">
                            <div className={classes.createAppTop}>
                                <Avatar variant='rounded' className={classes.logo} src={LogoSi} />
                                <Button size='small' className={classes.button} onClick={() => { }} variant="outlined" startIcon={<AddOutlined />}>
                                    Create App
                                </Button>
                                {/* <FormControl className={classes.formControl}>
                                    <Menu
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        open={open}
                                        onClose={handleClose}
                                        onOpen={handleOpen}
                                        value={age}
                                        style={{ left: "81.5px" }}
                                        onChange={handleChange}>
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Menu>
                                </FormControl> */}
                            </div>
                        </ListItem>
                        <Divider className={classes.divider} />
                        {listItems.map((items) => (
                            Object.keys(items).length > 0 ? (
                                <ListItem selected={items.selected} button key={items.name}>
                                    <ListItemIcon>{items.icon}</ListItemIcon>
                                    <ListItemText primary={items.name} />
                                </ListItem>
                            ) : <Divider key={+new Date()} className={classes.divider} />
                        ))}
                    </List>
                    <List style={{ position: "absolute", bottom: 0, width: "100%" }} >
                        <ListItem button>
                            <ListItemIcon><ContactSupport color='primary' /></ListItemIcon>
                            <ListItemText>Support</ListItemText>
                        </ListItem>
                    </List>
                    {/* <List>
                        {['Setting', 'Theme', 'Api', 'Report', 'Docs'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List> */}
                </div>
            </Drawer>
        </>
    );
}

export default Header;