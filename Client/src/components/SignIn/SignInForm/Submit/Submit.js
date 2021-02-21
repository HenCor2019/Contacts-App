import './Submit.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Submit(){
  return(
      <div className="submit-wrapper">
        <button className="btn-submit">Entrar</button>
         <Link to='/request-password' className='recover-password-link'>¿Olvidaste tu contraseña?</Link>
      </div>
  )
}
