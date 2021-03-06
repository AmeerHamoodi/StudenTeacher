import React from "react";
import {Link} from "react-router-dom";

const CreateMeeting = props => {
    return (
        <div className="ui grid" style={{paddingBottom: 0}}>
                <div className="five wide column" style={{paddingBottom: 0}}></div>
                <div className="five wide column" style={{paddingBottom: 0}}></div>
                <div className="five wide column" style={{paddingBottom: 0}}>
                    <Link style={{color: "#34eb52", fontWeight: "bold", fontSize: "1.2em"}} className="greenLink" to="/createMeeting">Click here to create a meeting {"->"}</Link>
                </div>
        </div>
    )
};

export default CreateMeeting;