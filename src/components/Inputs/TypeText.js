import React from 'react'

const TypeText = (props) => {
    return (
        <input 
        aria-label={props.placeholder} 
        id={props.name} 
        name={props.name}  
        type="text" 
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required />
    )
}

export default TypeText