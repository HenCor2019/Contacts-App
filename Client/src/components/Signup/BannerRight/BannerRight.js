import React from 'react'
import './BannerRight.css'

export default function BannerRight({ title, message }){
  return(
    <div className="banner-right">
      <h1 className='banner-right-title'>{ title }</h1>
      <p className='banner-right-message'>{ message }</p>
    </div>
  )
}

