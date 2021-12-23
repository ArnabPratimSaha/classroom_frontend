import React, { useEffect } from 'react'
import './Home.css'
import Cookies from 'js-cookie'

function Home() {

    useEffect(() => {

        const cookie = Cookies.get('authToken');
        console.log(cookie);

    },[])

    return (
        <div>
            THIS IS HOME
        </div>
    )
}

export default Home
