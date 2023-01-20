import React from "react";
import {useLocation} from "react-router";
import {Link} from "react-router-dom";
import {navMainOptions} from "../Navigation/topMenu";
import "./Breadcrumbs.css";

const Breadcrumbs = (props) => {
    const location = useLocation();
    let currentLink = '';

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            let title;
            currentLink = `/${crumb}`;
            navMainOptions.forEach((option, k) => {
                if(crumb === option.value) {

                    return (
                        title = option.title
                    )
                }
            })
            return (<div className={"crumb"} key={crumb}>

            <Link to={currentLink}>{title.toUpperCase()}</Link> >
            </div>)
        })

    return(
        <div className={"breadcrumbs"}>
            {crumbs}
            <span style={{color: "royalblue"}}>{props.locationEnd ? props.locationEnd.toUpperCase() : "LISTA"}</span>
        </div>
    )
}

export default Breadcrumbs;