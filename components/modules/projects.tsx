import React from 'react'
import { Icons } from '../icons'

const Projects = () => {
  return (
    <section className='h-screen font-rounded tracking-tight px-34'>
      <h1 className='text-4xl tracking-tight font-bold text-slate-300 mb-10'>/ Projects</h1>
      <div className='flex flex-row gap-4'>
         <div className='bg-slate-800 px-6 rounded-lg mr-6 flex flex-col'>
            <div className='flex flex-row'>
            <Icons.folder className='w-12 h-12 text-cyan-300 mb-4' />
            <Icons.gitHub className='w-12 h-12 text-slate-300 mb-4' />
            </div>
            <h2 className='text-2xl'>
               Project name
            </h2>
         </div>
         <div className='bg-slate-800 p-4 rounded-lg mr-6 flex'>
            <Icons.folder className='w-12 h-12 text-cyan-300 mb-4' />
            <Icons.gitHub className='w-12 h-12 text-slate-300 mb-4' />
         </div>
         <div className='bg-slate-800 p-4 rounded-lg mr-6 flex'>
            <Icons.folder className='w-12 h-12 text-cyan-300 mb-4' />
            <Icons.gitHub className='w-12 h-12 text-slate-300 mb-4' />
         </div>
      </div>
    </section>
  )
}

export default Projects