import React from 'react'

function ServiceItem({iconUrl, title, text}) {
  return (
    <div className='flex flex-col gap-8'>
        <div className="">
            <img src={iconUrl} alt="" />
        </div>
        <div className="text-white font-bold text-2xl">{title}</div>
        <div className="text-light">{text}</div>
    </div>
  )
}

export default ServiceItem