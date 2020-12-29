import React, { Fragment } from 'react';
import './SignIn.css'
import LoginImg from './../../img/contacts_login.svg'
import SignInForm from '../../components/SignIn/SignInForm/SignInForm'
import SocialMedia from '../../components/SignIn/Social-Media/SocialMedia';

export default function SignIn(){
  return(
    <Fragment>
      <div className='wrapper'>
         <div className='left-color'></div>
         <SignInForm />
         <div className='right-color'>
          <img src={LoginImg} alt='login contacts support' className='right-img' />
          <SocialMedia />
         </div>
      </div>
    </Fragment>
  )
}