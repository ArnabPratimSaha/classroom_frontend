import React, { useEffect } from 'react'
import './Auth.css'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'
import login from '../../actions/userAction'
import loadingChange from '../../actions/loadingAction'

function Auth() {

    const { id, accesstoken, refreshtoken } = useParams();
    const dispatch = useDispatch();
    const loading=useSelector(state=>state.loadingReducer);
    const userState=useSelector(state=>state.userReducer);
    const navigate=useNavigate();
    

    useEffect(() => {
        if(id && accesstoken && refreshtoken){
            dispatch(loadingChange("START"))
            const headers={id,accesstoken,refreshtoken};
            axios.get(`${process.env.REACT_APP_API}/user/info`,{headers}).then(res=>{
                dispatch(loadingChange('STOP'))
                if(res.status===200){
                    
                    const data=res.data;
                    Cookies.set('id' , id , {expires : 365})
                    Cookies.set('accesstoken', accesstoken, { expires: 365 })
                    Cookies.set('refreshtoken', refreshtoken, { expires: 365 })
                    dispatch(login({
                            accesstoken: accesstoken,
                            refreshtoken: refreshtoken,
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
