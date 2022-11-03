import React from 'react'

function CaseStudyItem({bg, imgUrl, tags, title, text}) {
  return (
    <div className='flex flex-col gap-8 case-study'>
        <div className={`w-full overflow-hidden bg-${bg} flex items-center justify-center case-study__img-container cursor-pointer`}>
            <img src={imgUrl} alt="" className='max-w-full case-study__img transition-transform duration-500' />
        </div>
        <div className="flex flex-wrap w-3/4 lg:w-full gap-4 lg:gap-8">
            {
                tags.map((tag, index) =>(
                    <div className="uppercase w-max text-xs text-gray-500 font-bold" key={index}>{tag}</div>
                ))
            }
        </div>
        <div className="text-4.5xl leading-14 font-bold">{title}</div>
        <div className="text-gray-600 max-w-3xl leading-7 font-medium">{text}</div>
    </div>
  )
}

export default CaseStudyItem