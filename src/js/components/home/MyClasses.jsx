import React, {useState} from "react";
import Classroom from "./Classroom.jsx";

const MyClasses = ({classes}) => {

    let data = [];
    classes.forEach(classItem => {
        data.push(<Classroom ide={classItem.id} name={classItem.title} description={classItem.description} author={classItem.owner}></Classroom>)
    })

    return (
        <>
            <div className="ui items margined">
                    {data}
                </div>
        </>
        
    )
};

export default MyClasses;