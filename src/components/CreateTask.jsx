import { useContext, useEffect, useState } from "react"
import { CreateTaskContext, TaskContext } from "../App"


function CreateTask() {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [priority, setPriority] = useState("")
    const [date, setDate] = useState("")
    const {task,setTask} = useContext(TaskContext)
    const {setCreateTask} = useContext(CreateTaskContext)

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleDescChange = (e) => {
        setDesc(e.target.value)
    }
    const handlePriorityChange = (e) => {
        setPriority(e.target.value)
    }

    const handleDateChange = (e) => {
        setDate(e.target.value)
    }

    const handleSubmit=()=>{
        console.log(title,desc,priority,date);
        setTask((prev)=>{
            return[...prev,{title,description:desc,priority,date,status:"Pending"}]
        })
        setCreateTask((prev)=>!prev)

    }

    
    return (
        <>
            <div className="taskInputContainer">
                <div className="col-4 taskInput p-4 rounded text-center">
                    <input placeholder="Task Title" className="inputContent my-2" type="text" name="Task" value={title} onChange={handleTitleChange} />
                    <textarea placeholder="Task Description" className="inputContent textinputContent my-2" maxLength={50} type="text" value={desc} onChange={handleDescChange} />
                    <select name id className="inputContent my-2" value={priority} onChange={handlePriorityChange}>
                        <option value="" disabled selected>Select Task Priority</option>
                        <option value="High">High Priority</option>
                        <option value="Low">Low Priority</option>
                    </select>
                    <input className="inputContent my-2" type="date" id name value={date} onChange={handleDateChange} />
                    <div>
                        <button className="btn btn-danger my-2 mx-2 ">Cancel</button>
                        <button className="btn btn-primary my-2 mx-2 " onClick={handleSubmit}>Add Task</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CreateTask