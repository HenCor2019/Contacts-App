import axios from 'axios'

const BASE_URI = 'http://localhost:5000'

export async function registerUser(email, username, password){

  try{

    const response = await axios({
      url: `${BASE_URI}/users/register`,
      method: 'POST',
      data: { email, username, password },
    })

    return response.data

  }catch( error ){
    return error.response.data
  }
}

export async function registerHandler(token){

  try{
    const response = await axios({
      url: `${BASE_URI}/users/register-verify`,
      method:'GET',
      headers:{
        'Register': token
      }
    })

    return response.data
    
  }catch(error){
    return error.response.data
  }
}

export async function requestPassword(data) {
  try{

    const response = await axios({
      url: `${BASE_URI}/users/request-password`,
      method: 'POST',
      data: { data },
    })

    return response.data
  }catch(error){
    return error.response.data
  }
}

export async function requestPasswordHandler(password, token) {
  try{

    const response = await axios({
      url: `${BASE_URI}/users/recovery-password`,
      method:'POST',
      headers: { "Reset": token },
      data: { password }
    })

    return response.data

  }catch(error) {
    return error.response.data

  }
}
