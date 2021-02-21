import React from 'react'
import emailImage from '../../../img/mensaje_enviado.svg'

import './Register.css'


export default function Register( { header, body } ){
  return(
    <div className='register-wrapper-account'>
       <h1 className='register-title'>{ header }!</h1>
       <p className='register-message'>{ body }</p>
       <img src={emailImage} alt="email send" className='register-img' />
    </div>

  )
}
