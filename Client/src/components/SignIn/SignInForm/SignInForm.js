import React from 'react'
import './SignInForm.css'
import Input from './Input/Input'
import Register from './Register/Register'
import Submit from './Submit/Submit'

export default function SignInForm(){
  return(
    <div className='form-wrapper'>
      <h1 className='form-title'>Bienvenido a <br /> 
        <span>
          HenCor  
           <span>
             contactos
          </span>
        </span>
      </h1>
      <form className='form-body'>
        <Input id='email' type='email' title='Correo' />
        <Input id='password' type='password' title='Contraseña' />
        <Submit />
        <Register />
      </form>
    </div>
  )
}
