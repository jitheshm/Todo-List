/* eslint-disable react/no-unescaped-entities */

import PriorityTask from "./PriorityTask"


function Task() {
    return (
        <>
            <div className="p-4 ps-5 ms-5 col-12">
                <h3>Today's Task</h3>
                <hr />
                <PriorityTask/>
                <PriorityTask/>
                
            </div>

        </>
    )
}

export default Task