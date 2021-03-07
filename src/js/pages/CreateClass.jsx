import React from "react";
import Form from "../components/createClass/Form.jsx";
import NavBar from "../components/NavBar.jsx";

const CreateClass = props => {
    return (
        <>
            <NavBar></NavBar>
            <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%"}}>
                <h1>Enter class information below:</h1>
                <Form></Form>
            </div>
        </>
    )
};

export default CreateClass;