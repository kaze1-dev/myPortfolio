import React from 'react'

const Footer = () => {
  return (
    <footer className='text-slate-400 text-xs block py-6 w-full text-center leading-6 font-rounded tracking-tight pt-20 pb-10'>
      <p>Built by Faisal</p>
      <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
    </footer>
  )
}

export default Footer