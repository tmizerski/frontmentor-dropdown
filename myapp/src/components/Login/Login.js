import React from "react";
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="login-dimmer">
                <div className="login-form--container">
                    <div className="login-text--container">
                        <h2>Welcome back!</h2>
                        <span>Dont have account yet? Please SingUp here!</span>
                    </div>
                    <form>
                        <label htmlFor="login-input">Login:</label>
                        <input id="login-input" type="text" required placeholder="Login..."/>
                        <label htmlFor="pass-input">Password:</label>
                        <input id="pass-input" type="password" required placeholder="Password..."/>
                        <div className="login-button--holder">
                            <button>Sign in</button>
                            <button>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;