import React from 'react'
import Button from '../../../ui/Button';
import ServiceItem from './components/ServiceItem';

function Services() {
    const data = [
        {
            iconUrl: 'https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproduct-design.cdb049ad.png&w=48&q=75',
            title: 'Product design',
            text: 'Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that’s easy on the eyes.'
        },
        {
            iconUrl: 'https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdevelopment.1440a123.png&w=48&q=75',
            title: 'Development',
            text: "By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until it's a fully-fledged digital solution."
        },
        {
            iconUrl: 'https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fquality-assurance.9e7ba47b.png&w=48&q=75',
            title: 'Quality assurance',
            text: "Our QA engineering team makes your product bug-free, bulletproof and performance-driven through both automatic and manual testing."
        },
        {
            iconUrl: 'https://cinnamon.agency/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarketing-and-growth.35184bb3.png&w=48&q=75',
            title: 'Marketing & growth',
            text: "By understanding the mechanics of digital marketing, we make sure to put your product, at the right time, in front of the right people."
        }
    ];

  return (
    <div className='py-40 bg-black bg-opacity-90 bg-noise'>
        <div className="content grid grid-cols-12 gap-8">
            <div className="text-white text-13.5 font-bold tracking-tight col-start-1 lg:col-end-5">Our Services</div>
            <div className="lg:col-start-6 lg:col-end-13 grid grid-cols-2 gap-16 lg:gap-x-32 lg:gap-y-30">
                {
                    data.map((service, index) =>(
                        <ServiceItem key={index} {...service} />
                    ))
                }
                <Button>See Our Services</Button>
            </div>
        </div>
    </div>
  )
}

export default Services