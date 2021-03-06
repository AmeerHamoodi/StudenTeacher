import React from "react";
import MeetingOuter from "./MeetingOuter.jsx";

const Meetings = ({classData}) => {
    let temp = [];

    if(Array.isArray(classData)) {
        classData.forEach(item => {
            temp.push(<MeetingOuter title={item.title} description={item.description} owner={item.owner}></MeetingOuter>)
        })
    }

    temp = temp.length > 0 ? temp : <h3 style={{textAlign: "center"}}>No presentations, check back later, or start your own!</h3> 

    return (
        <div className="ui container bg-white items" style={{marginTop: 0}}>
            {temp}
        </div>
    )
};

export default Meetings;