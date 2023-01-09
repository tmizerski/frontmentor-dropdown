import {useContext, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";
import Snackbar from "../Snackbar/Snackbar";
import SnackbarContext from "../../store/SnackbarContext";
import {AuthContext} from "../../store/AuthContext";
import {useAuth} from "../../hooks/useAuth";
import ErrorHandler from "../ErrorHandler/ErrorHandler";

const SignUp = (props) => {
    const  [firstName, setFirstName] = useState('');
    const  [passOne, setPassOne] = useState('');
    const  [passTwo, setPassTwo] = useState('');
    const  [email, setEmail] = useState('');
    const {signupUser, error, loading} = useAuth();

    const snackbar = useContext(SnackbarContext);
    const authContext = useContext(AuthContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        signupUser(email, passOne, passTwo, firstName )

    }
    return (

        <div className="login-dimmer">
            <div className="login-form--container">
                <div className="login-text--container">
                    <h2>Welcome!</h2>
                    <span>Please complete sing up form</span>
                    <span style={{fontSize: "12px"}}>Have an account? Login
                        <Link to="/login" style={{marginLeft: "5px", color: "blue", textDecoration: "underline"}}>here</Link>
                    </span>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="firstName-input">First name:</label>
                    <input id="firstName-input" type="text" required placeholder="First name..."
                           onChange={(e) => setFirstName(e.target.value)}/>
                    <label htmlFor="email-input">Email:</label>
                    <input id="email-input" type="email" required placeholder="Email..."
                           onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="pass-input">Password:</label>
                    <input id="passOne-input" autoComplete="false" type="password" required
                           placeholder="Password..."
                           onChange={(e) =>  setPassOne(e.target.value)}/>
                    <label htmlFor="passRepeat-input">Repeat password:</label>
                    <input id="passTwo-input" autoComplete="false" type="password" required
                           placeholder="Password..."
                           onChange={(e) => setPassTwo(e.target.value)}/>
                    <div className="login-button--holder">
                        <button type="submit" >Sign Up!</button>
                        <button type="button"><Link to="/">Cancel</Link></button>
                    </div>
                    {error && <ErrorHandler error={error}/>}
                </form>
            </div>
        </div>
    )
}

export default SignUp;