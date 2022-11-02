import React from 'react'
import About from './components/About'
import AgileTeam from './components/AgileTeam'
import CaseStudy from './components/CaseStudy'
import Hero from './components/Hero'
import Learning from './components/Learning'
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
        <About />
        <Learning />
    </div>
  )
}

export default Home