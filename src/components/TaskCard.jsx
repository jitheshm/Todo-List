import { useContext, useEffect } from "react";
import { TaskContext } from "../App";


function TaskCard({ title, description, date, index, page }) {
    // console.log(title,description,date);
    const { task, setTask } = useContext(TaskContext)

    let month = new Date(date).toLocaleString('default', { month: 'short' });
    date = date.split('-')
    console.log(month);

    const handleComplete = () => {
        setTask((prev) => {
            return prev.map((ele, curIndex) => {
                if (curIndex === index) {
                    console.log(ele);
                    ele = {
                        ...ele,
                        status: "Completed"
                    }
                }
                return ele
            })

        })
    }
    const handleDelete=()=>{
        if(confirm('Are you sure'))
        setTask((prev)=>{
            return prev.filter((ele,curIndex)=>curIndex!=index)
        })
    }
    useEffect(() => {
        console.log(task);


    }, [task])

    return (
        <>
            <div className="card m-3" style={{ width: '17rem', backgroundColor: '#445669' }}>
                <div className="card-body">
                    <div className="">
                        <div className="calendar">
                            <div style={{ width: '40px', height: '30px' }}>
                                <div className="calendar__date">{date[2]}</div>
                                <div className="calendar__month">{month}</div>
                            </div>
                        </div>
                    </div>
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">#{date[0]}</h6>
                    <p className="card-text">{description}</p>

                    <div className="d-flex justify-content-between">
                        <button onClick={handleDelete} className="btn btn-danger">Delete</button>
                        {
                            page!='Completed'?<button onClick={handleComplete} className="btn btn-success">Complete</button>:null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskCard