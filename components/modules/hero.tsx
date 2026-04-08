import React from 'react'
import { Button } from '../ui/button'
import { Icons } from '../icons'
import EmailBtn from '../ui/emailBtn'
import HeroText from '../ui/heroText'

const Hero = () => {
   return (
      <section id='hero' className='flex justify-center items-center h-screen'>
         <div className='flex flex-col gap-6'>
               <HeroText />
               <EmailBtn />
         </div>
      </section>
   )
}

export default Hero