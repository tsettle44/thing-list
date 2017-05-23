import React from 'react'
import './AddThings.css'


const AddThings = (props) => {
    return (
        <button className="AddThings button add-thing" onClick={props.add}>Add Thing</button>
    )
}

export default AddThings