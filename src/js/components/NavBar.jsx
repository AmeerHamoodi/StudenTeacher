import React from "react";
import {Link} from "react-router-dom";

const NavBar = ({active}) => {
    const actives = {
        home: active == "home" ? "active" : "",
        classes: active == "classes" ? "active" : ""
    }

    const username = JSON.parse(localStorage.getItem("userData")).username;

    return (
        <div className="ui pointing menu">
            <Link className={`item ${actives.home}`} to="/home">
                Home
            </Link>
            <Link className={`item ${actives.classes}`} to="/classes">
                Classes
            </Link>
            <div className="right menu">
                <div className="item">{username}</div>
                <a className="ui item" href="/logout">
                Logout
                </a>
            </div>
        </div>
    )
};

export default NavBar;