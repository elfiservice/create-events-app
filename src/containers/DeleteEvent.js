import React from 'react'

export default props => (
    <div tabIndex="1" className="text-center">
        <h3>Are you sure to delete this event?</h3>
        <p>
            <button tabIndex="2" className="delete-btn btn btn-attention" onClick={() => props.deleteEvent(props.id)}>Delete</button>
        </p>
        <div className="loader-gif"><img width="20%" src="../assets/images/loader.gif" alt=""/></div>
        
        <div>or</div>
        <p>
            <button tabIndex="3" className="btn btn-std" onClick={props.cancelClick}>Cancel</button>
        </p> 
    </div>
)