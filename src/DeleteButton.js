import React from 'react'
import './DeleteButton.css'

const DeleteButton = (props) => {
    return(
        <span className="actions">
          <button
            className="remove"
            onClick={() => props.remove(props.thing)}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </span>
    )
}

export default DeleteButton