import React, { Fragment, useState } from 'react'
import ScreenSplitLeft from '../../components/ScreenSplit/ScreenSplitLeft/ScreenSplitLeft'
import ScreenSplitRight from '../../components/ScreenSplit/ScreenSplitRight/ScreenSplitRight'
import SignUpForm from '../../components/SignUp/SignUpForm/SignUpForm'
import Register from '../../components/SignUp/Register/Register'
import './SignUp.css'
import {registerUser} from '../../services/Services'

const MESSAGE_SEND={ 
  header:'Enviado',
  body:'Ingresa a tu dirección de correo electrónico y sigue las instrucciones'
}

export default function SignUp(){

  const [ register, setRegister ] = useState({ message: '', error: false, loading: false, success: false })
  const [ email, setEmail ] = useState('')
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  const handlerOnSubmit = async (email, username, password) => {

    await registerUser(email, username, password).then(response => {

      if(!response.error){
         setRegister({ ...register, loading:false, success:true })
         return
      }

      setRegister({ ...register,  message: response.message, error: true, loading:false })
      return
    })
  }

  return(
    <Fragment>
      { !register.success 
       ?  
      (<div className='sign-up-wrapper'>
      <ScreenSplitLeft />
      <SignUpForm
         email={email}
         username={username}
         password={password}
         setEmail={setEmail} 
         setUsername={setUsername}
         setPassword={setPassword}
         handlerOnSubmit={handlerOnSubmit}
         register={register}
         setRegister={setRegister}
      />
      <ScreenSplitRight />
      </div> ) 
      :
        <Register
           header={MESSAGE_SEND.header}
           body={MESSAGE_SEND.body}
        />
      }
    </Fragment>
  )
}
