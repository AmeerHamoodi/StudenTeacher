import React from "react";
import {Link} from "react-router-dom";

const Classroom = ({id, name}) => {
    return (
        <>
            <div className="item">
                <div className="image">
                    <img src="./css/imgs/placeholder.png"/>
                </div>
                <div className="content" style={{marginTop: "5em"}}>
                    <Link className="header" to="/viewClass">Header</Link>
                    <div className="meta">
                        <span>Description</span>
                    </div>
                    <div className="extra">
                        Additional Details
                    </div>
                </div>
            </div>
        </>
    )
};

export default Classroom;