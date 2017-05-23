import React from 'react'

const Thing = ({ thing }) => {
  return (
    <li className="Thing">{thing.name}</li>
  )
}

export default Thing