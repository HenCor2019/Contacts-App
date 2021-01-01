import React from 'react'
import emailImage from '../../../img/mensaje_enviado.svg'

import './Register.css'


export default function Register( { email, username } ){
  return(
    <div className='register-wrapper-account'>
       <h1 className='register-title'>Hola <span>{ username }</span>!</h1>
       <p className='register-message'>Por favor verifica si es tu dirección de correo electónico es <span>{ email }</span>. y que lo ingresaste cuando te registraste para HenCor contactos</p>
       <img src={emailImage} alt="email send" className='register-img' />
    </div>

  )
}
