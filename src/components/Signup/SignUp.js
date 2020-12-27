import React from 'react'
import BannerLeft from './BannerLeft/BannerLeft'
import BannerRight from './BannerRight/BannerRight'
import Form from './Form/Form'
import './SignUp.css'

export default function SignUp(){
  return(
    <div className='sign-up-wrapper'>
      <BannerLeft title='HenCor contactos' />
      <Form />
      <BannerRight 
         title='Controla tus contactos' 
         message='Agenda los contactos más importantes'
      />
    </div>
  )
}
