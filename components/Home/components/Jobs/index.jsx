import React from 'react'
import Button from '../../../ui/Button'

function Jobs() {
    const jobs = ['Android Developer', 'Android Developer', 'Backend Development Team Lead'];

  return (
    <div className='bg-black bg-opacity-90 bg-noise py-40'>
        <div className="content text-white grid grid-cols-12 items-center">
            <div className="flex flex-col gap-8 col-start-1 col-end-6">
                <div className="text-13.5 font-bold">We’re growing</div>
                <div className="text-light">Jump on board with Cinnamon and get the privilege of working on challenging projects for leading global companies! Make the world a better, more connected place.</div>
                <Button>See All Positions</Button>
            </div>
            <div className="flex flex-col gap-8 col-start-8 col-end-13">
                {
                    jobs.map((job, index) =>(
                        <div className="grid grid-cols-[auto,3rem] gap-8 border-b border-thin-light py-6" key={index}>
                            <span className="text-2xl font-medium">{job}</span>
                            <img src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FarrowRightWhite.ec432a63.png&w=48&q=75" alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Jobs