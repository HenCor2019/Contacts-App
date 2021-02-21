import React from 'react'
import Input from '../Input/Input'
import { useParams } from 'react-router'

//css files
import './RequestPasswordHandlerForm.css'
import ButtonForm from '../ButtonForm/ButtonForm'
import InformationMessage from '../InformationMessage/InformationMessage'

const INSTRUCTIONS_MESSAGE = 'Introduce a continuación tu nueva contraseña'

export default function RequestPasswordHandlerForm(props){

  const { password, setPassword, status, setStatus, handlerOnSubmit } = props

  const { token } = useParams()

  const handlerOnChange = (e,save) => save(e.target.value)

  const _handlerOnSubmit = async e => {
    e.preventDefault()

    setStatus({ ...status,error: false, loading: true, message: '' })

    if(!password){
      setStatus({ ...status, error: true, loading: false, message: 'Introduce tu nueva contraseña'})
      return
    }

    handlerOnSubmit(password, token)

  }

  return(
    <div className="form-wrapper-request">
      <form className="form-request" onSubmit={_handlerOnSubmit}>
        <h1 className="form-title-request">Recuperación de contraseña</h1>
        <p className="form-message-request">{INSTRUCTIONS_MESSAGE}</p>
        <Input 
          id='password'
          title='Nueva contraseña'
          type='password'
          value={password}
          placeholder='Ingresa tu nueva contraseña'
          onChange={(e) => handlerOnChange(e,setPassword)}
        />
        <ButtonForm loading={status.loading} message='Restablecer contraseña' />
        <InformationMessage error={status.error} message={status.message} />
      </form>
    </div>

  )
}
