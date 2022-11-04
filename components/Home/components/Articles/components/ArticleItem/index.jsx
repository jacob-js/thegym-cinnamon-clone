import React from 'react'

function ArticleItem({imgUrl, type, author, date, min, title}) {
  return (
    <div className='flex flex-col gap-4'>
        <img src={imgUrl} alt="" />
        <div className="text-xs font-bold uppercase">{type}</div>
        <div className="flex gap-3 text-grey font-medium items-baseline tracking-tight">
            <div className="hidden lg:block">{author.substr(0, 19)} {author.length > 19 ? '...': ''}</div>
            <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
            <div className="w-max">{date}</div>
            <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
            <div className="w-max">{min}</div>
        </div>
        <div className="text-xl lg:text-2xl font-bold cursor-pointer">{title}</div>
    </div>
  )
}

export default ArticleItem