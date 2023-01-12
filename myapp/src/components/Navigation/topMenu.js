import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import "./topMenu.css";
import todoIcon from '../../images/icon-todo.svg';
import calendarIcon from '../../images/icon-calendar.svg';
import remainderIcon from '../../images/icon-reminders.svg';
import planningIcon from '../../images/icon-planning.svg';
import arrowDown from '../../images/icon-arrow-down.svg';
import arrowUp from '../../images/icon-arrow-up.svg';
import {AuthContext} from "../../store/AuthContext";
// import SnackbarContext from "../../store/SnackbarContext";
import {useLogout} from "../../hooks/useLogout";

const Navigation = (props) => {
    const [activeArrow, setActiveArrow] = useState(null);
    const {logout} = useLogout();
    const authContext = useContext(AuthContext);
    const {user} = authContext;


        const navMainOptions = [
            {title: "Tablica", value: "table"},
            {title: "Użytkownicy", value: "users"},
            {title: "Salony", value: "parlours"},
            {title: "Kontrahenci", value: "contractors"},
            {title: "Regiony", value: "regions"},
            {title: "Zestawienia", value: "statements"},
            {title: "Zalando", value: "zalando"},
        ];


        return(
            <div className="topMenu--container">
                <div className="topMenu-list--container">
                    <ul className="menu-list">
                        {navMainOptions.map((option,k )=> {
                           return  <li className="menu-item">
                                <Link
                                    to={`/${option.value}`}
                                >
                                    {option.title}
                                </Link>

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