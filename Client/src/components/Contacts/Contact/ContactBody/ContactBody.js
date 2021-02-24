import React from 'react'

// css files
import './ContactBody.css'

export default function ContactBody({ title, value }){
  return(
    <div className='contact-body'>
      <p className='contact-body-title'>{ title }</p>
      <p className="contact-body-input">{ value }</p>
    </div>
  )
}

