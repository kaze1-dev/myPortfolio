import React from 'react'
import { Button } from '../ui/button'
import { Icons } from '../icons'
import HeroText from '../ui/heroText'

const Hero = () => {
   return (
      <section id='hero' className='flex w-full justify-center  items-center h-screen'>
         <div className='flex flex-col gap-6'>
               <HeroText />
               
         </div>
      </section>
   )
}

export default Hero