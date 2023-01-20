import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import "./topMenu.css";
import {AuthContext} from "../../store/AuthContext";
import {useLogout} from "../../hooks/useLogout";


export const navMainOptions = [
    {title: "Tablica", value: "table"},
    {title: "Użytkownicy", value: "users"},
    {title: "Salony", value: "parlours"},
    {title: "Kontrahenci", value: "contractors"},
    {title: "Regiony", value: "regions"},
    {title: "Zestawienia", value: "statements"},
    {title: "Zalando", value: "zalando"},
];


const Navigation = (props) => {
    const {logout} = useLogout();
    const authContext = useContext(AuthContext);
    const {user} = authContext;


        return(
            <div className="topMenu--container">
                <div className="topMenu-list--container">
                    <ul className="menu-list">
                        {navMainOptions.map((option,k )=> {
                           return  <li className="menu-item">
                                <Link
                                    to={option.value}
                                    // onClick={}
                                >
                                    {option.title}
                                </Link>

                            </li>
                            })
                            }
                    </ul>
                </div>
                {/*<div className="dimmer"></div>*/}
                <div className={"topMenu-button--container"}>
                    {user ?
                        <div>
                            <span style={{marginRight: "10px"}}>{`Witaj ${user.user.firstName}!`}</span>
                            <button className="loginButton menuButton" onClick={()=>logout()}><Link to="/">Log Out</Link></button>
                        </div>
                    :
                        <div>
                            <button className="loginButton menuButton" style={{marginRight: "10px"}}><Link to="/login">Log in</Link></button>
                            <button className="registerButton menuButton"><Link to="/register">Sign Up</Link></button>
                        </div>
                    }
                </div>
            </div>
        )
}



export default Navigation;