import React from "react";
import logo from "../../images/logo.svg";
import "./topMenu.css";

class Navigation extends React.Component{
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <div className="topMenu-container">
                <div className="logoMenu-container">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="topMenu-list-container">
                    <ul className="menu-list">
                        <li>Features</li>
                        <li>Company</li>
                        <li>Careers</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="topMenu-button-container">
                    <button className="loginButton">Login</button>
                    <button className="loginButton">Register</button>
                </div>
            </div>
        )
    }
}

export default Navigation;