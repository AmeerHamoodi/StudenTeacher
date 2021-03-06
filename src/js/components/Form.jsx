import React from "react";

const Form = ({cb}) => {
    return (
        <form className="ui form">
            <div className="field">
                <label>Username:</label>
                <input type="text" name="username" id="form_username" placeholder="Enter username" />
            </div>
            <div className="field">
                <label>Password</label>
                <input type="password" name="password" id="form_password" placeholder="Enter password" />
            </div>
            <button className="ui button" type="button" id="form_submit" onClick={cb}>Submit</button>
        </form>
    )
};

export default Form;