import React from 'react'
import '../styles/Hero.css'
import heroImage from '../assets/heroImage.png'

const Hero = () => {
    return (
        <div className='first'>
            <div className='two-column'>
                <div className='leftSide'>
                <h3>
                    Find A House That Suits you
                </h3>
                <p>Want to find a home? We are ready to help you Find
                    one that suits your Lifestyle and needs</p>
                <a href="#">Get Started</a>

                <div className="stats">
                <div className="col">
                    <h5>1200+</h5>
                    <p>Listed Properties</p>
                </div>
                <div className="col">
                    <h5>4500+</h5>
                    <p>Happy Customers</p>
                </div>
                <div className="col">
                    <h5>100+</h5>
                    <p>Awards</p>
                </div>
            </div>

            </div>

            <div className='rightSide'>
        <img src={heroImage} alt="hero image" />
            </div>

            </div>
        </div>
    )
}

export default Hero
