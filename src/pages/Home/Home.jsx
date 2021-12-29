import React, { useEffect } from 'react'
import './Home.css'
import Cookies from 'js-cookie'
import LeftNavbar from '../../components/LeftNavbar/LeftNavbar';
import TopNavBar from '../../components/TopNavBar/TopNavBar';

function Home() {

    useEffect(() => {

        const cookie = Cookies.get('id');

    },[])

    return (
        <div className='home-page__full-div'>
            <TopNavBar/>
            <LeftNavbar/>
        </div>
    )
}

export default Home
