/* eslint-disable react/no-unescaped-entities */

import PriorityTask from "./PriorityTask"


function Task({title}) {
    return (
        <>
            <div className="p-4 ps-5 ms-5 col-12">
                <h3>{title}</h3>
                <hr />
                <PriorityTask priority="High Priority"/>
                <PriorityTask priority="Low Priority"/>
                
            </div>

        </>
    )
}

export default Task