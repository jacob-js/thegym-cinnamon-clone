import React, { useEffect, useState } from 'react'
import Button from '../../ui/Button'

function Navbar() {
  const [sticked, setSticked] = useState();

  useEffect(() =>{
    (() =>{
      window.addEventListener('scroll', () =>{
        setSticked(window.scrollY > 50)
      });
    })()
  }, []);

  const theme = sticked ? 'text-black bg-white': 'text-white';

  return (
    <div className={`navbar fixed w-full top-0 left-0 py-5 z-30 font-semibold transition-all ${theme}`}>
      <div className="content flex justify-between items-center">
        <img src={sticked ? "/app/logo-dark.svg": "/app/logo-white.svg"} alt="" className='h-5' />
        <div className="hidden sm:flex gap-8 items-center">
          <div className="hover:text-primary transition-all cursor-pointer">Projects</div>
          <div className="hover:text-primary transition-all cursor-pointer">Services</div>
          <div className="hover:text-primary transition-all cursor-pointer">About Us</div>
          <div className="hover:text-primary transition-all cursor-pointer">Careers</div>
          <div className="hover:text-primary transition-all cursor-pointer">Blog</div>
          <div className={
            `w-11.5 h-11.5 rounded-full border-2 flex justify-center items-center cursor-pointer transition-all hover:border-primary hover:bg-primary hover:text-white ${sticked ? 'border-primary text-primary': 'border-white text-white'}`
          }>
            <i className="fa-sharp fa-solid fa-play text-lg "></i>
          </div>
          <Button>Contact us</Button>
        </div>
        <div className="sm:hidden">
          {
            !sticked ?
            <img src="https://cinnamon.agency/_next/static/media/mobile-menu-icon-light.0de793a8.svg" alt="" />:
            <img src="https://cinnamon.agency/_next/static/media/mobile-menu-icon-dark.d2469ff9.svg" alt="" />
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar