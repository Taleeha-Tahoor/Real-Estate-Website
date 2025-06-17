import React from 'react'

const GetStarted = ({width, height, fontSize}) => {
  return (
    <div>
      <button style={{backgroundColor: "black", borderRadius: 8, color: 'white',
        fontSize: fontSize, width: width, height: height
      }}>
        Get Started
      </button>
    </div>
  )
}

export default GetStarted
