import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

const ProtectedRoute = ({children}) => {
    const auth = useAuth();
    console.log("rerender", auth)
    console.log(auth.user)
    if(!auth.user){
        return <Navigate to="/login"/>
    }

    return children
}

export default ProtectedRoute;