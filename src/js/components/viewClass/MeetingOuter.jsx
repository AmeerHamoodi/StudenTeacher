import  React from "react";

const MeetingOuter = ({id, title, description, owner}) => {
    return (
        <div className="item">
            <div className="image">
                <img src="./css/imgs/video_placeholder.png"/>
            </div>
            <div className="content" style={{marginTop: "5em"}}>
                <a className="header">{title}</a>
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