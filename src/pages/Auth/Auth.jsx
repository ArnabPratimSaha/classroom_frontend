import React, { useEffect } from 'react'
import './Auth.css'
import { useSearchParams } from 'react-router-dom'
import Cookies from 'js-cookie'

function Auth() {

    const [searchParams] = useSearchParams();
    
    useEffect(() => {

        const id = searchParams.get('id');
        const accessToken = searchParams.get('accessToken');
        const refreshToken = searchParams.get('refreshToken');

        if(id && accessToken && refreshToken){

            Cookies.set('id' , id)
            Cookies.set('accessToken' , accessToken)
            Cookies.set('refreshToken' , refreshToken)

            window.location = '/home';

        }else{

            window.location = '/error';

        }


    },[])

    return (
        <div className=''>
            Auth
        </div>
    )
}


export default Auth
