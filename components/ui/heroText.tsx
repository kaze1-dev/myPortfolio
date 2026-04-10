"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from 'gsap/TextPlugin';
import { SplitText } from 'gsap/SplitText'; 
import Image from 'next/image';
import profile from '../../public/profile.webp';
import EmailBtn from './emailBtn';


if (typeof window !== "undefined") {
   gsap.registerPlugin(TextPlugin, SplitText);
}

const HeroText = () => {
   const container = useRef<HTMLDivElement>(null);
   const imgRef = useRef<HTMLDivElement>(null);

   useGSAP(() => {

      let split;
      if (SplitText) {
         split = new SplitText("#heroParagraph", { type: "words" });
      }

      const tl = gsap.timeline();

    
      gsap.to("#cursor", {
         opacity: 0,
         repeat: -1,
         ease: "power1.inOut",
         duration: 1
      });

    
      tl.to("#heroTxt", {
         text: {
            value: "hi, <span class='text-cyan-300'>F</span><span class='text-cyan-300'>a</span><span class='text-cyan-300'>i</span><span class='text-cyan-300'>s</span><span class='text-cyan-300'>a</span><span class='text-cyan-300'>l</span> here.",
            type: "html"
         },
         duration: 1.5,
         delay: 0.5,
         ease: "power1.out"
      });

     
      if (split) {
         tl.from(split.words, {
            y: 20,
            rotationX: -90,
            opacity: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "back.out(3)"
         }, "-=0.8");
      }


      tl.from(imgRef.current, {
         x: -50,
         opacity: 0,
         duration: 0.5,
         ease: "power1.in"
      }, "-=0.5");

   }, { scope: container });

   return (
      <div ref={container} className='flex gap-25 w-full justify-between items-center'>

         <div ref={imgRef}>
            <Image
               src={profile}
               alt='pic of me'
               width={250}
               height={250} 
               className='rounded-full brightness-80'
               priority 
            />
         </div>

         <div className='flex flex-col gap-6'>
            <h1 className='text-slate-300 text-6xl inline tracking-tight font-rounded'>
               <span id='heroTxt'></span>
               <span id='cursor' className='text-cyan-300 font-bold font-mono'>_</span>
            </h1>

            <p id='heroParagraph' className='inline text-sm text-slate-400 font-rounded leading-relaxed'>
               Building high-performance web applications at the intersection of Next.js logic and<br /> robust Prisma backends, fueled by a love for clean code and anime.
            </p>
            <EmailBtn />
         </div>
      </div>
   );
}

export default HeroText;