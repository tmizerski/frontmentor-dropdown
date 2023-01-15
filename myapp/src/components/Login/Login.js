import React, {useContext, useState} from "react";
import './Login.css';
import {useLogin} from "../../hooks/useLogin";
import {Link, useLocation, Navigate, useNavigate} from "react-router-dom";
import {useSnackbar} from "../../hooks/useSnackbar";
import Snackbar from "../Snackbar/Snackbar";
import SnackbarContext from "../../store/SnackbarContext";
import ErrorHandler from "../ErrorHandler/ErrorHandler";


const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newError, setNewError] = useState("");
    const {loginUser, error, loading} = useLogin();
    const navigate = useNavigate();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        loginUser(email, password);
        navigate("/")

    }

    return (
        <div className="login-dimmer">
            <div className="login-form--container">
                <div className="login-text--container">
                    <h2>Welcome back!</h2>
                    <span>Dont have account yet? Please SingUp <Link to={"/register"} style={{color: "blue", textDecoration: "underline"}}>here</Link>!</span>
                </div>
                <form onSubmit={(e)=> handleOnSubmit(e)}>
                    <label htmlFor="login-input">Email:</label>
                    <input id="login-input" type="email" required placeholder="Login..." onChange={(e)=>setEmail(e.target.value)}/>
                    <label htmlFor="pass-input">Password:</label>
                    <input id="pass-input" type="password" required placeholder="Password..." onChange={(e)=>setPassword(e.target.value)}/>
                    <div className="login-button--holder">
                        <button type="submit">Log in</button>
                        <button type="button">Cancel</button>
                    </div>
                    {error && <ErrorHandler error={error} />}
                </form>
            </div>
        </div>
    )
}

export default Login;