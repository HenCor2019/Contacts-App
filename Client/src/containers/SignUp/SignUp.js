import React, { Fragment, useState } from 'react'
import BannerLeft from '../../components/SignUp/BannerLeft/BannerLeft'
import BannerRight from '../../components/SignUp/BannerRight/BannerRight'
import SignUpForm from '../../components/SignUp/SignUpForm/SignUpForm'
import Register from '../../components/SignUp/Register/Register'
import './SignUp.css'

export default function SignUp(){

  const [ register, setRegister ] = useState(false)
  const [ email, setEmail ] = useState('')
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  return(
    <Fragment>
      { !register 
       ?  
      (<div className='sign-up-wrapper'>

      <BannerLeft title='HenCor' />

      <SignUpForm
         email={email}
         username={username}
         password={password}
         setEmail={setEmail} 
         setUsername={setUsername}
         setPassword={setPassword}
         setRegister={setRegister}
      />

      <BannerRight 
        title='Controla tus contactos' 
        message='Agenda los contactos más importantes'
      />
      </div> ) 
      :
        <Register
           email={ email }
           username={ username }
        />
      }
    </Fragment>
  )
}
