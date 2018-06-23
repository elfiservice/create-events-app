import React from 'react'

export default props => (
    <div>
        {console.log(props)
        }
        <h3>Are you sure to delete this event? {props.id}</h3>
        <p>
            <button className="btn btn-attention">Delete</button>
        </p>
            or
        <p>
            <button className="btn btn-std" onClick={props.cancelClick}>Cancel</button>
        </p> 
    </div>
)