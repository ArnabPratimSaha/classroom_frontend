import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = ({isAuth , isLoading}) => {
    return isLoading ? <div>Authenticating...</div> : (isAuth ? <Outlet/> : <Navigate to = '/' replace = {true} />)
}

export default ProtectedRoutes
