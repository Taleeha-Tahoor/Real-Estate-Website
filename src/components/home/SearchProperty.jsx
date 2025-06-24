import React from 'react'
import "../../styles/home/SearchProperty.css"
import Input from '../../reusable/Input'
import GetStarted from '../../reusable/GetStarted'

const SearchProperty = () => {
  return (
    <div className='back'>
        
      <div className='above'>
        <p>Search for available properties</p>
        <GetStarted width={150} height={50} fontSize={17}/>
      </div>

      <div className='below'>
    <Input text="Location" icon="location_on" />
    <Input text="Property Type" icon="home" />
    <Input text="Budget" icon="paid" />
      </div>
    </div>
  )
}

export default SearchProperty
