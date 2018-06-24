import React from 'react'

export default props => (
    <div>
        <h3>Are you sure to delete this event?</h3>
        <p>
            <button className="btn btn-attention" onClick={() => props.deleteEvent(props.id)}>Delete</button>
        </p>
            or
        <p>
            <button className="btn btn-std" onClick={props.cancelClick}>Cancel</button>
        </p> 
    </div>
)