import React, {Fragment} from 'react'
import './Input.css'

export default function Input({ id, title, type }){
  return(
    <Fragment>
      <label htmlFor={id} className='form-label'>{title}</label>
      <br />
      <input type={type} id={ id } className='form-input'  />
    </Fragment>
  )
}
