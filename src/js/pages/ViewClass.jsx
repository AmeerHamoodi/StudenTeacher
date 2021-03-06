import React, {useEffect, useState} from "react";
import Meetings from "../components/viewClass/Meetings.jsx";
import NavBar from "../components/NavBar.jsx";
import CreateMeeting from "../components/viewClass/CreateMeeting.jsx";

import API from "../api/index";

const ViewClass = props => {
    const [classData, setClassData] = useState([]);
    const [reactState, setReactState] = useState([]);
    const id = props.match.params.classId;

    useEffect(async () => {
        const response = await API.getClassById({id: id});

        if(!response.error && typeof response.message !== "undefined") {
            setClassData(response.message);
            console.log(JSON.parse(response.message.learning_sess))
            setReactState([<Meetings classData={JSON.parse(response.message.learning_sess)}></Meetings>])
        } else {
            alert(response.message);
        }
    }, []);

    return (
        <>
            <NavBar></NavBar>
            <h1 style={{textAlign: "center"}}>{classData.title}</h1>
            <h4 style={{textAlign: "center"}}>Owner: {classData.owner}</h4>
            <h2 style={{textAlign: "center"}}>Current Meetings:</h2>
            <CreateMeeting></CreateMeeting>
            {reactState}
        </>
    )
};

export default ViewClass;