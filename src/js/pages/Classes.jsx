import React, {useEffect, useState} from "react";

import NavBar from "../components/NavBar.jsx";
import Classes from "../components/classroom/Classes.jsx";

import API from "../api/";

const ClassPage = props => {
    const [classes, setClasses] = useState([]);
    useEffect(async() => {
        const data = await API.getClassrooms();
        console.log(data);
        if(!data.error) {
            if(data.message.length > 0) {
                setClasses(<Classes classes={data.message}></Classes>)
            } else {
                setClasses(<h1 style={{textAlign: "center", marginTop: "3em"}}>No classes available currently</h1>);
            }
        } else {
            alert(data.message);
            setClasses(<h1 style={{textAlign: "center", marginTop: "3em"}}>No classes available currently</h1>);
        }
        
    }, [])

    return (
        <>
            <NavBar active="classes"></NavBar>
            <h1 style={{textAlign: "center",  marginBottom: 0}}>My classes:</h1>
            {classes}            
        </>
    )
};

export default ClassPage;