// import { useNavigate } from "react-router-dom";
import CreateAppPop from "../global/CreateAppPop";
import Layout from "../global/Layout";

function Dashboard(props) {
    // let navigate = useNavigate()
    // const onClick = (e) => {
    //     navigate('/login')
    // }
    return (
        <Layout>
            <CreateAppPop />
        </Layout>
    );
}

export default Dashboard;