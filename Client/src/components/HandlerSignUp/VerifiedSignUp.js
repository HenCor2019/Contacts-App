import React from 'react'
import './VerifiedSignUp.css'
import EmailVerified from '../../img/Registrado.svg'

export default function VerifiedSignUp(){
  return(
    <div className="verified-email-wrapper">
      <h1 className="verified-email-message">Bienvenido a HenCor contactos <br /> <span>Henry Alexander</span></h1>
      <img className="verified-email-img" src={EmailVerified} alt="verified email" />
    </div>
  )
}
