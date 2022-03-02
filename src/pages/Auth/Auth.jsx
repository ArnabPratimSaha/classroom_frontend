import React, { useEffect } from 'react'
import './Auth.css'
import { useNavigate, useParams } from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import login from '../../redux/actions/userAction'
import loadingChange from '../../redux/actions/loadingAction'

function Auth() {

    const { id, accessToken, refreshToken } = useParams();
    const dispatch = useDispatch();
    const navigate=useNavigate();
    

    useEffect(() => {
        if(id && accessToken && refreshToken){
            dispatch(loadingChange("START"))
            const headers={id,accesstoken:accessToken,refreshtoken:refreshToken};
            axios.get(`${process.env.REACT_APP_API}/user/info`,{headers}).then(res=>{
                dispatch(loadingChange('STOP'))
                if(res.status===200){
                    
                    const data=res.data;
                    Cookies.set('id' , id , {expires : 365})
                    Cookies.set('accessToken', accessToken, { expires: 365 })
                    Cookies.set('refreshToken', refreshToken, { expires: 365 })
                    dispatch(login({
                            accessToken: accessToken,
                            refreshToken: refreshToken,
                            id: data.user.id,
                            user: data.user
                        }))
                }
                navigate('/home');
            }).catch(err=>{
                dispatch(loadingChange('STOP'))
                navigate('/error');
            })

        }else{

            // window.location = '/error';

        }

    },[])

    return (
        <div className=''>
            Auth
        </div>
    )
}


export default Auth
