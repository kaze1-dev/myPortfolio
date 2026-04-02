import React from 'react'
import { Button } from '../ui/button'
import { Icons } from '../icons'

const Hero = () => {
   return (
      <section className='flex justify-center items-center h-screen'>
         <div className='flex flex-col gap-6'>
            <h1 className='text-slate-300 text-6xl inline tracking-tight font-rounded'>
               hi, <span className='text-cyan-300 font-bold'>kaze</span> here.
            </h1>
            <p className='inline text-sm text-slate-400 font-rounded leading-relaxed'>
               Building high-performance web applications at the intersection of Next.js logic and<br /> robust Prisma backends, fueled by a love for clean code and anime.
            </p>
            <Button variant='outline' className='w-max hover:bg-cyan-300/10 rounded px-10 py-7 text-cyan-300 hover:text-cyan-300 font-bold border-cyan-300 my-4'>
               <Icons.mail className='text-cyan-300' />
               Say hi!
            </Button>
         </div>
      </section>
   )
}

export default Hero