"use client";
import React from 'react'
import { Icons } from '../icons'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const ProjectContent = () => {
  const hRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    gsap.from(".heading", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "back.out(3)",
      scrollTrigger: {
        trigger: ".heading",
        start: "top 80%",
      }
    })

    gsap.from(".cards", {
      opacity: 0,
      y: 50,
      duration: 0.5,
      ease: "back.out(1)",
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".cards",
        start: "top 80%"
      }
    })
  }, { scope: hRef })
  return (
    <div ref={hRef}>
      <h1 className='text-4xl tracking-tight font-bold text-slate-300 mt-20 mb-10 heading'>/ Projects</h1>
      <div className='grid grid-cols-3 gap-2'>
        <div className='bg-[#112240] rounded-2xl px-8 pt-8 pb-20 cards'>
          <div className='flex justify-between items-center'>
            <Icons.folder className='w-8 h-8 text-cyan-300' />
            <Icons.gitHub className='w-6 h-6 text-slate-300 hover:cursor-pointer hover:text-cyan-300' />
          </div>
          <h2 className='text-xl font-bold text-slate-300 mt-6'>SaaS subscription<br /> Dashboard</h2>
          <p className='text-sm text-slate-400 mt-2 leading-relaxed'>
            A brief description of the project goes here. It highlights the main features and technologies used.
          </p>
          <p className='text-sm text-slate-400 mt-10'>
            TypeScript, Next.js, Prisma, Tailwind CSS
          </p>
        </div>
        <div className='bg-[#112240] rounded-2xl px-8 pt-8 pb-20 cards'>
          <div className='flex justify-between items-center'>
            <Icons.folder className='w-8 h-8 text-cyan-300' />
            <Icons.gitHub className='w-6 h-6 text-slate-300 hover:cursor-pointer hover:text-cyan-300' />
          </div>
          <h2 className='text-xl font-bold text-slate-300 mt-6'>Project Title</h2>
          <p className='text-sm text-slate-400 mt-2 leading-relaxed'>
            A brief description of the project goes here. It highlights the main features and technologies used.
          </p>
          <p className='text-sm text-slate-400 mt-10'>
            TypeScript, Next.js, Prisma, Tailwind CSS
          </p>
        </div>
        <div className='bg-[#112240] rounded-2xl px-8 pt-8 pb-20 cards'>
          <div className='flex justify-between items-center'>
            <Icons.folder className='w-8 h-8 text-cyan-300' />
            <Icons.gitHub className='w-6 h-6 text-slate-300 hover:cursor-pointer hover:text-cyan-300' />
          </div>
          <h2 className='text-xl font-bold text-slate-300 mt-6'>Project Title</h2>
          <p className='text-sm text-slate-400 mt-2 leading-relaxed'>
            A brief description of the project goes here. It highlights the main features and technologies used.
          </p>
          <p className='text-sm text-slate-400 mt-10'>
            TypeScript, Next.js, Prisma, Tailwind CSS
          </p>
        </div>
        <div className='bg-[#112240] rounded-2xl px-8 pt-8 pb-20 cards'>
          <div className='flex justify-between items-center'>
            <Icons.folder className='w-8 h-8 text-cyan-300' />
            <Icons.gitHub className='w-6 h-6 text-slate-300 hover:cursor-pointer hover:text-cyan-300' />
          </div>
          <h2 className='text-xl font-bold text-slate-300 mt-6'>Project Title</h2>
          <p className='text-sm text-slate-400 mt-2 leading-relaxed'>
            A brief description of the project goes here. It highlights the main features and technologies used.
          </p>
          <p className='text-sm text-slate-400 mt-10'>
            TypeScript, Next.js, Prisma, Tailwind CSS
          </p>
        </div>
        <div className='bg-[#112240] rounded-2xl px-8 pt-8 pb-20 cards'>
          <div className='flex justify-between items-center'>
            <Icons.folder className='w-8 h-8 text-cyan-300' />
            <Icons.gitHub className='w-6 h-6 text-slate-300 hover:cursor-pointer hover:text-cyan-300' />
          </div>
          <h2 className='text-xl font-bold text-slate-300 mt-6'>Project Title</h2>
          <p className='text-sm text-slate-400 mt-2 leading-relaxed'>
            A brief description of the project goes here. It highlights the main features and technologies used.
          </p>
          <p className='text-sm text-slate-400 mt-10'>
            TypeScript, Next.js, Prisma, Tailwind CSS
          </p>
        </div>
        <div className='bg-[#112240] rounded-2xl px-8 pt-8 pb-20 cards'>
          <div className='flex justify-between items-center'>
            <Icons.folder className='w-8 h-8 text-cyan-300' />
            <Icons.gitHub className='w-6 h-6 text-slate-300 hover:cursor-pointer hover:text-cyan-300' />
          </div>
          <h2 className='text-xl font-bold text-slate-300 mt-6'>Project Title</h2>
          <p className='text-sm text-slate-400 mt-2 leading-relaxed'>
            A brief description of the project goes here. It highlights the main features and technologies used.
          </p>
          <p className='text-sm text-slate-400 mt-10'>
            TypeScript, Next.js, Prisma, Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectContent