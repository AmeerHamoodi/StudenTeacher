import React from "react";

const ControlButtons = () => {
    return (
        <div className="meeting bar">
            <div className="ui eight column grid grid-items"> 
                <div className="column" id="microphone" enabled="true" style={{color: "white"}}>
                    <i className="big microphone icon"></i>
                </div>
                <div className="column" id="video" style={{color: "white"}}>
                    <i className="big video icon"></i>
                </div>
                <div className="column"></div>
                <div className="column"></div>
                <div className="column"></div>
                <div className="column" id="meeting_messages" style={{color: "white"}}>
                    <i className="big comments icon"></i>
                </div>
                <div className="column">
                    <div className="ui button red" onClick={() => {location.href="/home"}}>Leave Meeting</div>
                </div>
            </div>
        </div>
        
    )
};

export default ControlButtons;