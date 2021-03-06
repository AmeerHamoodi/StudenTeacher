import React from "react";
import {Link} from "react-router-dom";
import API from "../../api/";


const Classroom = ({ide, name, author, description}) => {
    const local = JSON.parse(localStorage.getItem("userData"));
    const content = author == local.username ? "Delete class" : "Leave class";

    const remove = async() => {
        const doIt = confirm("Are you sure you want to leave/delete this class?");

        if(doIt) {
            const response = await API.removeClassById({id: ide});

            if(!response.error) {
                alert(response.message);
                location.reload();
            } else {
                alert(response.message);
            }
        }
    }

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
                    <button className="ui red button" onClick={remove}>{content}</button>
                    <div className="extra">
                        Owner: {author}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Classroom;