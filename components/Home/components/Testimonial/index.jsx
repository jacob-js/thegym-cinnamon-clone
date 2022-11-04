import React from 'react'
import TestimonialItem from './components/TestimonialItem';

function Testimonial() {
  const data = [
    {
      title: "They're consistent, and the communication is good.",
      msg: "When I have a deadline, they would work extra hours on the weekend and after hours. Cinnamon gives the impression of being a smaller team that’s focused on customers.",
      avatarUrl: "https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F25RHUxbYmQGNyDPZAv3ugA%2F4a1c8b7c06bf709f09d8b64feea6ea9a%2FGarinProfile.png&w=1920&q=75",
      name: "Garin Toren",
      job: "CEO, ping",
      logoUrl: "https://cinnamon.agency/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F6mf4aqitzrkt%2F28oURAifg08iWymnAaHweH%2F7b7fb5663e060dfae4de4c3f70c38052%2FpingLogo.png&w=1920&q=75"
    }
  ];

  return (
    <div className='bg-white'>
        <div className="content py-40">
          {
            data.map((item, index) =>(
              <TestimonialItem {...item} key={index} />
            ))
          }
        </div>
    </div>
  )
}

export default Testimonial