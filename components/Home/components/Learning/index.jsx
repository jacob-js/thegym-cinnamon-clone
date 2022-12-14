/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Button from '../../../ui/Button'

function Learning() {
  return (
    <div className='bg-white relative overflow-hidden'>
        <div className="content py-40 flex flex-col lg:flex-row gap-8 lg:gap-32">
            <div className="max-w-75">
                <img src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcinn-college.70bf2057.png&w=1920&q=75" alt="" className='max-w-full' />
            </div>
            <div className="flex flex-col gap-8 lg:w-1/3">
                <div className="text-grey">Seize the unique opportunity to participate in a wide range of courses conducted by professionals with an impeccable reputation in the digital industry.</div>
                <Button>See How It Works</Button>
            </div>
        </div>
        <img src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcinn-college-illustration.180f68e4.png&w=640&q=75" alt="" className="hidden lg:block absolute -bottom-2 right-0 max-w-139 max-h-100.5" />
    </div>
  )
}

export default Learning