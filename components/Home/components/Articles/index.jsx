import React from 'react'
import ArticleItem from './components/ArticleItem';

function Articles() {
    const data = [
        {
            imgUrl: 'https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F4z4OPjERGBRoMzBhMFKHPE%2Fd29f2e92e90c78f6427c1eba8517b9ae%2FFreelance_VS._Agency_blog_illustration.png&w=1920&q=75',
            type: 'Sales',
            author: 'Matija Bermanec & Lorena Ujević',
            date: '2022-10-13',
            min: '6min',
            title: 'Differences in Hiring an Agency vs. Freelancers 2.0'
        },
        {
            imgUrl: 'https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F3zWnPZ05ZNw8AmNrhgFfW%2Fd74e0c4a8f8a8a117bbb3094fc296284%2FFlutter_Template.png&w=1920&q=75',
            type: 'Development',
            author: 'Samantha Holstead',
            date: '2022-10-03',
            min: '3min',
            title: 'Cinnamon Flutter Template Overview'
        },
        {
            imgUrl: 'https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F24GZhGCgX2qB0dHVfXOpPt%2F91d8876c0bc4ae8790cc8e6d61c66192%2FTinder_blog.png&w=1920&q=75',
            type: 'Design',
            author: 'Jan Marin',
            date: '2022-09-15',
            min: '10min',
            title: 'How Tinder Swindled User Experience'
        }
    ];

  return (
    <div className='bg-white py-40'>
        <div className="content flex flex-col gap-16">
            <div className="text-4.5xl leading-14 lg:text-13.5 lg:leading-tight font-bold max-w-md text-gray-900">Stay in the loop<br /> on tech topics</div>
            <div className="flex overflow-x-auto hidden-bar lg:grid grid-cols-3 gap-8 ">
                {
                    data.map((item, index) =>(
                        <ArticleItem key={index} {...item} />
                    ))
                }
            </div>
            <div className="flex text-primary gap-5 items-center">
                <i className="fa-solid fa-chevron-right text-xs"></i>
                <div className="border-b border-primary pb-1 font-bold cursor-pointer">VIEW MORE BLOGS</div>
            </div>
        </div>
    </div>
  )
}

export default Articles