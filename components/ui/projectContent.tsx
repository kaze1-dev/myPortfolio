"use client";
import React from 'react'
import { Icons } from '../icons'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';

const ProjectContent = () => {
  const hRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    gsap.from(".heading", {
      opacity: 0,
      y: 50,
      duration: 0.3,
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
      <h1 className='text-2xl lg:text-4xl tracking-tight font-bold text-slate-300 mt-20 mb-10 heading'>/ Projects</h1>
      <div className='flexs justify-center'>
        <div className='bg-[#112240] rounded-2xl px-8 py-8 cards'>
          <div className='flex justify-between items-center'>
            <Icons.folder className='w-8 h-8 text-cyan-300' />
            <div className='flex gap-6 items-center '>
              <Icons.gitHub className='w-6 h-6 text-slate-300 hover:cursor-pointer hover:text-cyan-300' />
              <ExternalLink className='w-6 h-6 text-slate-300 hover:cursor-pointer hover:text-cyan-300' />
            </div>
          </div>
          <h2 className='text-xl font-bold text-slate-300 mt-8 mb-6'>Analytics Dashboard</h2>
          <p className='text-sm text-slate-400 mt-2 leading-relaxed'>
            A Responsive Full-stack business management dashboard utilizing a modular backend architecture for optimal scalability and clean code separation.
          </p>
          <p className='text-sm text-slate-400 mt-10'>
            TypeScript, Next.js, Prisma, PosegreSQL, Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectContent