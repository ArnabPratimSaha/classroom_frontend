import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = ({id , isLoading}) => {
    return isLoading ? <div>Authenticating...</div> : (id ? <Outlet/> : <Navigate to = '/' replace = {true} />)
}

export default ProtectedRoutes
