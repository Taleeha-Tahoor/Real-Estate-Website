import React from 'react'
import "./input.css"

const Input = ({text, icon}) => {
  return (
    <div className='first-div'>

      <input type="text"
        placeholder={text}
        className='input'
        />

      <i className='material-icons'>{icon}</i>
    </div>
  )
}

export default Input
