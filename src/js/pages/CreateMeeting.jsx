import React from "react";
import Form from "../components/createMeeting/Form.jsx";
import NavBar from "../components/NavBar.jsx";

const CreateMeeting = props => {
    return (
        <>
            <NavBar></NavBar>
            <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%"}}>
                <h1>Enter presentation information below:</h1>
                <Form></Form>
                <span>After you complete and submit the meeting will start, send the meeting link (in your browser URL) to invite others to join!</span>
            </div>
        </>
    )
};

export default CreateMeeting;