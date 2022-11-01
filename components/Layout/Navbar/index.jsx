import React from 'react'
import Button from '../../ui/Button'

function Navbar() {
  return (
    <div className='navbar fixed w-full top-0 left-0 py-5 bg-black bg-opacity-90 bg-noise text-white font-semibold'>
      <div className="content flex justify-between items-center">
        <img src="/app/logo-white.svg" alt="" className='h-5' />
        <div className="flex gap-8 items-center">
          <div className="hover:text-primary transition-all">Projects</div>
          <div className="hover:text-primary transition-all">Services</div>
          <div className="hover:text-primary transition-all">About Us</div>
          <div className="hover:text-primary transition-all">Careers</div>
          <div className="hover:text-primary transition-all">Blog</div>
          <div className="w-11.5 h-11.5 rounded-full border-2 border-white flex justify-center items-center">
            <i class="fa-sharp fa-solid fa-play text-white text-lg"></i>
          </div>
          <Button>Contact us</Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar