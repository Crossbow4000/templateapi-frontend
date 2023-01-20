import React from 'react';

import NavigationBar from '../../components/navigation-bar/navigation-bar.js'
import MainSection from './components/main-section/main-section.js'

export default function HomePage() {
  return (
    <div>
      <NavigationBar page="home" />
      <MainSection />
    </div>
  )
}

