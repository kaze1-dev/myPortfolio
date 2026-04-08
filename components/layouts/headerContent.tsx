"use client"
import React from 'react'
import { Icons } from '../icons'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

const HeaderContent = () => {
   const container = useRef<HTMLDivElement>(null)

   useGSAP(() => {
      const tl = gsap.timeline()
      tl.from("#logo", {
         opacity: 0,
         y: -100,
         duration: 0.5,
         delay:2,
         ease: "back.out(3)"
      })
         .from("nav a", {
            opacity: 0,
            y: -50,
            stagger: 0.05,
            duration: 0.5,
            ease: "back.out(3)"
         }, "-=0.1")
         .from("#icons .icon", {
            opacity: 0,
            y: -50,
            stagger: 0.05,
            duration: 0.5,
            ease: "back.out(3)"
         }, "-=0.4")
   }, { scope: container })
   return (
      <div ref={container} className='flex justify-between w-full'>
         <div className='flex gap-6'>
            <a id='logo' href="#hero">
               <h1  className='text-slate-300 font-bold text-lg font-rounded tracking-tighter cursor-default hover:cursor-pointer'>Faisal Abbas</h1>
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
         <div id='icons' className='flex gap-6 justify-center items-center '>
            <Icons.gitHub className='text-slate-300 h-5 w-5 hover:cursor-pointer hover:text-cyan-300 icon' />
            <Icons.linkedIn className='text-slate-300 h-5 w-5 hover:cursor-pointer hover:text-cyan-300 icon' />
            <Icons.mail className='text-slate-300 h-6 w-6 hover:cursor-pointer hover:text-cyan-300 icon' />
         </div>
      </div>
   )
}

export default HeaderContent