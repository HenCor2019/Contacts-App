import React from 'react'
import Input from '../../SignIn/Form/Input/Input'
import './Form.css'

export default function Form(){
  return(
    <div className="form-wrapper-signup">
      <form className="form-body-signup" >
        <h1 className="form-title-signup">Registrarse</h1>
        <Input
           id='email'
           title='Correo'
           type='email'
        />
        <Input
           id='username'
           title='Nombre de usuario'
           type='text'
        />
        <Input
           id='password'
           title='Contraseña'
           type='password'
        />

        <input
           type='button'
           value='Registrarse'
           className='btn-submit-signup' 
        />

        <div className="already-register">
           <p className="form-message-signup">¿Ya posees una cuenta?</p>
           <a href="#"  className='form-signin-signup'>Ingresa</a>
        </div>
      </form>
    </div>
  )
}
