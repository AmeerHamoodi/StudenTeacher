import React from "react";

import NavBar from "../components/NavBar.jsx";
import Classes from "../components/classroom/Classes.jsx";

const ClassPage = props => {
    return (
        <>
            <NavBar active="classes"></NavBar>
            <h1 style={{textAlign: "center",  marginBottom: 0}}>My classes:</h1>
            <Classes></Classes>
            
        </>
    )
};

export default ClassPage;