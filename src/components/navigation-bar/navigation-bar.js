import React from 'react';

import '../../main.css';
import './navigation-bar.css';

import Logo from '../logo/logo.js'

export default function NavigationBar(props) {
  return (
    <div className="flex | navigation-bar">
      <Logo />
      <p className={'no-select | navigation-divider'}>|</p>
      <div className={'flex | navigation-links'}>
        {props.page == 'home'      ? <PageLink name="Home" isCurrentPage="true" />      : <PageLink name="Home" /> }
        {props.page == 'dashboard' ? <PageLink name="Dashboard" isCurrentPage="true" /> : <PageLink name="Dashboard" /> }
      </div>
    </div>
  );
}



function PageLink(props) {
  if (props.isCurrentPage == 'true') {
    return (
      <div className={'pointer | page-link'}>
        <p className={'no-select | page-link-text'}>{props.name}</p>
        <div className={'page-link-is-current-page'}></div>
      </div>
    );
  } else {
    return (
      <div className={'pointer | page-link'}>
        <p className="no-select | page-link-text">{props.name}</p>
      </div>
    );
  }
}
