"use client"
import React from 'react'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { SplitText } from 'gsap/SplitText'

if (typeof window !== 'undefined') {
   gsap.registerPlugin(ScrollTrigger)
   gsap.registerPlugin(TextPlugin)
   gsap.registerPlugin(SplitText)
}

const AboutContent = () => {
   return (
      <div className='px-6 lg:px-14'>

         <h1 id="aboutTitle" className='text-2xl lg:text-4xl tracking-tight font-bold text-slate-300 mb-6 lg:mb-10'>/ about me</h1>
         <div className='flex flex-col md:flex-row md:gap-20'>
            <div className='mb-4'>
               <p id='aboutIntro' className='text-slate-400 text-sm lg:text-lg leading-relaxed [word-spacing:0.3rem]'>
                 I am a Full-Stack Engineer and Computer Science student based in Punjab | Rajanpur, dedicated to engineering high-performance applications from the ground up. Operating primarily within a terminal-driven Linux environment, I focus on building robust backend services and clean, modular architectures. I pair a highly disciplined technical workflow with a passion for literary fiction and analytical storytelling, always striving for depth and precision in both code and creative thinking.
               </p>
               <p className='text-slate-400 text-lg [word-spacing:0.3rem] mt-6'>
                  
               </p>
            </div>
            <div className='flex flex-col justify-center gap-4 text-xs md:text-base md:mb-18'>
               <div className='flex text-cyan-300 font-bold gap-2 skillBox'>
                  <div className=''>
                     <div className='border-cyan-300 border-solid border px-4 py-2 rounded-lg'>TYPESCRIPT</div>
                  </div>
                  <div>
                     <div className='border-cyan-300 border-solid border px-4 py-2 rounded-lg'>NEXTJS</div>
                  </div>
                  <div>
                     <div className='border-cyan-300 border-solid border px-4 py-2 rounded-lg'>REACTJS</div>
                  </div>


               </div>
               <div className='flex text-cyan-300 font-bold gap-2 skillBox'>
                  <div className=''>
                     <div className='border-cyan-300 border-solid border px-4 py-2 rounded-lg'>POSTGRESQL</div>
                  </div>
                  <div>
                     <div className='border-cyan-300 border-solid border px-4 py-2 rounded-lg'>PRISMA</div>
                  </div>
                  <div>
                     <div className='border-cyan-300 border-solid border px-4 py-2 rounded-lg'>EXPRESS</div>
                  </div>
               </div>
               <div className='flex text-cyan-300 font-bold gap-2 skillBox'>
                  <div className=''>
                     <div className='border-cyan-300 border-solid border px-4 py-2 rounded-lg'>TAILWINDCSS</div>
                  </div>
                  <div>
                     <div className='border-cyan-300 border-solid border px-4 py-2 rounded-lg'>JAVASCRIPT ES6+</div>
                  </div>
               </div>
               <div className='flex text-cyan-300 font-bold gap-2 skillBox'>
                  <div className=''>
                     <div className='border-cyan-300 border-solid border px-4 py-2 rounded-lg'>MONGODB</div>
                  </div>
                  <div>
                     <div className='border-cyan-300 border-solid border px-4 py-2 rounded-lg'>NODEJS</div>
                  </div>
                  <div>
                     <div className='border-cyan-300 border-solid border px-4 py-2 rounded-lg'>GIT</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AboutContent