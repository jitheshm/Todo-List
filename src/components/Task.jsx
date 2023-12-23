/* eslint-disable react/no-unescaped-entities */

import PriorityTask from "./PriorityTask"


function Task({ title, page }) {
    return (
        <>
            <div className="p-4 ps-5 ms-5 col-12">
                <h3>{title}</h3>
                <hr />
                <PriorityTask priority="High" page={page} />
                <PriorityTask priority="Low" page={page} />

            </div>

        </>
    )
}

export default Task