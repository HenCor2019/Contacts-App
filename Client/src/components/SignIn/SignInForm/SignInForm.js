import React, {useState} from 'react'
import Input from '../../Input/Input'
import Submit from './Submit/Submit'
import FormFooter from '../../FormFooter/FormFooter'

//css files
import './SignInForm.css'

export default function SignInForm(){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handlerOnChange = (e, save) => save(e.target.value)

  const handlerOnSubmit = e => e.preventDefault()

  return(
    <div className='form-wrapper'>
      <h1 className='form-title'>
        Bienvenido a<br /><span>HenCor <span>contactos</span></span>
      </h1>
      <form className='form-body' onSubmit={handlerOnSubmit}>
        <Input
           id='email'
           type='email'
           title='Correo'
           value={email}
           placeholder='Ingresa tu correo'
           onChange={(e) => handlerOnChange(e,setEmail)}
        />
        <Input
           id='password'
           type='password'
           title='Contraseña'
           value={password}
           placeholder='Ingresa tu contraseña'
           onChange={(e) => handlerOnChange(e, setPassword)}
        />
        <Submit />
        <FormFooter message='¿No posees una cuenta?' route='/signUp' routeMessage='Registrarse'/>
        <FormFooter message='¿Olvidaste tu correo?' route='/request-password' routeMessage='Recuperar correo'/>
      </form>
    </div>
  )
}
