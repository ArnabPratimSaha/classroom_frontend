import React, { useEffect } from 'react'
import './Home.css'
import Cookies from 'js-cookie'
import LeftNavbar from '../../components/LeftNavbar/LeftNavbar';
import TopNavBar from '../../components/TopNavBar/TopNavBar';
import ClassCard from '../../components/ClassCard/ClassCard';

function Home() {

    // useEffect(() => {

        

    // },[])

    return (
        <div className='home-page__full-div'>
            <TopNavBar/>
            <LeftNavbar/>
            <div className='home-page__classes__div'>
                {/* <div className='home-page__recent-classes__div'>

                </div> */}
                <div className='home-page__enrolled-classes__div'>
                    <ClassCard
                        adminName = 'Sushanta Saren'
                        className = 'Object Oriented Programming'
                        department = 'Computer Science and Engineering'
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
