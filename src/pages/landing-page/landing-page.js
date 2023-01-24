import React from 'react'
import { useRef } from 'react'

import LandingPageNavigationBar from './components/landing-page-navigation-bar/landing-page-navigation-bar.js'
import HeroSection from './components/hero-section/hero-section.js'
import Features from './components/features/features.js'

export default function LandingPage() {
  const featuresSection = useRef()

  return (
    <div>
      <LandingPageNavigationBar page="home"/>
      <HeroSection featuresSection={featuresSection}/>
      <Features featuresSection={featuresSection}/>
    </div>
  )
}

