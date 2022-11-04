import React from 'react'
import Button from '../../../ui/Button'

function CallToAct() {
  return (
    <div className='py-40 bg-lighter relative'>
        <div className="content flex flex-col items-center justify-center gap-14 z-20 relative">
            <div className="text-4.5xl text-gray-800 lg:leading-9 lg:text-13.5 font-bold text-center"> <span className='hidden lg:block'>Have a project in mind?</span> <br/> Let&#39;s work together.</div>
            <Button>Contact us</Button>
        </div>
        <img src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjob-application.afe28cef.png&w=640&q=75" alt="" className="absolute bottom-0 left-0 z-10 max-w-[120px] lg:max-w-[428px] max-h-[338px]" />
    </div>
  )
}

export default CallToAct