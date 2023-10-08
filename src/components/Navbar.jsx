import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoMdLogOut } from 'react-icons/io'
import { useFirebase } from '../context/firebase'

function Navbar({setShowModel}) {
  const { user, logOut } = useFirebase()

  return (
    <div className='relative w-full py-8 sm:py-12 px-[6%] sm:px-[12%] bg-gradient-to-r from-secondaryColor to-primaryColor flex items-center justify-between rounded-br-[5rem]'>
        {/* user info */}
        <div className='flex items-center gap-3'>
            <figure className='border-[3px] border-primaryColor w-16 rounded-full overflow-hidden'>
                <img src={user.photoURL} alt="" className='w-full rounded-full' />
            </figure>
            <div className='text-white '>
                <h1 className='font-bold text-2xl'>{user.displayName}</h1>
                <span>{user.email}</span>
            </div>
        </div>
        {/* add challenge button desktop */}
        <button onClick={() => setShowModel(true)} className='hidden sm:flex gap-3 items-center justify-center py-4 px-5 bg-secondaryColor rounded-xl text-white transition-all duration-300 hover:scale-105 '>
            <AiOutlinePlus size={20}/>
            Start a new challenge
        </button>
        {/* LogOut */}
        <div onClick={logOut} className='absolute top-3 right-8 text-white text-2xl cursor-pointer '>
            <IoMdLogOut/>
        </div>
    </div>
  )
}

export default Navbar