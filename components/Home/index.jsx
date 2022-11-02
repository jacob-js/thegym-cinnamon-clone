import React from 'react'
import AgileTeam from './components/AgileTeam'
import CaseStudy from './components/CaseStudy'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonial from './components/Testimonial'

function Home() {
  return (
    <div>
        <Hero />
        <CaseStudy />
        <Services />
        <AgileTeam />
        <Testimonial />
    </div>
  )
}

export default Home