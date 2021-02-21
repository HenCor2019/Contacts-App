import React from 'react'

// css files
import './InformationMessage.css'

export default function InformationMessage({ error, message }){
  return(
    <p className={!error ? 'signup-wait' : 'signup-err'}>{ message }</p>
  )
}
