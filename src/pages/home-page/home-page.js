import React from 'react';

import NavigationBar from '../../components/navigation-bar/navigation-bar.js';

import './home-page.css'
import '../../main.css'

export default function HomePage() {
  return (
    <div>
      <NavigationBar page="home" />
      <MainSection />
    </div>
  )
}

function MainSection() {
  return (
    <div>
      <h1 className={"main-title"}>Template<span className="main-title-API">API</span></h1>
    </div>
  )
}
