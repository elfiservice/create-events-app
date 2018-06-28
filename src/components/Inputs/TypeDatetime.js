import React from 'react'

const TypeDatetime = (props) => (
    <input 
        type="datetime-local"
        className={props.class ? props.class : ""}
        aria-label={props.label} 
        id={props.name} 
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
         />
    )

export default TypeDatetime