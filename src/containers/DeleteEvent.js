import React from 'react'

export default props => (
    <div>
        {console.log(props)
        }
        <h3>Are you sure to delete this event?</h3>
        <p>
            <button className="btn btn-attention">Delete</button>
        </p>
            or
        <p>
            <button className="btn btn-std">Cancel</button>
        </p> 
    </div>
)