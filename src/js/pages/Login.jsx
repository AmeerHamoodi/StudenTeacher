import React, {useState} from "react";
import API from "../api";
import Form from "../components/Form";

const Login = props => {
    const [errorDisplay, setErrorDisplay] = useState(null);    

    const callback = async () => {
        const data = {
            username: $("#form_username").val(),
            password: $("#form_password").val()
        }
        const res = await API.signup(data);
        
        if(res.error) {

        }
    }
    return (
        <>
            <h1 style={{textAlign: "center"}}>Login:</h1>
            <Form></Form>
            {errorDisplay}
        </> 
    )
}