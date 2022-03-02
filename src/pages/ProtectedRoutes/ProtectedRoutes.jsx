import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom"
import login, { logout } from "../../redux/actions/userAction";
import loadingChange from "../../redux/actions/loadingAction";
import './ProtectedRoutes.css'

const ProtectedRoutes = ({}) => {
    const dispatch=useDispatch();
    const [status,setStatus]=useState("LOADING");
    useEffect(() => {
        const id = Cookies.get('id');
        const accessToken = Cookies.get('accessToken');
        const refreshToken = Cookies.get('refreshToken');
        if (!id || !accessToken || !refreshToken) {
            dispatch(logout());
            setStatus("NOT_AUTHORIZED")
            return;
        }
        dispatch(loadingChange('START'));
        const headers = { id, accesstoken: accessToken, refreshtoken:refreshToken };
        axios.get(`${process.env.REACT_APP_API}/user/info`, { headers }).then(res => {
            dispatch(loadingChange('STOP'));
            if (res.status === 200) {
                setStatus("AUTHORIZED")
                const data = res.data;
                dispatch(login({
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                    id: data.user.id,
                    user: data.user
                }))
            }
        }).catch(err => {
            setStatus("NOT_AUTHORIZED");
            dispatch(loadingChange('STOP'));
            dispatch(logout())
        })
      },[])
    return status==='LOADING' ? <div className="authentication">Authenticating...</div> : status==='AUTHORIZED' ? <Outlet/> : <Navigate to = '/'  />
}

export default ProtectedRoutes
