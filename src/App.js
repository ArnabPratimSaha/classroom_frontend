import "./App.css";

import IntroPage from "./pages/IntroPage/IntroPage";
import Signup from "./pages/signup/Signup";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Calendar from "./pages/Calendar/Calendar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import useAuth from "./Hooks/useAuth";
import ProtectedRoutes from "./pages/ProtectedRoutes/ProtectedRoutes";
import ClassPage from "./pages/ClassPage/ClassPage";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import LeftNavbar from "./components/LeftNavbar/LeftNavbar";
import ClassToDo from "./pages/ClassToDo/ClassToDo";
import ClassPeople from "./pages/ClassPeople/ClassPeople";
import AssignmentPage from "./pages/AssignmentPage/AssignmentPage";

const unprotectedRoutes = new Set('/','/signup','/auth','/error');

function App() {

  const [isAuth , isLoading , login , signup , logOut] = useAuth();

  return (
    <div className="App">
      <Router>
        {!unprotectedRoutes.has(window.location.pathname) && isAuth && <TopNavBar/>}
        {!unprotectedRoutes.has(window.location.pathname) && isAuth && <LeftNavbar/>}
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/error" element={<Error />} />

          <Route element={
            <ProtectedRoutes
            isAuth = {isAuth}
            isLoading = {isLoading}
           />}>
              <Route path="/home" element={<Home />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/class/:classId" element={<ClassPage />} />
              <Route path="/class-todo/:classId" element={<ClassToDo />} />
              <Route path="/class-people/:classId" element={<ClassPeople />} />
              <Route path="/assignment/:assignmentId" element={<AssignmentPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
          <Route/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
