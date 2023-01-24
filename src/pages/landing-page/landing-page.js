import React from 'react';

import NavigationBar from '../../components/navigation-bar/navigation-bar.js'
import HeroSection from './components/hero-section/hero-section.js'

export default function LandingPage() {
  return (
    <div>
      <NavigationBar page="home"/>
      <HeroSection/>
    </div>
  )
}

