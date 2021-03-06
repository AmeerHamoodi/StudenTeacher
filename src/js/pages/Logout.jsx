import React from "react";

const Logout = props => {
    const local = localStorage.getItem("userData");
    if(typeof local !== "undefined") {
        localStorage.removeItem("userData");
        location.reload();
    } else {
        location.reload();
    }
    return (
        <div>Logging out...</div>
    )
};

export default Logout;