import React from 'react'

const TypeText = (props) => (
        <input 
        aria-label={props.placeholder} 
        id={props.name} 
        name={props.name}  
        type="text" 
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        autoFocus={props.autofocus}
        autoComplete={props.name}
         />
    )

export default TypeText