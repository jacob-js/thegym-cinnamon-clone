import React from 'react'

function CaseStudyItem({bg, imgUrl, tags, title, text}) {
  return (
    <div className='flex flex-col gap-8'>
        <div className={`w-full bg-${bg} flex items-center justify-center`}>
            <img src={imgUrl} alt="" className='max-w-full' />
        </div>
        <div className="flex gap-8">
            {
                tags.map((tag, index) =>(
                    <div className="uppercase text-xs text-gray-600 font-bold" key={index}>{tag}</div>
                ))
            }
        </div>
        <div className="text-4.5xl leading-14 font-bold">{title}</div>
        <div className="text-gray-600 max-w-3xl leading-7 font-medium">{text}</div>
    </div>
  )
}

export default CaseStudyItem