import React from 'react'
import Hero from '../components/Hero'
import Signup from '../components/Signup'

function LandingPage() {
  return (
    <div className='w-full h-screen flex items-center justify-center flex-col px-[6%] sm:px-[12%] '>
        <Hero/>
        <Signup/>
    </div>
  )
}

export default LandingPage