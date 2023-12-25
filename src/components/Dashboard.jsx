import DashCard from "./DashCard"
import PieChart from "./PieChart"


function Dashboard() {
    return (
        <>
            <div className="p-4 ps-5 ms-5 col-12">
                <h3>Dashboard</h3>
                <hr />
                <div className="row" >
                    <div className="col-6 row ">
                        <DashCard />
                        <DashCard />
                        <DashCard />
                        <DashCard />
                        <DashCard />
                        <DashCard />



                    </div>
                    <div className="col-6">
                        <div className="my-5" style={{ height: "200px" }} >

                            <PieChart />


                        </div>

                        <div className="my-5" style={{ height: "200px" }} >

                            <PieChart /> 


                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Dashboard