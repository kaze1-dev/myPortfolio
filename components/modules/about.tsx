import React from 'react'

const About = () => {
   return (
      <section className='h-screen font-rounded tracking-tight flex justify-start px-34'>
         <div className=''>
            <h1 className='text-4xl tracking-tight font-bold text-slate-300 mb-10'>/ about me</h1>
            <p className='text-slate-400 text-lg leading-relaxed [word-spacing:0.3rem]'>
               <span className='font-bold'>Computer Science Student</span> & <span className='font-bold'>Full-stack Developer</span> fueled by caffeine and <span className='font-bold'>90s anime.<br /></span> I specialize in crafting high-performance apps using<span className='font-bold text-cyan-300'> Next.js</span> and <span className='font-bold text-cyan-300'>Prisma.</span> I trade the<br /> mouse for the CLI and light themes for Slate-950. Currently leveling up my<br /> <span className='font-bold text-cyan-300'>backend</span> architecture, one <span className='font-bold text-cyan-300'>PostgreSQL</span> query at a time.
            </p>
            <p className=' text-slate-400 text-lg leading-relaxed [word-spacing:0.3rem] my-6'>
               Here are some skills I have been working with:
            </p>
            <ul className='list-disc list-inside text-slate-400 text-lg leading-relaxed [word-spacing:0.3rem] mt-4'>
               <li><span className='font-bold text-cyan-300'>Next.js</span> - Building dynamic, high-performance web applications with React.</li>
               <li><span className='font-bold text-cyan-300'>Prisma</span> - Crafting efficient database schemas and queries for robust backends.</li>
               <li><span className='font-bold text-cyan-300'>TypeScript</span> - Ensuring type safety and maintainable code across the stack.</li>
               <li><span className='font-bold text-cyan-300'>PostgreSQL</span> - Designing and optimizing relational databases for scalable applications.</li>
            </ul>
            <p className='text-slate-400 text-lg leading-relaxed [word-spacing:0.3rem] mt-6'>
               Outside of code, I am a literary fiction lover, a professional daydreamer, and I spend way too much time debating the best anime of all time (spoiler: it's a tie between <span className='font-bold text-cyan-300'>Cowboy Bebop</span> and <span className='font-bold text-cyan-300'>Neon Genesis Evangelion.</span>)
            </p>

         </div>
      </section>
   )
}

export default About