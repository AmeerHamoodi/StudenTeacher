import React from "react";
import Form from "../components/createClass/Form.jsx";
import NavBar from "../components/NavBar.jsx";

const CreateClass = props => {
    return (
        <>
            <NavBar></NavBar>
            <h1>Enter class information below:</h1>
            <Form></Form>
        </>
    )
};

export default CreateClass;