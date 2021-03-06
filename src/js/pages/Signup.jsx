import React, {useState, useEffect} from "react";
import API from "../api";
import Form from "../components/Form.jsx";
import Error from "../components/Error.jsx";
import {Link} from "react-router-dom";

const Signup = props => {
    const [errorDisplay, setErrorDisplay] = useState("");    

    const callback = async () => {
        console.log("click")
        const data = {
            username: $("#form_username").val(),
            password: $("#form_password").val()
        }
        try {
            const res = await API.signup(data);

            if(res.error) {
                alert(res.message);
            } else {
                location.href = "/home"
            }
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        $(".close.icon").click(function(){
            $(this).parent().hide();
        });
        $(".ui.negative.message").hide();
    })
    
    return (
        <>
            <div className="ui container bg-white">
                <h1 style={{textAlign: "center"}}>Signup:</h1>
                <Form cb={callback}></Form>
                <Link to="/login" style={{padding: "10px 10px 10px 10px"}}>Have an account? Login here!</Link>
                <Error message={errorDisplay}></Error>
            </div>
        </> 
    )
};

export default Signup;