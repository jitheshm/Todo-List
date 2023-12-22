/* eslint-disable react/no-unescaped-entities */

import TaskCard from "./TaskCard"


function PriorityTask({priority}) {
    return (
        <>
            <div className="section">
                <div>
                    <h5><span className="badge badge-pill bg-warning">{priority}</span></h5>
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