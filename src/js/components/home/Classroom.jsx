import React from "react";
import {Link} from "react-router-dom";

const Classroom = ({ide, name, author, description}) => {
    return (
        <>
            <div className="item bg-white">
                <div className="image">
                    <img src="./css/imgs/placeholder.png"/>
                </div>
                <div className="content" style={{marginTop: "5em"}}>
                    <Link className="header" to={`/viewClass=${ide}`}>{name}</Link>
                    <div className="meta">
                        <span> Description: {description}</span>
                    </div>
                    <div className="extra">
                        Owner: {author}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Classroom;