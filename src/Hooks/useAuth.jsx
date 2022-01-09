import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const useAuth = () => {

    const [isAuth , setIsAuth] = useState(false);
    const [isLoading , setIsLoading] = useState(true)

    useEffect(() => {
        const func = async () => {
            const accesstoken = Cookies.get("accessToken");
            const refreshtoken = Cookies.get("refreshToken");
            const id = Cookies.get("id");

            if(!accesstoken || !refreshtoken || !id){
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
                setIsLoading(false)
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
    },[])

    const login = () => {

    }

    const signup = () => {

    }

    const logOut = () => {
        Cookies.remove('id')
        Cookies.remove('accessToken')
        Cookies.remove('refreshToken')

        setIsAuth(false)
    }

    return [isAuth , isLoading , login , signup , logOut]
}

export default useAuth
