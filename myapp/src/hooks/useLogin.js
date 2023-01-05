import {useContext, useState} from "react";
import {AuthContext} from "../store/AuthContext";
import axios from "axios";

export const useLogin = () => {
    const [error, setError ] = useState(null);
    const [loading, setIsLoading] = useState(null)
    const authContext = useContext(AuthContext);

    const loginUser = (email, password) => {
        setIsLoading(true);
        setError(null);
       axios.post("http://localhost:5000/login", {
            email,
            password
        }).then( result => {
           localStorage.setItem('user', result.data);
           authContext.dispatch({type: 'LOGIN', payload: result.data});
           setIsLoading(false)
       }).catch(error => {
           setError(error.response.data)
       })

    }
    return {loginUser, loading, error}
}