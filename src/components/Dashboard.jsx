import { useContext } from "react"
import DashCard from "./DashCard"
import PieChart from "./PieChart"
import { TaskContext } from "../App"


function Dashboard() {
    const { task } = useContext(TaskContext)
    var high = 0, low = 0, completed = 0, pending = 0, upcoming = 0, today = 0
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.toLocaleString('default', { month: 'numeric' });
    let year = newDate.getFullYear();
    let curDate = `${year}-${month}-${date}`
    task.forEach(element => {
        if (element.priority === "High"&&element.status==="Pending") {
            high = high + 1
        }
        else if(element.priority === "Low"&&element.status==="Pending") {
            low = low + 1
        }
        if (element.status === "Completed") {
            completed = completed + 1
        }
        if (element.date === curDate&&element.status==="Pending") {
            today = today + 1
        }else if(new Date(curDate) < new Date(element.date)&&element.status==="Pending"){
            upcoming=upcoming+1
        }else if(new Date(curDate) > new Date(element.date)&&element.status==="Pending"){
            pending=pending+1
        }

    });
    return (
        <>
            <div className="p-4 ps-5 ms-5 col-12">
                <h3>Dashboard</h3>
                <hr />
                <div className="row" >
                    <div className="col-6 row ">

                        <DashCard title="Today's Task" count={today} />
                        <DashCard title="Upcoming Tasks" count={upcoming} />
                        <DashCard title="Pending Tasks" count={pending} />
                        <DashCard title="Completed Tasks" count={completed} />
                        <DashCard title="High Priority Tasks" count={high} />
                        <DashCard title="Low Priority Tasks" count={low} />



                    </div>
                    <div className="col-6">
                        <div className="my-5" style={{ height: "200px" }} >

                            <PieChart section="total" value={[today,upcoming,pending,completed]}  />


                        </div>

                        <div className="my-5" style={{ height: "200px" }} >

                            <PieChart section="priority" value={[high,low]}/>


                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Dashboard