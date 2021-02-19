import React from 'react'
import './BannerLeft.css'

export default function BannerLeft({ title }){
  return(
    <div className="banner-left">
      <h1 className='banner-left-title'>{ title } <span>contactos</span></h1>
    </div>
  )
}
