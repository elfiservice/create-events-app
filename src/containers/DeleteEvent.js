import React from 'react'

export default props => (
    <div tabIndex="1">
        <h3>Are you sure to delete this event?</h3>
        <p>
            <button tabIndex="2" className="btn btn-attention" onClick={() => props.deleteEvent(props.id)}>Delete</button>
        </p>
            or
        <p>
            <button tabIndex="3" className="btn btn-std" onClick={props.cancelClick}>Cancel</button>
        </p> 
    </div>
)