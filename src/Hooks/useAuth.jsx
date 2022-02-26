import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const useAuth = () => {

  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [id,setId]=useState(Cookies.get('id'));
  const [accesstoken,setAccesstoken]=useState(Cookies.get("accesstoken"));
  const [refreshtoken,setRefreshtoken]=useState(Cookies.get("refreshtoken"));
  const [name,setName]=useState();
  const [image,setImage]=useState();
  const [userInfo,setUserInfo]=useState({});
  
  const updateToken = (token) => {
    setAccesstoken(token);
  }
  useEffect(()=>{
    Cookies.set('accesstoken', accesstoken, {expires : 365});
  },[accesstoken])
  useEffect(() => {
    const func = async () => {
      if (!accesstoken || !refreshtoken || !id) {
        setIsAuth(false)
        setIsLoading(false)
        return;
      }

      try {
        const res = await axios({
          method: "get",
          url: `${process.env.REACT_APP_API}/user/info`,
          headers: {
            id,
            accesstoken,
            refreshtoken,
          },
        });
        if (res.status === 200) {
          setIsAuth(true);
          setIsLoading(false);
          const data = res.data;
          if (data && data.user) {
            setName(data.user.name);
            setImage(data.user.avatar);
            setUserInfo(data.user.userInfo)
          }
          if (res.data.accesstoken) {
            setAccesstoken(res.data.accesstoken);
          }
          return;
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setIsAuth(false);
          setIsLoading(false)
          window.location = '/error'
          return;
        }
      }

      setIsAuth(false);
      setIsLoading(false);
    };

    func();
  }, [])

  const login = () => {
    window.location=`${process.env.REACT_APP_API}/auth`
  }
  const logOut =async () => {
    try {
      if (!accesstoken || !refreshtoken || !id) {
        setIsAuth(false)
        setIsLoading(false)
        return false;
      }
      const res = await axios({
        method: "delete",
        url: `${process.env.REACT_APP_API}/user/logout`,
        headers: {
          id,
          accesstoken,
          refreshtoken,
        },
      });
      if (res.status === 200) {
        setIsAuth(false);
        setIsLoading(false)
        Cookies.remove('id')
        Cookies.remove('accesstoken')
        Cookies.remove('refreshtoken')
        setId(null);
        setAccesstoken(null);
        setRefreshtoken(null);
        return true;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setIsLoading(false)
        window.location = '/error'
        return false;
      }
    }
  }

  return [id, name, image, userInfo, accesstoken, refreshtoken, isLoading, login, logOut, updateToken]
}

export default useAuth
