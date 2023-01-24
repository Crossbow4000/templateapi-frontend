import React from 'react';

import '../../../../main.css'
import './hero-section.css'

export default function HeroSection(props) {
  const ScrollToFeatures = () => {
    props.featuresSection.current?.scrollIntoView()
  }

  return (
    <div className={"grid | hero-section"}>
      <h1 className={"no-select gradient-text | main-title"}>Template<span>API</span></h1>
      <h2 className={"main-subtitle"}>A reliable, easy-to-use API for testing anything.</h2>
      <div className={"flex | hero-buttons-container"}>
        <button className={"no-select | outline-button"}>Login</button>
        <button className={"no-select | gradient-button"}>Sign Up</button>
      </div>
      <button onClick={ScrollToFeatures}><svg className={"scroll-button-icon"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></button>
    </div>
  )
}