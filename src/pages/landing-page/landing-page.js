import React from 'react';

import NavigationBar from '../../components/navigation-bar/navigation-bar.js'
import MainSection from './components/main-section/main-section.js'

export default function LandingPage() {
  return (
    <div>
      <NavigationBar page="home"/>
      <MainSection/>
    </div>
  )
}

