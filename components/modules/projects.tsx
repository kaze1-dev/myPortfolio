import React from 'react'
import { Icons } from '../icons'

const Projects = () => {
  return (
    <section className='h-screen font-rounded tracking-tight px-34'>
      <h1 className='text-4xl tracking-tight font-bold text-slate-300 mb-10'>/ Projects</h1>
     <div className='grid grid-cols-3 gap-4'>
      <div className='bg-slate-800 rounded-lg p-4'>
        <div className='flex justify-between items-center'>
          <Icons.folder className='w-8 h-8' />
          <Icons.gitHub className='w-6 h-6' />
        </div>
      </div>
      <div className='bg-slate-800 rounded-lg p-4'>
        <div className='flex justify-between items-center'>
          <Icons.folder className='w-8 h-8' />
          <Icons.gitHub className='w-6 h-6' />
        </div>
      </div>
      <div className='bg-slate-800 rounded-lg p-4'>
        <div className='flex justify-between items-center'>
          <Icons.folder className='w-8 h-8' />
          <Icons.gitHub className='w-6 h-6' />
        </div>
      </div>
      <div className='bg-slate-800 rounded-lg p-4'>
        <div className='flex justify-between items-center'>
          <Icons.folder className='w-8 h-8' />
          <Icons.gitHub className='w-6 h-6' />
        </div>
      </div>
      <div className='bg-slate-800 rounded-lg p-4'>
        <div className='flex justify-between items-center'>
          <Icons.folder className='w-8 h-8' />
          <Icons.gitHub className='w-6 h-6' />
        </div>
      </div>
      <div className='bg-slate-800 rounded-lg p-4'>
        <div className='flex justify-between items-center'>
          <Icons.folder className='w-8 h-8' />
          <Icons.gitHub className='w-6 h-6' />
        </div>
      </div>
     </div>
    </section>
  )
}

export default Projects