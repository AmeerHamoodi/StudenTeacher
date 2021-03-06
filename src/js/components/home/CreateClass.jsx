import React from "react";
import {Link} from "react-router-dom";

const CreateClass = props => {
    return (
        <div className="ui grid" style={{paddingBottom: 0}}>
                <div className="five wide column" style={{paddingBottom: 0}}></div>
                <div className="five wide column" style={{paddingBottom: 0}}></div>
                <div className="five wide column" style={{paddingBottom: 0}}>
                    <Link style={{color: "#31d64c", fontWeight: "bold", fontSize: "1.2em"}} className="greenLink" to="/createClass">Click here to create a class {"->"}</Link>
                </div>
        </div>
    )
};

export default CreateClass;