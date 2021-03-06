import  React from "react";

const MeetingOuter = ({id, name}) => {
    return (
        <div className="item">
            <div className="image">
                <img src="./css/imgs/video_placeholder.png"/>
            </div>
            <div className="content" style={{marginTop: "5em"}}>
                <a className="header">Header</a>
                <div className="meta">
                    <span>Description</span>
                </div>
                <div className="extra">
                    Additional Details
                </div>
            </div>
        </div>
    )
};

export default MeetingOuter;