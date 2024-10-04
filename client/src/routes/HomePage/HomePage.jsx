import './Homepage.css'
import {Link} from "react-router-dom";

const HomePage = () => {

    return (
        <div className='homePage'>
            <img src='/orbital.png' className='orbital' />
            <div className='left'>
                <h1> Leon App</h1>
                <h2> Hands on practice step by step using react router</h2>
                <h3> Original context is from Youtube as the course against react + gemeni</h3>
                <Link to='/dashboard'>Get Started </Link>
            </div>
            <div className='right'>
                <div className='imageContainer'>
                    <div className='bgContainer'>
                        <div className='bg' >

                        </div>
                    </div>
                    <img src='/bot.png' alt=''className='botImg' />
                </div>
            </div>

        </div>
    )
}

export default HomePage