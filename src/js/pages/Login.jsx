import React, {useState, useEffect} from "react";
import API from "../api";
import Form from "../components/Form.jsx";
import Error from "../components/Error.jsx";
import {Link} from "react-router-dom";

const Login = props => {
    const [errorDisplay, setErrorDisplay] = useState("");    

    const callback = async () => {
        console.log("click")
        const data = {
            username: $("#form_username").val(),
            password: $("#form_password").val()
        }
        try {
            const res = await API.login(data);

            if(res.error) {
                alert(res.message);
            } else {
                const xhr = new XMLHttpRequest();
                xhr.open("POST", "/api/auth/ping");
                xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                
                xhr.onload = () => {
                    const res = xhr.response;
                    console.log(JSON.parse(res).message);

                    if(!res.error) {
                        localStorage.setItem("userData", JSON.stringify(JSON.parse(res).message));
                        location.href = "/home"
                    }
                }
    
                xhr.send();
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
            <div className="ui container bg-white" style={{borderRadius: "7px"}}>
                <h1 style={{textAlign: "center"}}>Login:</h1>
                <Form cb={callback}></Form>
                <Link to="/signup" style={{padding: "10px 10px 10px 10px"}}>Or click here to signup!</Link>
                <Error message={errorDisplay}></Error>
            </div>
        </> 
    )
};

export default Login;