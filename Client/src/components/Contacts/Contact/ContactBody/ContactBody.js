import React from 'react'

// css files
import './ContactBody.css'

export default function ContactBody({ title, value }){
  return(
    <div>
      <p className="contact-body-input">{ value }</p>
      <br />
      <p className='contact-body'>{ title }</p>
      <hr />
    </div>
  )
}

