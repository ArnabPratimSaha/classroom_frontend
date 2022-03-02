import React, { lazy, Suspense, useEffect } from 'react';
import "./App.css";
import IntroPage from "./pages/IntroPage/IntroPage";
import Signup from "./pages/signup/Signup";
import Auth from "./pages/Auth/Auth";
import Error from "./pages/Error/Error";
import Cookies from 'js-cookie';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import ProtectedRoutes from "./pages/ProtectedRoutes/ProtectedRoutes";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import LeftNavbar from "./components/LeftNavbar/LeftNavbar";
import ClassToDo from "./pages/ClassToDo/ClassToDo";
import ClassPeople from "./pages/ClassPeople/ClassPeople";
import { useDispatch, useSelector } from 'react-redux';

const Home = lazy(() => import("./pages/Home/Home"))
const Calendar = lazy(() => import("./pages/Calendar/Calendar"));
const ClassPage = lazy(() => import("./pages/ClassPage/ClassPage"));
const AssignmentPage = lazy(() => import("./pages/AssignmentPage/AssignmentPage"));

const unprotectedRoutes = new Set('/', '/signup', '/auth', '/error');

function App() {
  const loading=useSelector(state=>state.loadingReducer)
  const userState=useSelector(state=>state.userReducer);
  const dispatch=useDispatch();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/auth/:id/:accessToken/:refreshToken" element={<Auth />} />
          <Route path="/error" element={<Error />} />
          <Route element={
            <>
              <TopNavBar />
              <LeftNavbar />
              <ProtectedRoutes
                isAuth={true}
                isLoading={false}
              />
            </>
          }>
            <Route path="/"
              element={
                <Suspense fallback={<>Loading</>}>
                  <Outlet />
                </Suspense>
              }>
              <Route path="home" element={<Home />} />
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
