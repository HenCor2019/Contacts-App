import './Submit.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Submit(){
  return(
      <div className="submit-wrapper">
        <input type="submit" className='btn-submit' value='Entrar' onClick={(e) => e.preventDefault()} />
         <Link to='/' className='recover-password-link'>¿Olvidaste tu contraseña?</Link>
      </div>
  )
}
