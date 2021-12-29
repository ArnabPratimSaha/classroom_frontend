import "./App.css";

import IntroPage from "./pages/IntroPage/IntroPage";
import Signup from './pages/signup/Signup'
import Auth from './pages/Auth/Auth'
import Home from "./pages/Home/Home";
import Error from './pages/Error/Error';
import Calendar from './pages/Calendar/Calendar'
import {BrowserRouter as Router , Routes , Route, Outlet} from 'react-router-dom'

const useAuth = () => {
  // implement auth logic and redux
  return true;
}

const ProtectedRoutes = () => {
  const auth = useAuth();
  return auth ? <Outlet/> : <IntroPage/>
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
