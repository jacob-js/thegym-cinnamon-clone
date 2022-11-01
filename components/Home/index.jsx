import React from 'react'
import AgileTeam from './components/AgileTeam'
import CaseStudy from './components/CaseStudy'
import Hero from './components/Hero'
import Services from './components/Services'

function Home() {
  return (
    <div>
        <Hero />
        <CaseStudy />
        <Services />
        <AgileTeam />
    </div>
  )
}

export default Home