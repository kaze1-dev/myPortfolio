"use client";
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { useRef } from 'react';
import { TextPlugin } from 'gsap/TextPlugin'
import { SplitText } from 'gsap/SplitText';

if(typeof window !== "undefined") {
   gsap.registerPlugin(TextPlugin, SplitText)
}

const HeroText = () => {
   const text = useRef<HTMLDivElement>(null)

   useGSAP(() => {
      const tl = gsap.timeline()
      const split = new SplitText("#heroParagraph", {
         type: "words",
      })

      gsap.to("#cursor", {
         opacity: 0,
         repeat: -1,
         ease: "power1.inOut",
         duration: 1
      })

      tl.to("#heroTxt", {
         text: {
            value: "hi, <span class='text-cyan-300'>F</span><span class='text-cyan-300'>a</span><span class='text-cyan-300'>i</span><span class='text-cyan-300'>s</span><span class='text-cyan-300'>a</span><span class='text-cyan-300'>l</span> here.",
            type: "html"
         },
         duration: 1.5,
         delay: 0.5,
         ease: "power1.out"
      })
      .from(split.words, {
         y: 20,
         rotationX: -90,
         opacity: 0,
         duration: 0.5,
         stagger: 0.05,
         ease: "back.out(3)"
      }, "-=0.8")
   }, { scope: text })
  return (
    <div ref={text} className='flex flex-col gap-6'>
      <h1 className='text-slate-300 text-6xl inline tracking-tight font-rounded'>
               <span id='heroTxt' className=''></span>
               <span id='cursor' className='text-cyan-300 font-bold font-mono'>_</span>
            </h1>
            
            <p id='heroParagraph' className='inline text-sm text-slate-400 font-rounded leading-relaxed'>
               Building high-performance web applications at the intersection of Next.js logic and<br /> robust Prisma backends, fueled by a love for clean code and anime.
            </p>
    </div>
  )
}

export default HeroText