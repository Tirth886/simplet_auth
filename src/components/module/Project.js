import { Box, Card, CardActionArea, CardContent, makeStyles, Typography } from "@material-ui/core";
import { AddOutlined } from "@material-ui/icons";
// import useWindowDimensions from "../../utility/General";
import Layout from "../global/Layout"
// import BackImage from '../icons/illustration-b@2x.png'



function Project() {
    // const dimention = useWindowDimensions();
    const useStyles = makeStyles((theme) => ({

        projectContainer: {
            display: "flex",
            flexDirection: 'row',
            flexWrap: "wrap",
            "& div.card-content": {
                paddingTop: "5rem",
                paddingBottom: "5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "& p.p-label": {
                    fontWeight: "500",
                    fontSize: "1rem"
                },
                "& svg.add-icon": {
                    fontSize: "2rem"
                }
            }
        }
    }))
    const classes = useStyles()

    return (
        <Layout>
            <Box width={"100%"}>
                <div className={classes.projectContainer}>
                    <Box width={250}>
                        <Card>
                            <CardActionArea>
                                <CardContent className="card-content">
                                    <Box textAlign={"center"}>
                                        <AddOutlined className="add-icon" color="primary" />
                                        <Typography className="p-label" variant="body2" color="primary">
                                            Add Project
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                </div>
            </Box>
        </Layout>
    )
}

export default Project