import "./App.css";
import IntroPage from "./pages/IntroPage/IntroPage";
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <button onClick={()=>{window.location='http://localhost:5000/auth'}}>Google</button> */}
      <Router>
        <Routes>

          <Route path = '/' element = {<IntroPage/>}/>
          
        </Routes>
      </Router>

    </div>
  );
}

export default App;
