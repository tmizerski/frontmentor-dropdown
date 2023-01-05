import {useContext} from "react";
import {AuthContext} from "../store/AuthContext";

export const useLogout = () => {
    const authContext = useContext(AuthContext);
    const logout = () => {
        //remove user from storage
        localStorage.removeItem('user');
        //dispatch logout
        authContext.dispatch({type: 'LOGOUT'});
    }

    return {logout}
}