

function TaskCard() {
    return (
        <>
            <div className="card m-3" style={{ width: '17rem', backgroundColor: '#445669' }}>
                <div className="card-body">
                    <div className="">
                        <div className="calendar">
                            <div style={{ width: '40px', height: '30px' }}>
                                <div className="calendar__date">12</div>
                                <div className="calendar__month">Jan</div>
                            </div>
                        </div>
                    </div>
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk
                        of
                        the card's content.</p>

                    <div className="d-flex justify-content-between">
                        <a href="#" className="btn btn-danger">Delete</a>
                        <a href="#" className="btn btn-success">Complete</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskCard