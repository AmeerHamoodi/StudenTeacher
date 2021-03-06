import React from "react";
import {Link} from "react-router-dom";

const NavBar = ({active}) => {
    const actives = {
        home: active == "home" ? "active" : "",
        classes: active == "classes" ? "active" : ""
    }
    return (
        <div className="ui pointing menu">
            <Link className={`item ${actives.home}`} to="/home">
                Home
            </Link>
            <Link className={`item ${actives.classes}`} to="/classes">
                Classes
            </Link>
            <div className="right menu">
                <a className="ui item" href="/logout">
                Logout
                </a>
            </div>
        </div>
    )
};

export default NavBar;