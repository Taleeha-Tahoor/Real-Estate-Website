import React from 'react'
import "../../styles/home/Property.css"
import GetStarted from '../../reusable/GetStarted'

const Property = ({ img, title, bed_number, stat1, stat2, size, price }) => {
    return (
        <div className='property_main'>
            <img src={img} alt="Property image" />

            <div>
                <div className='divs title'>
                    <i className='material-icons'>location_on</i>
                    <p>{title}</p>
                </div>
                <div className='details'>
                    <div className='divs'>
                        <i className='material-icons'>bed</i>
                        <p>{bed_number} Beds</p>
                    </div>
                    <div className='divs'>
                        <i className='material-icons'>bar_chart</i>
                        <p>{stat1}x{stat2}m</p>
                    </div>
                    <div className='divs'>
                        <i className='material-icons'>show_chart</i>
                        <p>{size}m</p>
                    </div>
                </div>

                 <div className='pricing'>
                        <GetStarted width={135} height={40} fontSize={16}/>
                        <p>${price}</p>
                </div>
            </div>
        </div>
    )
}

export default Property
