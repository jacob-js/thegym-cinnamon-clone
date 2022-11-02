import React from 'react'

function OfficeItem({imgUrl, city, address}) {
  return (
    <div className='lg:w-[540px] shrink-0 flex flex-col gap-8'>
        <img src={imgUrl} alt="" className='max-w-full' />
        <div className="flex gap-4">
            <i class="bi bi-geo-alt text-lg font-bold"></i>
            <div className="flex flex-col gap-3">
                <span className="font-bold text-2xl">{city}</span>
                <div className="text-gray-700">{address}</div>
            </div>
        </div>
    </div>
  )
}

export default OfficeItem