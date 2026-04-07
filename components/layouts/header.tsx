
import React from 'react'
import { Icons } from '../icons'
import HeaderContent from './headerContent'

const Header = () => {
   return (
      <>
         <header className='flex gap-6 items-center justify-between bg-slate-900 py-4 px-15 fixed w-full'>
            <HeaderContent />
         </header>
      </>

   )
}

export default Header