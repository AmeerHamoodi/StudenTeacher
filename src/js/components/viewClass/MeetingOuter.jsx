import  React from "react";
import {Link} from "react-router-dom";

const MeetingOuter = ({id, title, description, owner}) => {
    return (
        <div className="item bg-white">
            <div className="image">
                <img src="./css/imgs/video_placeholder.png"/>
            </div>
            <div className="content" style={{marginTop: "5em"}}>
                <Link className="header" to={`/stream?id=${id}`}>{title}</Link>
                <div className="meta">
                    <span>Description: {description}</span>
                </div>
                <div className="extra">
                    Presentor: {owner}
                </div>
            </div>
        </div>
    )
};

export default MeetingOuter;