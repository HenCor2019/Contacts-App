import React from 'react'
import './HandlerSignUp.css'
import { useParams } from 'react-router'

export default function HandlerSignUp(){
  const { token } = useParams()
  return(
    <div className='verify-email-wrapper'>
      <h1 className='verify-email-message'>Para verificar tu correo electrónico, por favor presiona el siguiente botón</h1>
      <button className='btn-verify-email'>Verificar correo</button>

    </div>
  )

}
