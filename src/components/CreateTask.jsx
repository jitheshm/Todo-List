

function CreateTask() {
    return (
        <>
            <div className="taskInputContainer">
                <div className="col-4 taskInput p-4 rounded text-center">
                    <input placeholder="Task Title" className="inputContent my-2" type="text" name="Task" />
                    <textarea placeholder="Task Description" className="inputContent textinputContent my-2" maxLength={50} type="text" defaultValue={""} />
                    <select name id className="inputContent my-2">
                        <option value disabled selected>Select Task Priority</option>
                        <option value="volvo">High Priority</option>
                        <option value="saab">Low Priority</option>
                    </select>
                    <input className="inputContent my-2" type="date" id name />
                    <div>
                        <button className="btn btn-danger my-2 mx-2 ">Cancel</button>
                        <button className="btn btn-primary my-2 mx-2 ">Add Task</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CreateTask