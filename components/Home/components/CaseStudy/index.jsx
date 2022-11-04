import React from 'react'
import CaseStudyItem from './components/CaseStudyItem';

function CaseStudy() {
    const data = [
        {
            imgUrl: 'https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F281NSZSG7VvkxHDig0qbBA%2F70ac7de86b0bb84190916ee9aac33aa7%2FMockup_1.png&w=1920&q=80',
            bg: 'green',
            tags: ['PRODUCT DESIGN', 'QUALITY ASSURANCE'],
            title: <>Corrily: Optimize prices <br />to maximize revenue</>,
            text: "Corrily tailors your prices and discounts to the needs of different user segments in order to increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily and incorporating a fresh, and stunning website redesign."
        },
        {
            imgUrl: 'https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F14zPgk0p1qf0yptSYRjHBW%2F94e47560492e6602f69d9ee91be4ab61%2FFiona_Thumbnail.png&w=1920&q=80',
            bg: 'purple',
            tags: ['PRODUCT DESIGN', 'WEB DEVELOPMENT'],
            title: <>Fiona: Engage & <br/>Decide</>,
            text: "Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations."
        },
        {
            imgUrl: 'https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F7kFgIXzEEYLIM678mr3mzo%2F6401985a011c0ae2ce0b3f940499f4c1%2Fthumbnail.png&w=1920&q=80',
            bg: 'choco',
            tags: ['PRODUCT DESIGN', 'WEB DEVELOPMENT', 'QUALITY ASSURANCE'],
            title: <>Ukulele: <br/> The largest ukulele tabs archive</>,
            text: "Ukulele is the number one ukulele community, where players of any level can find the most complete tabs and chords. Cinnamon offered a complete platform redesign including expansions and new features, focusing on keeping the user longer on the website."
        }
    ];

  return (
    <div className='content py-40 flex flex-col gap-40'>
        {
            data.map((item, index) =>(
                <CaseStudyItem {...item} key={index} />
            ))
        }
    </div>
  )
}

export default CaseStudy