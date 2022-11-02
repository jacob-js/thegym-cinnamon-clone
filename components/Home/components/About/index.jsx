import React from 'react'
import Button from '../../../ui/Button'

function About() {
    const stacks = ['Product design', 'Web development', 'Mobile development', 'Quality assurance', 'Marketing', 'Project management', 'Human resources', 'Sales', 'Fluffy friends']
  return (
    <div className='bg-lighter py-40 relative flex items-center'>
        <div className="content flex flex-col gap-14 justify-center">
            <div className="text-13.5 font-bold">Who we are</div>
            <p className="text-gray-700 lg:w-2/5">
            Meet our international teams made up of 86 innovators, branched into 8 departments, that influence the market throughout 20 different countries.
            </p>
            <div className="w-7/10 max-h-80 flex flex-col gap-6 flex-wrap">
                {
                    stacks.map((stack, index) =>(
                        <div className="text-5 leading-9 font-bold" key={index}>{stack}</div>
                    ))
                }
            </div>
            <Button className='mt-4'>Read About Us</Button>
            <div className="absolute right-0 max-w-[340px]">
                <img src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwho-we-are.db3b807b.png&w=640&q=75" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About