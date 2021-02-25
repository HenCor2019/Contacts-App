import React from 'react'
import {Link} from 'react-router-dom'

// CSS FILES
import './pageNotFound.css'

// IMAGES
import Search from '../../img/page_not_found.svg'

export default function PageNotFound(){
  
  return(
    <div className="pnf-container">
      <div className="pnf-img-container">
        <img className="pnf-img" src={Search} alt="page not found" />
      </div>
      <div className="pnf-message">
        <h1 className="pnf-message-title">404</h1>
        <p className="pnf-message-body">Parece que falta esta página. No te preocupes, nuestro mejor experto está en este caso.</p>
        <p className="pnf-message-footer">Mientras tanto, ¿Por qué no lo intentas de nuevo?</p>
        <button className="pnf-go-home">
            <Link className="pnf-go-home-link" to='/'>Ir a inicio</Link>
        </button>
      </div>
    </div>
  )
}
