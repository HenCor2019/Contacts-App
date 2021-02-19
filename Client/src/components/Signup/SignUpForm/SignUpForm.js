import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Input from '../../SignIn/SignInForm/Input/Input'
import './SignUpForm.css'

export default function SignUpForm(props){

  let { email,
        password,
        username,
        setEmail,
        setUsername,
        setPassword,
        setRegister } = props

   const [ preRegister, setPreRegister ] = useState({ message: '', error: true, waiting: false })

  const handlerOnChange = (e, setProp)  => {
     const value = e.target.value;
     setProp(value)
  }

   const handlerOnSubmit = async (e) => {
      e.preventDefault()
      setPreRegister({message: '', waiting: true, error: true})

      const response = await fetch('http://localhost:5000/users/register',{
         method: 'POST',
         headers: {
            "Content-Type": "Application/json",
         },
         body: JSON.stringify({ email, username, password })
      })

      const responseJSON = await response.json()

      if(responseJSON.error){
         setRegister(false)
         setPreRegister({...preRegister, error: false, message: responseJSON.message})
         return
      }

      setRegister(true)
   }

  return(
    <div className="form-wrapper-signup">
      <form className="form-body-signup" onSubmit={handlerOnSubmit}>
        <h1 className="form-title-signup">Registrarse</h1>
        <Input
           id='email'
           title='Correo'
           type='email'
           value={email}
           onChange={(e) => handlerOnChange(e, setEmail)}
        />
        <Input
           id='username'
           title='Nombre de usuario'
           type='text'
           value={username}
           onChange={(e) => handlerOnChange(e, setUsername)}
        />
        <Input
           id='password'
           title='Contraseña'
           type='password'
           value={password}
           onChange={(e) => handlerOnChange(e, setPassword)}
        />
         <button type='submit' className={ preRegister.waiting ? 'btn-disable btn-submit-signup' : 'btn-submit-signup' } >
           
            { preRegister.waiting ? <div className='spin'></div> : 'Registrarse' }
         </button>

         <p className={preRegister.error ? 'signup-wait' : 'signup-err'}>{ preRegister.message }</p>
        <div className="already-register">
           <p className="form-message-signup">¿Ya posees una cuenta?</p>
           <Link to='/signIn' className='form-signin-signup' >
              Ingresa
           </Link>
        </div>
      </form>
    </div>
  )
}
