"use client";
import React from 'react'
import { Icons } from '../icons';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react';
const EmailBtn = () => {
   const btn = useRef<HTMLButtonElement>(null)

   useGSAP(() => {
      gsap.from("#mailBtn", {
         opacity: 0,
         y: 20,
         duration: 0.5,
         delay: 1.5,
         ease: "back.out(3)"
      })


   })
   return (
      <button id='mailBtn' className='flex  items-center'>
         <div  className='border border-cyan-300 text-cyan-300 px-6 py-3.5 font-bold font-rounded rounded-md flex justify-center items-center gap-2 hover:bg-cyan-300/10'>
            <Icons.mail className='h-6 w-6 hover:cursor-pointer text-cyan-300' />
            <h4>Say hi!</h4>
         </div>
      </button>
   )
}

export default EmailBtn