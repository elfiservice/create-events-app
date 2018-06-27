import React from 'react'

const TypeDataList= (props) => (
    <div>
        <input 
            aria-label={props.placeholder} 
            list="type-events" 
            id={props.name}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            required={props.required}
            autoFocus={props.autofocus}
            />
            <datalist id="type-events">
                {props.dataList.map((item, index) => (
                    <option value={item} key={index}></option>
                ))}
            </datalist>
    </div>
    )

export default TypeDataList