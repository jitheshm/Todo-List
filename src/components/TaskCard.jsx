

function TaskCard({title,description,date}) {
    // console.log(title,description,date);
   
    let month = new Date(date).toLocaleString('default', { month: 'short' });
    date=date.split('-')
    console.log(month);
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
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">{description}</p>

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