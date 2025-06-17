import React from 'react'
import "../../styles/home/PopularHeading.css"

const PopularHeading = () => {
  return (
    <div className='popularMain'>
        <div className='popularFirst'>
      <p className='first-p'>POPULAR</p>
      <p className='second-p'>Our Popular Homes</p>
      </div>

      <div className='popularSecond'>
        <p>Explore All</p>
        <i className='material-icons'>arrow_right_alt</i>
      </div>
    </div>
  )
}

export default PopularHeading
