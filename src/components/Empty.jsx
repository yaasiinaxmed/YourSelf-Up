import React from 'react'
import empty from '../assets/illustrantion.png'

function Empty() {
  return (
    <div className='w-full h-full flex items-center justify-center flex-col p-5 gap-6'>
        <figure className='w-[22rem]'>
            <img src={empty} alt="" />
        </figure>
        <div className='flex items-ceter text-center flex-col gap-3 '>
            <h2 className='text-2xl font-medium text-secondaryColor'>Get Started!</h2>
            <span className='text-lg text-gray-600'>Let's start a new challenge</span>
        </div>
    </div>
  )
}

export default Empty