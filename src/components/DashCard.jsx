import React from 'react'

function DashCard({title,count}) {
    return (
        <div className="card p-4 m-3 col-5" style={{ backgroundColor: '#445669' }}>
            <h4>{title}</h4>
            <h5>{count}</h5>
        </div>
    )
}

export default DashCard