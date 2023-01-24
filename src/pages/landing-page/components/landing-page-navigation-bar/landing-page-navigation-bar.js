import React from 'react';
import { Outlet, Link } from "react-router-dom";

import Logo from '../../../../components/logo/logo.js'

import '../../../../main.css'
import './landing-page-navigation-bar.css'

export default function LandingPageNavigationBar(props) {
  return (
    <div className="flex | navigation-bar">
      <Logo />
      <p className={'no-select | navigation-divider'}>|</p>
      <div className={'flex | navigation-links'}>
        {props.page == 'home'      ? <PageLink name="Home" isCurrentPage="true" />      : <PageLink name="Home" /> }
        {props.page == 'dashboard' ? <PageLink name="Dashboard" isCurrentPage="true" /> : <PageLink name="Dashboard" /> }
      </div>
      <Outlet/>
    </div>
  )
}



function PageLink(props) {

  let link
  if(props.name.toLowerCase() == 'home') {
    link = '/'
  } else {
    link = `/${props.name.toLowerCase()}`
  }

  if (props.isCurrentPage == 'true') {
    return (
      <div className={'pointer | page-link'}>
        <Link to={link} className={'no-select | page-link-text'}>{props.name}</Link>
        <div className={'page-link-is-current-page'}></div>
      </div>
    )
  } else {
    return (
      <div className={'pointer | page-link'}>
        <Link to={link} className={'no-select | page-link-text'}>{props.name}</Link>
      </div>
    )
  }

}