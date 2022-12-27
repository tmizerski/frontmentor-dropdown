import React from "react";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
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
                        <input id="firstName-input" type="text" required placeholder="First name..."/>
                        <label htmlFor="lastName-input">Last name:</label>
                        <input id="lastName-input" type="text" required placeholder="Last name..."/>
                        <label htmlFor="login-input">Login:</label>
                        <input id="login-input" type="text" required placeholder="Login..."/>
                        <label htmlFor="pass-input">Password:</label>
                        <input id="pass-input" type="password" required placeholder="Password..."/>
                        <label htmlFor="passRepeat-input">Repeat password:</label>
                        <input id="pass-input" type="password" required placeholder="Password..."/>
                        <div className="login-button--holder">
                            <button>Sign Up!</button>
                            <button>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUp;