import React from "react";
import Meetings from "../components/viewClass/Meetings.jsx";
import NavBar from "../components/NavBar.jsx";
import CreateMeeting from "../components/viewClass/CreateMeeting.jsx";

const ViewClass = props => {
    return (
        <>
            <NavBar></NavBar>
            <h1 style={{textAlign: "center"}}>Current Meetings:</h1>
            <CreateMeeting></CreateMeeting>
            <Meetings></Meetings>
        </>
    )
};

export default ViewClass;