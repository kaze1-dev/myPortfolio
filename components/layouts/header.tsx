
import React from 'react'
import { Icons } from '../icons'

const Header = () => {
   return (
      <>
         <header className='flex gap-6 items-center justify-between bg-slate-900 py-4 px-15 fixed w-full'>
            <div className='flex gap-6'>
               <a href="#hero">
                  <h1 className='text-slate-300 font-bold text-lg font-rounded tracking-tighter cursor-default hover:cursor-pointer'>Faisal Abbas</h1>
               </a>

               <nav className='text-slate-300 tracking-tighter font-rounded font-bold text-sm flex gap-4 justify-center items-center'>
                  <a href="#hero">
                     <div className='cursor-default hover:text-cyan-300 hover:cursor-pointer'>Home</div>
                  </a>

                  <a href="#about">
                     <div className='cursor-default hover:text-cyan-300 hover:cursor-pointer'>About</div>
                  </a>
                  <a href="#projects">
                     <div className='cursor-default hover:text-cyan-300 hover:cursor-pointer'>Projects</div>
                  </a>
               </nav>
            </div>
            <div className='flex gap-6 justify-center items-center '>
               <Icons.gitHub className='text-slate-300 h-5 w-5 hover:cursor-pointer hover:text-cyan-300' />
               <Icons.linkedIn className='text-slate-300 h-5 w-5 hover:cursor-pointer hover:text-cyan-300' />
               <Icons.mail className='text-slate-300 h-6 w-6 hover:cursor-pointer hover:text-cyan-300' />
            </div>

         </header>
      </>

   )
}

export default Header