import "./App.css";
import IntroPage from "./pages/IntroPage/IntroPage";
import Auth from './pages/Auth/Auth'
import Home from "./pages/Home/Home";
import Error from './pages/Error/Error';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path = '/' element = {<IntroPage/>}/>
          <Route path = '/auth' element = {<Auth/>}/>
          <Route path = '/home' element = {<Home/>}/>
          <Route path = '/error' element = {<Error/>}/>
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;
