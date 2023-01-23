import React from 'react';

import '../../../../main.css'
import './main-section.css'

export default function MainSection() {
  return (
    <div>
      <HeroSection/>
      <Features/>
    </div>
  )
}

function HeroSection() {
  function ScrollToFeatures() {
    let featuresSection = document.getElementById('features')
    if(featuresSection) {
      featuresSection.scrollIntoView()
    }
  }

  return (
    <div className={"grid | hero-section"}>
      <h1 className={"no-select gradient-text | main-title"}>Template<span>API</span></h1>
      <h2 className={"main-subtitle"}>A reliable, easy-to-use API for testing anything.</h2>
      <div className={"flex | hero-buttons-container"}>
        <button className={"no-select | outline-button"}>Login</button>
        <button className={"no-select | gradient-button"}>Sign Up</button>
      </div>
      <button onClick={ScrollToFeatures()}><svg className={"scroll-button-icon"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></button>
    </div>
  )
}

function Features() {
  return (
    
    <div className={"flex"}>
      <div className={"grid | features"} id={"features"}>

        <div className={"grid | feature"}>
          <svg className={"feature-icon"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z"/></svg>
          <div className={"grid | feature-text-container"}>
            <h3 className={"feature-title"}>Blazing Fast</h3>
            <p className={"feature-description"}>Make a request and get a response in a fraction of a second.</p>
          </div>
        </div>

        <div className={"grid | feature"}>
          <svg className={"feature-icon"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 0v64h64V96H64zm384 0H192v64H448V96zM64 224v64h64V224H64zm384 0H192v64H448V224zM64 352v64h64V352H64zm384 0H192v64H448V352z"/></svg>          <div className={"grid | feature-text-container"}>
            <h3 className={"feature-title"}>Easy To Use</h3>
            <p className={"feature-description"}>Powerful tooling makes creating a template easy.</p>
          </div>
        </div>

        <div className={"grid | feature"}>
          <svg className={"feature-icon"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/></svg>          <div className={"grid | feature-text-container"}>
            <h3 className={"feature-title"}>Seamless Integration</h3>
            <p className={"feature-description"}>Easily integrate with any project in just a few lines of code.</p>
          </div>
        </div>

      </div>
    </div>
    
  )
}