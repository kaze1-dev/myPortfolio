
import React from 'react'
import { Icons } from '../icons'
import HeaderContent from './headerContent'

const Header = () => {
   return (
      <>
         <header className='flex gap-6 items-center justify-between bg-slate-900 py-4 px-6 md:px-14 fixed w-full z-100'>
            <HeaderContent />
         </header>
      </>

   )
}

export default Header