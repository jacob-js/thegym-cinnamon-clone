import React from 'react'

function ArticleItem({imgUrl, type, author, date, min, title}) {
  return (
    <div className='flex flex-col gap-4'>
        <img src={imgUrl} alt="" />
        <div className="text-xs font-bold uppercase">{type}</div>
        <div className="flex gap-3 text-grey font-medium items-baseline tracking-tight">
            <div className="">{author.substr(0, 19)} {author.length > 19 ? '...': ''}</div>
            <div className="w-[6px] h-[6px] rounded-full bg-[#FFCB47]"></div>
            <div className="">{date}</div>
            <div className="w-[6px] h-[6px] rounded-full bg-[#FFCB47]"></div>
            <div className="">{min}</div>
        </div>
        <div className="text-2xl font-bold cursor-pointer">{title}</div>
    </div>
  )
}

export default ArticleItem