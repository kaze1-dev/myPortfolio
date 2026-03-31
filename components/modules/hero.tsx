import React from 'react'

const Hero = () => {
   return (
      <section className='flex justify-center items-center'>
         <div className='flex flex-col pt-20 gap-8'>
         <h1 className='text-slate-300 text-6xl inline tracking-tight font-md'>
            hi, I'm <span className='text-sky-400'>kaze.</span>
         </h1>
         <p className='inline text-sm text-slate-500 font-sans leading-relaxed'>
           Software Engineering student focused on the intersection of Backend Engineering. I specialize in building high-performance<br /> applications using Node.js, TypeScript, and PostgreSQL. Currently engineering and exploring SaaS monitoring solutions,<br /> with a relentless focus on clean architecture and industry-standard development.
         </p>
         </div>
      </section>
   )
}

export default Hero