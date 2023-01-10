import {useContext, useState} from "react";
import {AuthContext} from "../store/AuthContext";
import axios from "axios";

export const useAuth = () => {
    const [error, setError] = useState(null);
    const [loading, setIsLoading] = useState(null)
    const authContext = useContext(AuthContext);

    const signupUser = async (email, passOne, passTwo, firstName) => {
        setIsLoading(true);
        setError(null);
        if (passOne !== passTwo) return setError("Your passwords are different")
        try {
            const result = await axios.post("http://localhost:5000/signup", {
                email,
                password: passOne,
                firstName,
                role: "user"
            })

            if (result.status === 200) {
                localStorage.setItem('user', JSON.stringify(result.data));
                authContext.dispatch({type: 'LOGIN', payload: result.data});
                setIsLoading(false)
            }
        } catch (error) {
            setError(error.response.data)
        }

    }
    return {signupUser, loading, error}
}