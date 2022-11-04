import React from 'react'

function TestimonialItem({title, msg, avatarUrl, name, job, logoUrl}) {
  return (
    <div className='grid lg:grid-cols-12 gap-8'>
      <div className="col-start-1 lg:col-end-10 flex flex-col gap-8">
        <div className="flex relative">
          <div className="absolute font-bold text-43.75 lg:text-64.5 opacity-10 lg:-top-32 -top-20 -left-10 lg:-left-24">“</div>
          <div className="text-8 lg:text-4.5xl leading-10 lg:leading-14 font-bold">{title}</div>
        </div>
        <div className="text-gray-600 lg:w-4/5">{msg}</div>
        <div className="flex items-center gap-6">
          <div className="w-17 h-17 rounded-full overflow-hidden flex items-center justify-center">
            <img src={avatarUrl} alt="" className='max-w-full' />
          </div>
          <div className="flex flex-col">
            <div className="text-2xl font-bold">{name}</div>
            <div className="">{job}</div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex col-start-11 col-end-13 items-center">
        <img src={logoUrl} alt="" className='max-w-full' />
      </div>
    </div>
  )
}

export default TestimonialItem