import React from 'react'
import {Link} from 'react-router-dom'
import './Register.css'

export default function Register(){
  return(
    <div className="register-wrapper">
       <p className='register-text'>¿No posees una cuenta?</p>
       <Link to='/signUp' className='register-link'>
        Registrarse
       </Link>
    </div>
  )
}
