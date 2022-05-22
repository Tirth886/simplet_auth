import SimpletRoutes from '../../helper/Routes';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function Home() {
    const navigate = useNavigate()
    useEffect(() => {
        navigate(SimpletRoutes.HOME.LOGIN)
    })
    return (<></>)
}

export default Home;