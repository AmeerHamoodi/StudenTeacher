import React from "react";
import MeetingOuter from "./MeetingOuter.jsx";

const Meetings = props => {
    return (
        <div className="ui container bg-white items" style={{marginTop: 0}}>
            <MeetingOuter name="Ameer's explaination of Beta-galactosidase!"></MeetingOuter>
            <div className="ui vertical segment"></div>
            <MeetingOuter name="Why penguins are superior"></MeetingOuter>
            <div className="ui vertical segment"></div>
            <MeetingOuter name="Tim's presentation on the socio-economic status of penguins"></MeetingOuter>
        </div>
    )
};

export default Meetings;