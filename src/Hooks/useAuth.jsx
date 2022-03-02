import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import loadingChange from "../actions/loadingAction";
import login, { logout } from "../actions/userAction";

const useAuth = () => {
  const userState = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loadingReducer);


  useEffect(() => {

    const id = Cookies.get('id');
    const accesstoken = Cookies.get('accesstoken');
    const refreshtoken = Cookies.get('refreshtoken');

    if (!id || !accesstoken || !refreshtoken) {
      dispatch(logout());
      return; 
    }

    dispatch(loadingChange('START'));
    const headers = { id, accesstoken, refreshtoken };
    axios.get(`${process.env.REACT_APP_API}/user/info`, { headers }).then(res => {
      dispatch(loadingChange('STOP'));
      if (res.status === 200) {
        const data = res.data;
        dispatch(login({
          accesstoken: accesstoken,
          refreshtoken: refreshtoken,
          id: data.user.id,
          user: data.user
        }))
      }
    }).catch(err => {
      dispatch(loadingChange('STOP'));
      dispatch(logout())
    })
  }, [])
}

export default useAuth
