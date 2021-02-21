import React from 'react'
import {Link} from 'react-router-dom'
import './FormFooter.css'

export default function FormFooter({ message, route, routeMessage }){
  return(
    <div className="form-footer-wrapper">
       <p className='form-footer-text'>{message}</p>
       <Link to={route} className='form-footer-link'>
         {routeMessage}
       </Link>
    </div>
  )
}
