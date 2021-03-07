import React from "react";
import {Link} from "react-router-dom";

const CreateMeeting = props => {
    const clickback = () => {
        const link = location.protocol + "//" + location.hostname + ":" + location.port + "/api/class/join_class?id=" + window.location.href.split("viewClass=")[1];
        navigator.clipboard.writeText(link);
        alert("Copied!");
    }
    return (
        <div className="ui grid" style={{paddingBottom: 0}}>
                <div className="five wide column" style={{paddingBottom: 0}}></div>
                <div className="five wide column" style={{paddingBottom: 0}}></div>
                <div className="five wide column" style={{paddingBottom: 0}}>
                    <Link style={{color: "#31d64c", fontWeight: "bold", fontSize: "1.2em"}} className="greenLink" to={`/createMeeting?id=${props.ide}`}>Click here to create a meeting {"->"}</Link>
                    <div style={{color: "#31d64c", fontWeight: "bold", fontSize: "1.2em"}} className="greenLink" onClick={clickback}>Click here to copy an invite link to join your class +</div>
                </div>
        </div>
    )
};

export default CreateMeeting;