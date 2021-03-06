import React from "react";
import Meetings from "../components/viewClass/Meetings.jsx";
import NavBar from "../components/NavBar.jsx";

const ViewClass = props => {
    return (
        <>
            <NavBar></NavBar>
            <h1 style={{textAlign: "center"}}>Current Meetings:</h1>
            <Meetings></Meetings>
        </>
    )
};

export default ViewClass;