import React from 'react'
import './Submit.css'

export default function Submit(){
  return(
      <div className="submit-wrapper">
         <input type="submit" className='btn-submit' value='Entrar' />
         <a href="#" className='recover-password-link'>¿Olvidaste tu contraseña?</a>
      </div>
  )
}
