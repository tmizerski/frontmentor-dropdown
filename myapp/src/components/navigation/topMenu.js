import React from "react";
import logo from "../../images/logo.svg";
import "./topMenu.css";
import todoIcon from '../../images/icon-todo.svg';
import calendarIcon from '../../images/icon-calendar.svg';
import remainderIcon from '../../images/icon-reminders.svg';
import planningIcon from '../../images/icon-planning.svg';
import arrowDown from '../../images/icon-arrow-down.svg';
import arrowUp from '../../images/icon-arrow-up.svg';

class Navigation extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            activeArrow: null
        }

        this.navMainOptions = [{title: "Features", arrow: true}, {title: "Company", arrow: true}, {title: "Careers"}, {title: "About"}];

        this.navOptions = {
            Features: [{
                title: "Todo",
                icon: todoIcon,
            },
                {
                    title: "Calendar",
                    icon: calendarIcon,
                },
                {
                    title: "Remainders",
                    icon: remainderIcon,
                },
                {
                    title: "Planning",
                    icon: planningIcon,
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
    }

    render() {
        return(
            <div className="topMenu-container">
                <div className="topMenu-list-container">
                    <div className="logoMenu-container">
                        <img src={logo} alt="logo"/>
                    </div>
                    <ul className="menu-list">
                        {this.navMainOptions.map((main,k )=> {
                           return <li className="menu-item">
                                <p className="menuButton" onClick={this.state.activeArrow === null ? ()=>this.setState({activeArrow: k}) : ()=>this.setState({activeArrow: null})}>{main.title}
                                    {main.arrow &&
                                        <img style={{marginLeft: "5px"}} src={this.state.activeArrow !== k ? arrowDown : arrowUp} alt="menu icon"/>}
                                </p>
                                <div className="dropDown">
                                    {this.navOptions[main.title] && this.state.activeArrow === k &&
                                        <ul>
                                            {this.navOptions[main.title]?.map((option,k)=> {
                                                return <li>
                                                    {option.icon &&
                                                        <img src={option.icon} alt="menu icon"/>}
                                                    {option.title}
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
                <div className="dimmer" style={this.state.activeArrow !== null ? {display: "block"} : {display: "none"}} onClick={()=>this.setState({activeArrow: null})}></div>
                <div className="topMenu-button-container">
                    <button className="loginButton menuButton">Login</button>
                    <button className="registerButton menuButton">Register</button>
                </div>
            </div>
        )
    }
}

export default Navigation;