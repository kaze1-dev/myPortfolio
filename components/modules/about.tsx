import React from 'react'

const About = () => {
   return (
      <section id='about' className='max-h-screen font-rounded tracking-tight w-full'>
         <div className='px-26'>

            <h1 className='text-4xl tracking-tight font-bold text-slate-300 mb-10'>/ about me</h1>
            <div className='flex gap-20'>
               <div>
                  <p className='text-slate-400 text-lg leading-relaxed [word-spacing:0.3rem]'>
                     <span className='font-bold'>Computer Science Student</span> & <span className='font-bold'>Full-stack Developer</span> fueled by caffeine and <span className='font-bold'>90s anime.</span> I specialize in crafting high-performance apps using<span className='font-bold text-cyan-300'> Next.js</span> and <span className='font-bold text-cyan-300'>Prisma.</span> I trade the mouse for the CLI and light themes for Slate-950. Currently leveling up my <span className='font-bold text-cyan-300'>backend</span> architecture, one <span className='font-bold text-cyan-300'>PostgreSQL</span> query at a time.
                  </p>

                  <p className='text-slate-400 text-lg leading-relaxed [word-spacing:0.3rem] mt-6'>
                     Outside of code, I am a literary fiction lover, a professional daydreamer, and I spend way too much time debating the best anime of all time (spoiler: it's a tie between <span className='font-bold text-cyan-300'>Cowboy Bebop</span> and <span className='font-bold text-cyan-300'>Neon Genesis Evangelion.</span>)
                  </p>
               </div>
               <div className='flex flex-col gap-4'>
                  <div className='flex text-cyan-300 font-bold gap-2'>
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
                  <div className='flex text-cyan-300 font-bold gap-2'>
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
                  <div className='flex text-cyan-300 font-bold gap-2'>
                     <div className=''>
                        <div className='border-cyan-300 border-solid border px-4 py-2 rounded-lg'>TAILWINDCSS</div>
                     </div>
                     <div>
                        <div className='border-cyan-300 border-solid border px-4 py-2 rounded-lg'>JAVASCRIPT ES6+</div>
                     </div>
                  </div>
                  <div className='flex text-cyan-300 font-bold gap-2'>
                     <div className=''>
                        <div className='border-cyan-300 border-solid border px-4 py-2 rounded-lg'>MONGODB</div>
                     </div>
                     <div>
                        <div className='border-cyan-300 border-solid border px-4 py-2 rounded-lg'>HTML/CSS</div>
                     </div>
                     <div>
                        <div className='border-cyan-300 border-solid border px-4 py-2 rounded-lg'>GIT</div>
                     </div>
                  </div>
                  <div className='flex text-cyan-300 font-bold gap-2'>
                     <div className=''>
                        <div className='border-cyan-300 border-solid border px-4 py-2 rounded-lg'>GITHUB</div>
                     </div>
                     <div>
                        <div className='border-cyan-300 border-solid border px-4 py-2 rounded-lg'>ENGLISH</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About