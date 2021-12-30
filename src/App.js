import "./App.css";

import IntroPage from "./pages/IntroPage/IntroPage";
import Signup from './pages/signup/Signup'
import Auth from './pages/Auth/Auth'
import Home from "./pages/Home/Home";
import Error from './pages/Error/Error';
import Calendar from './pages/Calendar/Calendar'
import {BrowserRouter as Router , Routes , Route, Outlet} from 'react-router-dom'
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from 'axios'

const useAuth = () => {
  // implement auth logic and redux

  const [isAuth , setIsAuth] = useState(false);
  const [isLoading , setIsLoading] = useState(true);

  useEffect(() => {
    
    const func = async() => {
      
      
      const accesstoken = Cookies.get('accessToken');
      const refreshtoken = Cookies.get('refreshToken');
      const id = Cookies.get('id');
      
      try {
        
        const res = await axios({
          method : 'get',
          url : `${process.env.REACT_APP_API}/user/info`,
          headers : {
            id , accesstoken , refreshtoken
          }
        })
        
        if(res.status === 200){
          setIsAuth(true);
        }

      } catch (error) {
        
        if(axios.isAxiosError(error)){

          console.log(error.message);

        }

      }

      setIsLoading(false);

    }

    func();

  },[])

  return {isAuth  , isLoading};
}

const ProtectedRoutes = () => {

  const {isAuth , isLoading} = useAuth();

  return isLoading ? <div>Loading</div>: (isAuth ? <Outlet/> : <IntroPage/>) 
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path = '/' element = {<IntroPage/>}/>
          <Route path = '/signup' element = {<Signup/>}/>
          <Route path = '/auth' element = {<Auth/>}/>

          <Route element = {<ProtectedRoutes/>}>

            <Route path = '/home' element = {<Home/>}/>
            <Route path = '/calendar' element = {<Calendar/>}/>
            <Route path = '/error' element = {<Error/>}/>

          </Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
