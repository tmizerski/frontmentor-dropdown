import {useContext} from "react";
import {AuthContext} from "../../store/AuthContext";
import {Outlet, useLocation} from "react-router";
import {Navigate} from "react-router-dom";

const Auth = ({allowedRoles}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();

    return allowedRoles.find((role)=>user.user.role.includes(role) || user.user.role === "admin") ? (
        <Outlet /> ) : user ? <Navigate to="/unauthorized" state={{from:location}} replace/>
        : <Navigate to="/register" state={{from: location}} replace />
}

export default Auth;