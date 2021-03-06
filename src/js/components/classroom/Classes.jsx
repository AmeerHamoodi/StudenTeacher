import React from "react";
import Classroom from "../home/Classroom.jsx";


const Classes = ({classes}) => {

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

export default Classes;