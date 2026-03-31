
import React from 'react'
import { Icons } from '../icons'

const Header = () => {
   return (
      <>
         <header className='flex gap-6 items-center justify-between bg-slate-900 py-4 px-15'>
            <div className='flex gap-6'>
               <h1 className='text-slate-300 font-bold text-lg font-sans tracking-tighter'>Kaze Faisal</h1>
               <nav className='text-slate-300 tracking-tighter font-sans font-bold text-sm flex gap-4 justify-center items-center'>
                  <div>Home</div>
                  <div>About</div>
                  <div>Experience</div>
                  <div>Projects</div>
               </nav>
            </div>
            <div className='flex gap-6 justify-center items-center '>
               <Icons.gitHub className='text-slate-300 h-5 w-5' />
               <Icons.linkedIn className='text-slate-300 h-5 w-5' />
               <Icons.mail className='text-slate-300 h-6 w-6' />
            </div>

         </header>
      </>

   )
}

export default Header