import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./topMenu.css";
import todoIcon from '../../images/icon-todo.svg';
import calendarIcon from '../../images/icon-calendar.svg';
import remainderIcon from '../../images/icon-reminders.svg';
import planningIcon from '../../images/icon-planning.svg';
import arrowDown from '../../images/icon-arrow-down.svg';
import arrowUp from '../../images/icon-arrow-up.svg';
import {AuthContext} from "../../store/AuthContext";
import SnackbarContext from "../../store/SnackbarContext";
import {useLogout} from "../../hooks/useLogout";

const Navigation = (props) => {
    const [activeArrow, setActiveArrow] = useState(null);
    const {logout} = useLogout();
    const authContext = useContext(AuthContext);
    const {user} = authContext;


        const navMainOptions = [{title: "Features", arrow: true}, {title: "Company", arrow: true}, {title: "Careers"}, {title: "About"}];
        const navOptions = {
            Features: [{
                title: "Todo",
                icon: todoIcon,
                path: "/todoapp"
                },
                {
                    title: "Calendar",
                    path: "/calendar",
                    icon: calendarIcon,
                },
                {
                    title: "Remainders",
                    icon: remainderIcon,
                    path: "/remainder"
                },
                {
                    title: "Planning",
                    icon: planningIcon,
                    path: "/planning"
                }
            ],
            Company: [
                {
                    title: "history"
                },
                {
                    title: "Our team"
                },
                {
                    title: "Blog"
                },
            ]
        }

        return(
            <div className="topMenu--container">
                <div className="topMenu-list--container">
                    <div className="logoMenu--container">
                        <Link to="/"><img src={logo} alt="logo"/></Link>
                    </div>
                    <ul className="menu-list">
                        {navMainOptions.map((main,k )=> {
                           return <li className="menu-item">
                                <p className="menuButton" onClick={main.arrow ? activeArrow === null ? ()=> setActiveArrow(k) : ()=>setActiveArrow(null) : null}>{main.title}
                                    {main.arrow &&
                                        <img style={{marginLeft: "5px"}} src={activeArrow !== k ? arrowDown : arrowUp} alt="menu icon"/>}
                                </p>
                                <div className="dropDown">
                                    {navOptions[main.title] && activeArrow === k &&
                                        <ul>
                                            {navOptions[main.title]?.map((option,k)=> {
                                                return <li onClick={()=>setActiveArrow(null)}>
                                                    {option.icon &&
                                                        <img src={option.icon} alt="menu icon"/>}
                                                    {option.path ? <Link to={option.path} >{option.title}</Link> : option.title}
                                                </li>
                                            })}
                                        </ul>
                                    }
                                </div>
                            </li>
                            })
                            }
                    </ul>
                </div>
                <div className="dimmer" style={activeArrow !== null ? {display: "block"} : {display: "none"}} onClick={()=>setActiveArrow(null)}></div>
                <div className="topMenu-button--container">
                    {user ?
                        <div>
                            <span>{`Witaj ${user.user.firstName}!`}</span>
                            <button className="loginButton menuButton" onClick={()=>logout()}><Link to="/">Log Out</Link></button>
                        </div>
                    :
                        <div>
                            <button className="loginButton menuButton"><Link to="/login">Log in</Link></button>
                            <button className="registerButton menuButton"><Link to="/register">Sign Up</Link></button>
                        </div>
                    }
                </div>
            </div>
        )
}



export default Navigation;