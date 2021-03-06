import React from "react";
import Classroom from "../home/Classroom.jsx";

const Classes = props => {
    return (
        <div className="ui container bg-white">
            <div className="ui items">
                <Classroom name="Biology"></Classroom>
                <div className="ui vertical segment"></div>
                <Classroom name="Biology"></Classroom>
                <div className="ui vertical segment"></div>
                <Classroom name="Biology"></Classroom>
            </div>
            
        </div>
    )
};

export default Classes;