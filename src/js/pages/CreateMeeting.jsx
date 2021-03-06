import React from "react";
import Form from "../components/createMeeting/Form.jsx";
import NavBar from "../components/NavBar.jsx";

const CreateMeeting = props => {
    return (
        <>
            <NavBar></NavBar>
            <h1>Enter presentation information below:</h1>
            <Form></Form>
            
        </>
    )
};

export default CreateMeeting;