import React from 'react'
import { useRef } from 'react'

import NavigationBar from '../../components/navigation-bar/navigation-bar.js'
import HeroSection from './components/hero-section/hero-section.js'
import Features from './components/features/features.js'

export default function LandingPage() {
  const featuresSection = useRef()

  return (
    <div>
      <NavigationBar page="home"/>
      <HeroSection featuresSection={featuresSection}/>
      <Features featuresSection={featuresSection}/>
    </div>
  )
}

