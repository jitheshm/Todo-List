/* eslint-disable react/no-unescaped-entities */

import TaskCard from "./TaskCard"


function PriorityTask() {
    return (
        <>
            <div className="section">
                <div>
                    <h5><span className="badge badge-pill bg-warning">High Priority</span></h5>
                </div>
                <div className="row p-4">
                    <TaskCard/>
                    <TaskCard/>
                    <TaskCard/>
                    <TaskCard/>
                </div>
            </div>
        </>
    )
}

export default PriorityTask