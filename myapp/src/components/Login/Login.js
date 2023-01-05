import React, {useContext, useState} from "react";
import './Login.css';
import {useLogin} from "../../hooks/useLogin";
import {Link} from "react-router-dom";
import {useSnackbar} from "../../hooks/useSnackbar";
import snackbar from "../Snackbar/Snackbar";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {loginUser, error, loading} = useLogin();
    const {showSnackbar, isDisplayed, Snackbar} = useSnackbar();


    const handleOnSubmit = (e) => {
        e.preventDefault();
        loginUser(email, password);
        if(error){
            console.log(error)
            showSnackbar(error, "error");
        }
    }

    return (
        <div className="login-dimmer">
            <div className="login-form--container">
                <div className="login-text--container">
                    <h2>Welcome back!</h2>
                    <span>Dont have account yet? Please SingUp <Link to={"/signup"} style={{color: "blue", textDecoration: "underline"}}>here</Link>!</span>
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
                </form>
            </div>
        </div>
    )
}

export default Login;