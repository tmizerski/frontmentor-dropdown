import {useContext} from "react";
import {AuthContext} from "../../store/AuthContext";
import {Outlet, useLocation, Navigate} from "react-router-dom";
import Unauthorized from "../../pages/Unauthorized/Unauthorized";


const Auth = ({allowedRoles}) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const location = useLocation();
    const authUser = () => {
        if (user) {
            if (allowedRoles.find((role) => user.user.role.includes(role)) || user.user.role === "admin") {
                return <Outlet/>
            } else {
                console.log("unauth")
                return <Navigate to="/unauthorized" state={{from: location}} replace={true}/>
            }
        } else {
            return <Navigate to="/register" replace={true}/>
        }
    }

    return (
        <>
            {authUser()}
        </>
    )
//     allowedRoles.find((role)=>user.user.role.includes(role) || user.user.role === "admin") ? (
//         <Outlet /> ) : user !== null ? <Navigate to="/unauthorized" replace={true}/>
//         : <Navigate to="/register" replace={true} />
// }
}

export default Auth;