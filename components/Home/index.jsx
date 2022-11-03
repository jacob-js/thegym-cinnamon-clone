import React from 'react'
import About from './components/About'
import AgileTeam from './components/AgileTeam'
import Articles from './components/Articles'
import CaseStudy from './components/CaseStudy'
import Hero from './components/Hero'
import Jobs from './components/Jobs'
import Learning from './components/Learning'
import Offices from './components/Offices'
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
        <Jobs />
        <Offices />
        <Articles />
    </div>
  )
}

export default Home