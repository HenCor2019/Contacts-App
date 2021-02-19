import React from 'react'
import './ImgInformation.css'

export default function ImgInformation({ img, message }){
  return(
    <div>
      <img src={img} alt={message} className='home-img-information' />
      <p className='home-message-information'>{message}</p>
    </div>
  )
}
