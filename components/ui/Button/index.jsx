import React from 'react'

function Button({children, className}) {
  return (
    <button className={`btn outline-none bg-primary hover:text-primary border-2 border-primary text-white px-8 flex items-center relative overflow-hidden shadow-white transition-all h-12 ${className} w-max`}>
        <div className="btn__shadow shadow-btn absolute w-12/10 z-0 pt-12/10 top-2/4 left-2/4 rounded-full -translate-x-2/4 -translate-y-2/4 transition-transform duration-300"></div>
        <span className='relative z-10 font-medium'>{children}</span>
    </button>
  )
}

export default Button