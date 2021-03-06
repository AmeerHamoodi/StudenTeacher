import React, {useEffect, useState} from "react";

import NavBar from "../components/NavBar.jsx";
import MyClasses from "../components/home/MyClasses.jsx";
import CreateClass from "../components/home/CreateClass.jsx";
import API from "../api/";

const Home = props => {
    const [classes, setClasses] = useState([]);

    useEffect(async() => {
        const data = await API.getClassrooms();
        if(!data.error) {
            if(data.message.length >= 4) {
                setClasses(<MyClasses classes={[data.message[0], data.message[1], data.message[2], data.message[3]]}></MyClasses>)
            } else if (data.message.length == 0) {
                setClasses(<h1 style={{textAlign: "center", marginTop: "3em"}}>No classes available currently</h1>);
            } else {
                setClasses(<MyClasses classes={data.message}></MyClasses>);
            }
        } else {
            alert(data.message);
            setClasses(<h1 style={{textAlign: "center", marginTop: "3em"}}>No classes available currently</h1>);
        }
        
    }, [])

    return (
        <>
            <NavBar active="home"></NavBar>
            <h1 style={{textAlign: "center", marginBottom: 0}}>My classes:</h1>
            <CreateClass></CreateClass>
            {classes}
        </>
    )
};

export default Home;