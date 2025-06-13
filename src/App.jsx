import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SearchProperty from './components/SearchProperty'
import PopularHeading from './components/PopularHeading'

function App() {

  return (
    <>
   <Navbar/>
   <Hero/>
   <SearchProperty/>
   <PopularHeading/>
    </>
  )
}

export default App
