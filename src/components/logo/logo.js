import React from 'react'

import '../../main.css'
import './logo.css'

export default function Logo(props) {
  const logo = '{-}'

  return (
    <div>
      <p className={'pointer no-select | logo'} style={{fontSize: props.fontSize + 'px'}}>{logo}</p>
    </div>
  )
}

