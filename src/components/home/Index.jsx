import React from 'react'
import '../../styles/home/Index.css'
import Hero from './Hero'
import SearchProperty from './SearchProperty'
import PopularHeading from './PopularHeading'
import Property from './Property'
import Footer from './Footer'

const Index = () => {
  return (
    <>
     <Hero/>
      <SearchProperty />
      <PopularHeading />
      <div className='property_section'>
      <Property img={"./src/assets/property1.jpeg"} title={"Banana Island, Lagos"}
        bed_number={4} stat1={10} stat2={10} size={1600} price={200000} />

      <Property img={"./src/assets/property2.jpeg"} title={"Parkview State, Lagos"}
        bed_number={5} stat1={10} stat2={10} size={1600} price={3000000} />

      <Property img={"./src/assets/property3.jpeg"} title={"Eko Atlantic, Lagos"}
        bed_number={3} stat1={10} stat2={10} size={1600} price={800000} />
      </div>
      <Footer />
    </>
  )
}

export default Index
