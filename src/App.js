import React, { lazy, Suspense } from 'react';
import "./App.css";
import IntroPage from "./pages/IntroPage/IntroPage";
import Signup from "./pages/signup/Signup";
import Auth from "./pages/Auth/Auth";
import Error from "./pages/Error/Error";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import useAuth from "./Hooks/useAuth";
import ProtectedRoutes from "./pages/ProtectedRoutes/ProtectedRoutes";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import LeftNavbar from "./components/LeftNavbar/LeftNavbar";
import ClassToDo from "./pages/ClassToDo/ClassToDo";
import ClassPeople from "./pages/ClassPeople/ClassPeople";


const Home = lazy(() => import("./pages/Home/Home"))
const Calendar = lazy(() => import("./pages/Calendar/Calendar"));
const ClassPage = lazy(() => import("./pages/ClassPage/ClassPage"));
const AssignmentPage = lazy(() => import("./pages/AssignmentPage/AssignmentPage"));

const unprotectedRoutes = new Set('/', '/signup', '/auth', '/error');

function App() {

  const [id, name, image, userInfo,  accesstoken, refreshtoken, isLoading, login, logOut, updateToken] = useAuth();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/error" element={<Error />} />
          <Route element={
            <>
              <TopNavBar name={name} image={image}  id={id} accesstoken={accesstoken} refreshtoken={refreshtoken} logOut={logOut} updateToken={updateToken} />
              <LeftNavbar />
              <ProtectedRoutes
                id={id}
                isLoading={isLoading}
              />
            </>
          }>
            <Route path="/"
              element={
                <Suspense fallback={<>Loading</>}>
                  <Outlet />
                </Suspense>
              }>
              <Route path="home" element={<Home name={name} image={image}  id={id} accesstoken={accesstoken} refreshtoken={refreshtoken} logOut={logOut} updateToken={updateToken}/>} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="class/:classId" element={<ClassPage />} />
              <Route path="class-todo/:classId" element={<ClassToDo />} />
              <Route path="class-people/:classId" element={<ClassPeople />} />
              <Route path="assignment/:assignmentId" element={<AssignmentPage />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
