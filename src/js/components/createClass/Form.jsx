import React from "react";

const Form = props => {
    return (
        <form className="ui form margined">
            <div className="field">
                <label>Title</label>
                <input type="text" id="form_title" placeholder="Enter title" />
            </div>
            <div className="field">
                <label>Description</label>
                <textarea rows="2" id="form_desc"></textarea>
            </div>
            <button className="ui positive button" type="button">Submit</button>
        </form>
    )
};

export default Form;