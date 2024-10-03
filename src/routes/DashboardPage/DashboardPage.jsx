import './DashboardPage.css'
import {useAuth} from "@clerk/clerk-react";
import {useEffect} from "react";
import {Outlet, useNavigate } from "react-router-dom";

const DashboardPage = () => {

    const { userId, isLoaded } = useAuth()

    const navigate = useNavigate()

    useEffect(() => {
        if (isLoaded && !userId) {
            navigate('/sign-in')
        }
    }, [isLoaded, userId, navigate]);

    if (!isLoaded) {
        return <div >
            Loading...
        </div>
    }

    return (
        <div className='dashboardPage' >
            welcome to DashboardPage
        </div>
    )
}

export default DashboardPage