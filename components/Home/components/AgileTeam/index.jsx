import React from 'react'
import Button from '../../../ui/Button'

function AgileTeam() {
  return (
    <div className='bg-lighter relative overflow-hidden'>
        <div className="content py-40 grid grid-cols-12">
            <div className="text-13.5 font-bold col-start-1 lg:col-end-6">Agile team<br /> on demand</div>
            <div className="flex flex-col gap-8 lg:col-start-7 lg:col-end-11">
                <div className="text-gray-800">By hiring and managing talented people with skills specific to your project, we build you a team that’s accomplished, agile and scalable in both directions.</div>
                <Button>See How It Works</Button>
            </div>
        </div>
        <img src="https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fagile-team-on-demand.316271d9.png&w=384&q=75" alt="" className="absolute -bottom-2 right-0 max-w-[338px] max-h-[220px]" />
    </div>
  )
}

export default AgileTeam