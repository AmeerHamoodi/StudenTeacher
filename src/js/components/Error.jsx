import React from "react";

const Error = props => {
    return (
        <div className="ui negative message">
            <i className="close icon"></i>
            <div className="header">
                ERROR
            </div>
            <p>{props.message}</p>
        </div>
    )
};

export default Error;