import { useParams } from 'react-router'
import VerifiedSignUp from './VerifiedSignUp'
import React, {Fragment, useState} from 'react'

// css
import './HandlerSignUp.css'

export default function HandlerSignUp(){
  const { token } = useParams()
  const API_SERVER = 'http://localhost:5000'
  const [updated, setUpdated ] = useState({ verify: false, username:'', waiting: false, error: ''})

  const handlerEmail = async (e) => {
    e.preventDefault()
    setUpdated({ ...updated, waiting: true })

    if(updated.verify) return

    await fetch(`${API_SERVER}/users/register-verify`, {
      headers: {
        'Content-Type': 'application/json',
        'Register': token,
      }
    }).then( response => response.json() ).then( responseJSON => {

      responseJSON.error ? setUpdated({...updated, waiting: false}) : setUpdated({ verify: true, username: responseJSON.username})
    } ).catch(error =>  setUpdated({ ...updated, waiting: true, error }))

  }
  return(
    <Fragment>
      { !updated.verify ? 
        (
           <div className='verify-email-wrapper'>
             <h1 className='verify-email-message'>Para verificar tu correo electrónico, por favor presiona el siguiente botón
             </h1>
             <button className='btn-verify-email' onClick={ handlerEmail }>
               {!updated.waiting ? 'Verificar correo': <div className='spin'></div>}
             </button>
           </div>
        ) : 
        (
          <VerifiedSignUp username = { updated.username } />
        )
    }

    </Fragment>
  )

}
