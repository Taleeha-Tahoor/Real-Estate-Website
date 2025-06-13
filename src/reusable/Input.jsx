import React from 'react'

const Input = ({text, icon}) => {
  return (
    <div style={{borderStyle: "solid" ,borderColor: 'black', borderWidth: 1.5, backgroundColor: "white",
        borderRadius: 8, width: "25%", height: "55px", display: "flex", 
        alignItems: "center", justifyContent: "space-around", fontSize: 19,
    }}>
      {text}

      <i className='material-icons'>{icon}</i>
    </div>
  )
}

export default Input
