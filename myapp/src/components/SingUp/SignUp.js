import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./SignUp.css";
import Snackbar from "../Snackbar/Snackbar";
import SnackbarContext from "../../store/snackbar-context";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            login: null,
            passOne: null,
            passTwo: null,
        }
    }


    addUser(e) {
        e.preventDefault();
        if(this.state.passOne !== this.state.passTwo) return this.context.displayMsg("Podane hasła różnią się");
        // axios.post("http://localhost:3500/addUser", {
        //
        // })
    }

    render(){
        return(
            <div className="login-dimmer">
                <div className="login-form--container">
                    <div className="login-text--container">
                        <h2>Welcome!</h2>
                        <span>Please complete sing up form</span>
                    </div>
                    <form>
                        <label htmlFor="firstName-input">First name:</label>
                        <input id="firstName-input" type="text" required placeholder="First name..." onChange={(e)=>this.state.firstName = e.target.value}/>
                        <label htmlFor="lastName-input">Last name:</label>
                        <input id="lastName-input" type="text" required placeholder="Last name..." onChange={(e)=>this.state.lastName = e.target.value}/>
                        <label htmlFor="login-input">Login:</label>
                        <input id="login-input" type="text" required placeholder="Login..." onChange={(e)=>this.state.login = e.target.value}/>
                        <label htmlFor="pass-input">Password:</label>
                        <input id="pass-input" type="password" required placeholder="Password..." onChange={(e)=>this.state.passOne = e.target.value}/>
                        <label htmlFor="passRepeat-input">Repeat password:</label>
                        <input id="pass-input" type="password" required placeholder="Password..." onChange={(e)=>this.state.passTwo = e.target.value}/>
                        <div className="login-button--holder">
                            <button onClick={(e)=>this.addUser(e)}>Sign Up!</button>
                            <button><Link to="/">Cancel</Link></button>
                        </div>
                    </form>
                </div>
                {this.context.isDisplayed && <Snackbar />}
            </div>

        )
    }
}

SignUp.contextType = SnackbarContext;

export default SignUp;